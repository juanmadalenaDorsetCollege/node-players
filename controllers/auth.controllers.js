const authServices = require('../services/auth.services');

const login = (req, res) => {
    const { username, password } = req.body;

    authServices.login(username, password)
    .then( data => {
        return res.json(data)
    })
    .catch( error => {
        res.status(400).json({
            msg: error
        })
    })
}

const register = (req, res) => {
    authServices.register(req.body)
    .then( data => {
        return res.status(201).json(data)
    })
    .catch( error => {
        res.status(500).json({
            msg: error
        })
    })
}

module.exports = {
    login, register
}