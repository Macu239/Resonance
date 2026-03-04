const Post = require("wi26-hack-team-2\server\models\Post.js");

exports.createPost = async (req, res) => {
  try {
    const { content} = req.body;

    if (!content || !req.user) {
      return res
        .status(400)
        .json({ message: "Content and postedBy are required" });
    }

    const post = await Post.create({
      content,
      postedBy: req.user?.id,
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
