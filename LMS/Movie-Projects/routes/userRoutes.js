const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", async (req, res) => {
    const search = req.query.search || "";

    const movies = await Movie.find({
        title: { $regex: search, $options: "i" }
    });

    res.render("index", { movies });
});

router.get("/movie/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("movieDetails", { movie });
});

module.exports = router;