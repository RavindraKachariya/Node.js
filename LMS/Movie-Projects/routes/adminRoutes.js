const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// Dashboard
router.get("/", async (req, res) => {
    const movies = await Movie.find();
    res.render("admin/dashboard", { movies });
});

// Add Page
router.get("/add", (req, res) => {
    res.render("admin/addMovie");
});

// Add Movie
router.post("/add", async (req, res) => {
    await Movie.create(req.body);
    res.redirect("/admin");
});

// Edit Page
router.get("/edit/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("admin/editMovie", { movie });
});

// Update
router.post("/edit/:id", async (req, res) => {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/admin");
});

// Delete
router.get("/delete/:id", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/admin");
});

module.exports = router;