const mongoose = require('mongoose')
const PLAYER_SCHEMA = require('../Schemas/PlayerSchema')

const model = mongoose.model('SoccerPlayer', PLAYER_SCHEMA, 'soccer_players')

module.exports = model