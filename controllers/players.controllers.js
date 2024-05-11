const playerService = require('../services/players.services')

const getPlayers = (_req, res) => {
    try {
        playerService.getPlayers()
        .then( players => res.json({ players }) )

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        })
    }
}

const getPlayersById = (req, res) => {
    try {
        const { id } = req.params
        playerService.getPlayersById( id )
        .then( player => res.json({ player }) )

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        })
    }
}

const addPlayer = (req, res) => {
    try {
        playerService.addPlayer( req.body )
        .then( () => res.status(201).json({ data: "Created" }))

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        })
    }
}

const updatePlayer = (req, res) => {
    try {
        const { id } = req.params        
        playerService.updatePlayer( id, req.body )
        .then( (player) => res.status(201).json({ data:"Updated" ,player } ))

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        })
    }
}

const deletePlayer = (req, res) => {
    try {
        const { id } = req.params
        playerService.deletePlayer(id)
        .then( player => res.status(202).json({data:"Deleted", player}))

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: error
        })
    }
}

module.exports = {
    getPlayers, getPlayersById, addPlayer, updatePlayer, deletePlayer
}