const playerModel = require('../database/Models/playersModel')

const getPlayers = async () => {
    return await playerModel.find().sort( { "rank": 1 } )
}

const getPlayersById = async (id) => {
    return await playerModel.findById(id)
}

const addPlayer = async (player) => {
    const { rank, firstname, lastname, age, club, trophies, nationality, image } = player
    return new playerModel({ rank, firstname, lastname, age, club, trophies, nationality, image }).save()
}

const updatePlayer = async (id, player) => {
    const { rank, firstname, lastname, age, club, trophies, nationality, image } = player
    console.log(firstname, lastname);
    const response =  await playerModel.findByIdAndUpdate(id, { rank, firstname, lastname, age, club, trophies, nationality, image }, { new: true })
    console.log(response);
    return response
}

const deletePlayer = async (id) => {
    return await playerModel.findByIdAndDelete(id)

}

module.exports = {
    getPlayers, getPlayersById, addPlayer, updatePlayer, deletePlayer
}
