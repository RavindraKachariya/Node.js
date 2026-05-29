const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Import controllers
const authController = require('./controllers/authController');
const articleController = require('./controllers/articleController');
const { authenticateToken, authorizeRole } = require('./middleware/authMiddleware');

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// Authentication routes
app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/logout', authController.logout);

// Article routes (protected)
app.get('/articles', authenticateToken, articleController.getAllArticles);
app.get('/myarticles', authenticateToken, articleController.getUserArticles);
app.get('/articles/create', authenticateToken, articleController.showCreateForm);
app.post('/articles/create', authenticateToken, articleController.createArticle);
app.get('/articles/edit/:id', authenticateToken, articleController.showEditForm);
app.put('/articles/edit/:id', authenticateToken, articleController.updateArticle);
app.delete('/articles/delete/:id', authenticateToken, articleController.deleteArticle);
app.get('/articles/:id', authenticateToken, articleController.getArticleById);
app.post('/articles/:articleId/comment', authenticateToken, articleController.createComment);
app.delete('/articles/comment/:commentId/delete', authenticateToken, articleController.deleteComment);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});