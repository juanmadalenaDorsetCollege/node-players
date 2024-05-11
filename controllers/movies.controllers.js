const { MoviesSchema } = require('../database/Schemas/MoviesSchema');
const mongoose = require('../database/mongoose')

const getMovies = async (_, res)=>{
    try{
        const con = await mongoose();
        const Movies = con.model('movies', MoviesSchema);
        const movies = await Movies.find().limit(10);
        res.send(movies)
    }
    catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

const getMovieByTitle = async (req, res)=>{
    try{
        const title = req.params.title;
        const con = await mongoose();
        const Movies = con.model('movies', MoviesSchema);
        const movies = await Movies.find({title: title}).limit(2);
        const movie_titles = movies.map( ({title}) => (title))
        res.json(movies)
    }
    catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

module.exports = {
    getMovieByTitle,getMovies
}