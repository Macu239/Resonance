const Post = require("../models/Post.js");

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content /*!req.user*/) {
      return res
        .status(400)
        .json({ message: "Content and postedBy are required" });
    }

    const post = await Post.create({
      content,
      postedBy: req.user?.id || "testing",
      createdAt: new Date(),
      attachments: {
        image: null,
        playlist: null,
        album: null,
        singleMusic: null,
        artist: null,
      },
      likes: 0,
      comments: [],
      reposts: 0,
      shares: 0,
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); //await Post.find().populate("postedBy", "username").sort({ createdAt: -1 }

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true },
    );

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.sharePost = async (req, res) => {
  console.log("SHARE HIT");
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { shares: 1 } },
      { new: true },
    );

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
