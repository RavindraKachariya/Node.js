const Book = require("../models/Book");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");


// Dashboard
exports.getDashboard = async (req, res) => {
    const books = await Book.find();
    res.render("admin/dashboard", { books });
};

// Add Form
exports.getAddBook = (req, res) => {
    res.render("admin/addBook");
};

// Create Book
exports.createBook = async (req, res) => {
    await Book.create(req.body);
    res.redirect("/admin");
};

// Edit Form
exports.getEditBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.render("admin/editBook", { book });
};

// Update Book
exports.updateBook = async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin");
};

// Delete Book
exports.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect("/admin");
};

// Registration & Authentication

// Show Register Page
exports.getRegister = (req, res) => {
    res.render("admin/register");
};

// Register Admin
exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body;

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
        return res.send("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
        name,
        email,
        password: hashedPassword
    });

    res.redirect("/admin/login");
};

// Login & Logout

// Show Login Page
exports.getLogin = (req, res) => {
    res.render("admin/login");
};

// Login Admin
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
        return res.send("Invalid Email");
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        return res.send("Incorrect Password");
    }

    req.session.admin = {
        id: admin._id,
        name: admin.name,
        email: admin.email
    };

    res.redirect("/admin");
};

// Logout Admin
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect("/admin/login");
    });
};