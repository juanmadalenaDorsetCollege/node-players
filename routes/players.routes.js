const Router = require('express')
const playersController = require('../controllers/players.controllers')

const router = Router()

router.get("/players", playersController.getPlayers)
router.post("/players", playersController.addPlayer)
router.get("/players/:id", playersController.getPlayersById)
router.put("/players/:id", playersController.updatePlayer)
router.delete("/players/:id", playersController.deletePlayer)


module.exports = router;