const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    imglink: { type: String, required: true },
    desc: { type: String, required: true },
    embed: { type: String, required: true },
    cat: { type: String, required: true },
    year: { type: String, required: true },
    rating: { type: String, required: true },
},
    { timestamps: true, }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;