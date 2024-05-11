const mongoose = require('mongoose');
const { Schema } = mongoose;

const MoviesSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    duration: { type: Number, required: true },
    genre: { type: String, required: true },
    rate: { type: Number, required: true },
    actors: { type: [String], required: true },
    plot: { type: String, required: true },
    posterUrl: { type: String, required: true },
}); 

module.exports = {
    MoviesSchema
}