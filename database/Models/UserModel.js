const mongoose = require('mongoose')
const USER_SCHEMA = require('../Schemas/UserSchema')

const model = mongoose.model('User', USER_SCHEMA, 'users')

module.exports = model