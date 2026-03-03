const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  attachments: {
    image: { type: String, default: null },
    playlist: { type: String, default: null },
    album: { type: String, default: null },
    singleMusic: { type: String, default: null },
    artist: { type: String, default: null },
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
