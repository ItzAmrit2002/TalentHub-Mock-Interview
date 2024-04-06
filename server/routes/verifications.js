const router = require("express").Router();
const User = require("../models/User");

router.get("/verify/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            res.status(400).send("User not found");
            return;
        }
        user.isVerified = true;
        await user.save();
        res.status(200).send("Email verified, you can now login!");
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;