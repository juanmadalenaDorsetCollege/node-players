const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
}

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Unauthorized' });
    }
}

module.exports = { createToken, verifyToken }