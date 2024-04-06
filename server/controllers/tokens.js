const jwt = require('jsonwebtoken')

const generateToken = (payload, time) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: time
    })
}

module.exports = { generateToken }