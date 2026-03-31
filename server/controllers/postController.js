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
      profilePic: req.user?.profilePic || "https://i.pinimg.com/236x/3f/1f/f7/3f1ff79444d96cb8c83dd692ac625230.jpg",
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

exports.createComment = async (req, res) => {
  try {
    const { text, userName, profilePic } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const newComment = {
      userName: userName || req.user?.username || "Anonymous",
      profilePic: profilePic || "https://wallpapers.com/images/high/meme-profile-picture-vnigweuy4onsxunv.jpg",
      text: text.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $push: { comments: newComment } },
      { new: true },
    );

    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
