const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  profilePic: { type: String, default: null },
  postedBy: {
    type: String,
    required: true,
  } /*{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },*/,
  createdAt: { type: Date, default: Date.now },
  attachments: {
    image: { type: String, default: null },
    playlist: { type: String, default: null },
    album: { type: String, default: null },
    singleMusic: { type: String, default: null },
    artist: { type: String, default: null },
  },
  likes: { type: Number, default: 0 },
  comments: [
    {
      userName:   { type: String, default: "Anonymous" }, // was: userId (ObjectId)
      profilePic: { type: String, default: null },        // was: missing
      text:       { type: String, required: true },       // was: comment
      createdAt:  { type: Date,   default: Date.now },
      likes:      { type: Number, default: 0 },
    },
  ],
  reposts: { type: Number, default: 0 }, // count of reshares
  shares: { type: Number, default: 0 }, // external shares or link shares
});

module.exports = mongoose.model("Post", postSchema);
