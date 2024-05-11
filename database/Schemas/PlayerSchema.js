const mongoose = require('mongoose')

//Schema for soccer players
const PLAYER_SCHEMA = mongoose.Schema({
    rank: Number,
    firstname: String,
    lastname: String,
    age: Number,
    club: String,
    trophies: Number,
    nationality: String,
    image: String
})


module.exports = PLAYER_SCHEMA