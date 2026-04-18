const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, status, category } = req.query;
    
    const query = {};
    if (status) query.status = status;
    if (category) query.category = category;

    const posts = await Post.find(query)
      .populate('author', 'username email')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await Post.countDocuments(query);

    res.json({
      success: true,
      data: posts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author', 'username email');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, category, tags, status, image } = req.body;

    const post = await Post.create({
      title,
      content,
      author: req.user._id,
      category,
      tags,
      status,
      image
    });

    await post.populate('author', 'username email');

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this post' });
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true, runValidators: true }
    ).populate('author', 'username email');

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }

    await post.deleteOne();

    res.json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};