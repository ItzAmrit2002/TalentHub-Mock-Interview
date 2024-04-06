const nodemailer = require("nodemailer");

const sendMail = async (email, name, id) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		auth: {
			user: "garrison.kovacek24@ethereal.email",
			pass: "12QsxgMNWAqvSEMf2A",
		},
	});
	const html = `
        <h1>Hey ${name}, Welcome to Talent Hub!</h1>
        <p>Please click the link below to verify your email:</p>
        <a href="http://localhost:8000/api/email/verify/${id}">Verify Email</a>
    `;
	try {
		const info = await transporter.sendMail({
			from: '"Talent Hub" <garrison.kovacek24@ethereal.email>',
			to: email,
			subject: "Email verification from Talent Hub",
			html: html,
		});

		console.log("Message sent: %s", info.messageId);
		return info;
	} catch (err) {
		console.log(err);
	}
};

module.exports = { sendMail };
