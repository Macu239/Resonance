const Post = require("../models/Post.js");

exports.createPost = async (req, res) => {
  try {
    const { Content } = req.body;

    if (!Content || !req.user) {
      return res
        .status(400)
        .json({ message: "Content and postedBy are required" });
    }

    const post = await Post.create({
      Content,
      postedBy: req.user?.id,
      createdAt: new Date(),
      attachments: {
        image: "",
        playlist: "",
        album: "",
        singleMusic: "",
        artist: "",
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
    const posts = await Post.find()
      .populate("postedBy", "username")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
