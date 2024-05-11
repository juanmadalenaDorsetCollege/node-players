const Router = require('express')
const moviesControllers = require('../controllers/movies.controllers')

const router = Router()

router.get("/movies",moviesControllers.getMovies)
router.get("/movies/:title", moviesControllers.getMovieByTitle)

module.exports = router