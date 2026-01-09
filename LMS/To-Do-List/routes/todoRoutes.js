const express = require("express");
const router = express.Router();

let todos = [];

// READ
router.get("/", (req, res) => {
    res.render("index", { todos });
});

// CREATE
router.post("/add", (req, res) => {
    todos.push({
        id: Date.now(),
        task: req.body.task
    });
    res.redirect("/");
});

// DELETE
router.post("/delete/:id", (req, res) => {
    todos = todos.filter(todo => todo.id != req.params.id);
    res.redirect("/");
});

// EDIT PAGE
router.get("/edit/:id", (req, res) => {
    const todo = todos.find(t => t.id == req.params.id);
    res.render("edit", { todo });
});

// UPDATE
router.post("/update/:id", (req, res) => {
    todos = todos.map(todo =>
        todo.id == req.params.id
            ? { ...todo, task: req.body.task }
            : todo
    );
    res.redirect("/");
});

module.exports = router;
