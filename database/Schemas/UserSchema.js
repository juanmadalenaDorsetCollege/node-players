const mongoose = require('mongoose')
const bcrypt = require('../../adapters/bcrypt.adapter')

//Schema for Users
const USER_SCHEMA = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

USER_SCHEMA.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hashPassword(this.password)
    next()
})

USER_SCHEMA.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.comparePassword(plaintext, this.password))
}

module.exports = USER_SCHEMA