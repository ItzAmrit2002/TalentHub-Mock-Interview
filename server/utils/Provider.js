// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const passport = require("passport");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const {sendMail} = require("../controllers/verify");


// const connectPassport = () => {
// 	passport.use(
// 		new GoogleStrategy(
// 			{
// 				clientID: process.env.GOOGLE_CLIENT_ID,
// 				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 				callbackURL: "http://localhost:8000/api/auth/newlogin",
// 				passReqToCallback: true,
// 			},
// 			(request, accessToken, refreshToken, profile, done) => {
// 				const state = JSON.parse(decodeURIComponent(request.query.state));
// 				const role = state.role;
// 				console.log("from passport", role);
// 				User.findOne({ googleId: profile.id })
// 					.then((existingUser) => {
// 						if (existingUser) {
// 							const token = jwt.sign(
// 								{
// 									id: existingUser._id,
// 									email: existingUser.email,
// 									role: existingUser.role,
// 									name: existingUser.name,
// 									googleId: profile.id,
// 								},
// 								process.env.ACCESS_TOKEN_SECRET,
// 								{ expiresIn: "5m" }
// 							);
// 							done(null, { token: token, role: existingUser.role });


// 						} else {
// 							const newUser = new User({
// 								email: profile.emails[0].value,
// 								name: profile.displayName,
// 								role: role,
// 								googleId: profile.id,
// 							});

// 							newUser
// 								.save()
// 								.then((savedUser) => {
// 									// User created successfully, generate JWT token and return it
// 									const token = jwt.sign(
// 										{
// 											id: savedUser._id,
// 											email: savedUser.email,
// 											role: savedUser.role,
// 											name: savedUser.name,
// 											googleId: profile.id,
// 										},
// 										process.env.ACCESS_TOKEN_SECRET,
// 										{ expiresIn: "5m" }

// 									);
// 									const mailResponse = await sendMail(email, name, user.id);
// 									done(null, { token: token, role: savedUser.role });
// 								})
// 								.catch((error) => {
// 									// Error occurred while saving user to the database
// 									console.log(error);
// 									done(error);
// 								});
// 						}
// 					})
// 					.catch((error) => {
// 						// Error occurred while checking for existing user in the database
// 						console.log(error);
// 						done(error);
// 					});
// 			}
// 		)
// 	);
// };

// module.exports = { connectPassport };

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendMail } = require("../controllers/verify");

const connectPassport = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "http://localhost:8000/api/auth/newlogin",
                passReqToCallback: true,
            },
            async (request, accessToken, refreshToken, profile, done) => {
                try {
                    const state = JSON.parse(decodeURIComponent(request.query.state));
                    const role = state.role;
                    console.log("from passport", role);

                    // Find existing user
                    let existingUser = await User.findOne({ googleId: profile.id });

                    if (existingUser) {
                        // Generate token for existing user
                        const token = jwt.sign(
                            {
                                id: existingUser._id,
                                email: existingUser.email,
                                role: existingUser.role,
                                name: existingUser.name,
                                googleId: profile.id,
                            },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: "5m" }
                        );
                        done(null, { token: token, role: existingUser.role });
                    } else {
                        // Create a new user
                        const newUser = new User({
                            email: profile.emails[0].value,
                            name: profile.displayName,
                            role: role,
                            googleId: profile.id,
                        });

                        const savedUser = await newUser.save();

                        // Generate token for new user
                        const token = jwt.sign(
                            {
                                id: savedUser._id,
                                email: savedUser.email,
                                role: savedUser.role,
                                name: savedUser.name,
                                googleId: profile.id,
                            },
                            process.env.ACCESS_TOKEN_SECRET,
                            { expiresIn: "5m" }
                        );

                        // Send verification email
                        await sendMail(savedUser.email, savedUser.name, savedUser._id);
                        done(null, { token: token, role: savedUser.role });
                    }
                } catch (error) {
                    console.log(error);
                    done(error);
                }
            }
        )
    );
};

module.exports = { connectPassport };

