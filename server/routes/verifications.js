const router = require("express").Router();
const User = require("../models/User");
const path = require("path");

router.get("/verify/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(400).send("User not found");
            return;
        }
        user.isVerified = true;
        await user.save();
        console.log(path.join(__dirname, "../public/verification.html"))
        res.status(200).sendFile(path.join(__dirname, "../public/verification.html"));
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;