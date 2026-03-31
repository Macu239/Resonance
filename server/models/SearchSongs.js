const mongoose = require('mongoose');

const searchSongSchema = new mongoose.Schema({
    albumJacket: { type: String, required: true },
    songTitle: { type: String, required: true },
    songArtist: { type: String, required: true },
    songLength: { type: String, required: true }
});

module.exports = mongoose.model('Song', searchSongSchema);
