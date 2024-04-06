const router = require("express").Router();
const User = require("../models/User");
const { hashPassword, comparePassword } = require("../controllers/hash");
const { generateToken } = require("../controllers/tokens");
const passport = require('passport');
const {sendMail} = require("../controllers/verify");


router.get('/newlogin', passport.authenticate('google', { 
	scope: ['profile', 'email'],
	session: false,
	failureRedirect: `${process.env.FRONTEND_URL}/home`
}), (req, res) => {
	// Authentication success, set token as a cookie
	if(req.user){
		res.cookie("token", req.user.token, { httpOnly: true });
		// Send token to frontend along with a response JSON
		if(req.user.role === "student"){
			res.redirect(`${process.env.FRONTEND_URL}/studentdashboard`)
		}
		if(req.user.role== "interviewer"){
			res.redirect(`${process.env.FRONTEND_URL}/interviewerdashboard`)
		}
		
	}
	else{
		res.redirect(`${process.env.FRONTEND_URL}/login/student`)
	}
	
});
router.get('/googlelogin', (req, res, next) => {
    // Store the role query parameter in the session
	const state = encodeURIComponent(JSON.stringify({ role: req.query.role }));
    passport.authenticate('google', { scope: ['profile', 'email'], state: state })(req, res, next);
});


router.post("/register", async (req, res) => {
	const { name, email, password, role, confirmPassword } = req.body;
	if (!name || !email || !role || !password || !confirmPassword) {
		res.status(400).send("Please add all fields");
		return;
	}

	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400).send("User already exists");
		return;
	}

	if (password !== confirmPassword) {
		res.status(400).send("Passwords do not match");
		return;
	}

	const hashedPassword = await hashPassword(password);

	try {
		const user = new User({
			name: name,
			email: email,
			role: role,
			password: hashedPassword,
		});
		await user.save();
		
		const mailResponse = await sendMail(email, name, user.id);


		const token = generateToken(
			{ id: user.id, email: user.email, role: user.role, name: user.name },
			"5m"
		);
		res.cookie("token", token, { httpOnly: true });

		res.status(200).json({
			_id: user.id,
			email: user.email,
			name: user.name,
			role: user.role,
			token: token,
			mailResponse: mailResponse,
		});
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
		return;
	}
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		res.status(400).send("Please enter all the fields");
		return;
	}

	const userExists = await User.findOne({ email });

	if (!userExists) {
		res.status(400).send("Wrong email or password");
		return;
	}

	if(userExists.googleId){
		res.status(400).send("Please login with Google");
		return;
	}
	const validPass = await comparePassword(password, userExists.password);

	if (!validPass) {
		res.status(400).send("Wrong password");
		return;
	}
	const token = generateToken(
		{
			id: userExists.id,
			email: userExists.email,
			role: userExists.role,
			name: userExists.name,
		},
		"5m"
	);
	res.cookie("token", token, { httpOnly: true });
	res.status(200).json({
		_id: userExists.id,
		email: userExists.email,
		token: token,
		name: userExists.name,
		role: userExists.role,
		message: "Successfully logged in",
	});
});

module.exports = router;
