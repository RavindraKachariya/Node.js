const Article = require('../models/Article');
const User = require('../models/User');
const Comment = require('../models/Comment');

// Get all articles (public)
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .populate('author', 'username')
      .populate('comments')
      .sort({ createdAt: -1 });
    res.render('articleList', { articles });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Get articles by current user
exports.getUserArticles = async (req, res) => {
  try {
    const articles = await Article.find({ author: req.user.userId })
      .populate('author', 'username')
      .populate('comments')
      .sort({ createdAt: -1 });
    res.render('myArticles', { articles });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Show form to create new article
exports.showCreateForm = (req, res) => {
  res.render('articleForm', { article: null, action: '/articles/create' });
};

// Create new article
exports.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = new Article({
      title,
      content,
      author: req.user.userId
    });
    await article.save();

    // Add article reference to user's articles array
    await User.findByIdAndUpdate(req.user.userId, {
      $push: { articles: article._id }
    });

    res.redirect('/articles');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Show form to edit article
exports.showEditForm = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).render('error', { message: 'Article not found' });
    }
    // Check if the current user is the author
    if (article.author.toString() !== req.user.userId) {
      return res.status(403).render('error', { message: 'Unauthorized to edit this article' });
    }
    res.render('articleForm', { article, action: `/articles/edit/${article._id}` });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Update article
exports.updateArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).render('error', { message: 'Article not found' });
    }
    // Check if the current user is the author
    if (article.author.toString() !== req.user.userId) {
      return res.status(403).render('error', { message: 'Unauthorized to update this article' });
    }
    article.title = title;
    article.content = content;
    await article.save();
    res.redirect(`/articles/${article._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Delete article
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).render('error', { message: 'Article not found' });
    }
    // Check if the current user is the author
    if (article.author.toString() !== req.user.userId) {
      return res.status(403).render('error', { message: 'Unauthorized to delete this article' });
    }
    // Delete associated comments
    await Comment.deleteMany({ article: article._id });
    // Remove article reference from user's articles array
    await User.findByIdAndUpdate(req.user.userId, {
      $pull: { articles: article._id }
    });
    await article.deleteOne();
    res.redirect('/articles');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Get single article by ID
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id)
      .populate('author', 'username')
      .populate({
        path: 'comments',
        populate: { path: 'author', select: 'username' }
      });
    if (!article) {
      return res.status(404).render('error', { message: 'Article not found' });
    }
    res.render('articleItem', { article });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Create a comment on an article
exports.createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const article = await Article.findById(req.params.articleId);
    if (!article) {
      return res.status(404).render('error', { message: 'Article not found' });
    }
    const comment = new Comment({
      content,
      author: req.user.userId,
      article: article._id
    });
    await comment.save();

    // Add comment reference to article
    article.comments.push(comment._id);
    await article.save();

    res.redirect(`/articles/${article._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

// Delete a comment (only by author or admin)
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).render('error', { message: 'Comment not found' });
    }
    // Check if the current user is the author of the comment or an admin
    if (comment.author.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).render('error', { message: 'Unauthorized to delete this comment' });
    }
    // Remove comment reference from article
    await Article.findByIdAndUpdate(comment.article, {
      $pull: { comments: comment._id }
    });
    await comment.deleteOne();
    res.redirect(`/articles/${comment.article}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};