const jwt = require('../adapters/jwt.adapter');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });

    try {
        jwt.verifyToken(token);
        next();
    } catch (error) {
        res.status(400).json({ msg: 'Unauthorized' });
    }
}

module.exports = verifyToken