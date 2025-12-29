const express = require('express');
const app = express();
const port = 3000;

// routes
app.get('/', (req, res) => {
    res.send("Home Page");
});

// error route
app.get('/error', (req, res) => {
    throw new Error("Error occurred");
});

// error handler
app.use((err, req, res, next) => {
    res.status(500).send("server Error");
})

// server
app.listen(port, () => {
    console.log("Server running...");
})