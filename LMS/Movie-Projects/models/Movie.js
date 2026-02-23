const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    releaseYear: Number,
    rating: Number,
    genre: String,
    posterImage: String,
    description: String
});

module.exports = mongoose.model("Movie", movieSchema);