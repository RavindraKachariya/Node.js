// import express
const express = require('express');

// import dotenv
const dotenv = require('dotenv');

// load env file
dotenv.config({ path: "./.env" });

// create app
const app = express();

// port from env
const port = process.env.PORT || 3000;

// read form data
app.use(express.urlencoded({ extended: true }));

// set ejs
app.set("view engine", "ejs");

// users array (temporary data)
let users = [];

// id counter
let id = 1;

// home page
app.get('/', (req, res) => {
    res.render("index", { users });
});

// add user page
app.get('/add', (req, res) => {
    res.render("add");
});

// add user logic
app.post('/add', (req, res) => {
    const { name, email } = req.body;

    users.push({ id: id++, name, email });

    res.redirect('/');
});

// edit user page
app.get('/edit/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.render("edit", { user });
});

// edit user logic
app.post('/edit/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    user.name = req.body.name;
    user.email = req.body.email;

    res.redirect('/');
});

// delete user
app.get('/delete/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.redirect('/');
});

// start server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
