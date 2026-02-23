require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const Book = require("./models/Book");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: "mysupersecretkey",
    resave: false,
    saveUninitialized: false
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", async (req, res) => {
    const search = req.query.search || "";

    const books = await Book.find({
        title: { $regex: search, $options: "i" }
    });

    res.render("index", { books });
});

app.get("/", (req, res) => {
    res.redirect("/admin/login");
});

app.get("/book/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.send("Book not found");
        }

        res.render("bookDetails", { book });

    } catch (error) {
        console.log(error);
        res.send("Invalid Book ID");
    }
});

app.use("/admin", adminRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});