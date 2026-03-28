const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    title:    { type: String },
    artist:   { type: String },
    album:    { type: String },
    duration: { type: String },
    cover:    { type: String },
    url:      { type: String },
});

module.exports = mongoose.model("Song", songSchema, "songs");
