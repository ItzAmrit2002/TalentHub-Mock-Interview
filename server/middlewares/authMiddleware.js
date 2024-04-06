//standard jwt middleware
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        res.status(401).send('Unauthorized: No token provided')
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user = await User.findById(decoded.id)
        next()
    } catch (err) {
        res.status(401).send('Unauthorized: Invalid token')
    }
}

module.exports = authMiddleware