const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome');
});

app.listen(3000);

// npm i express jsonwebtoken bcrypt cookie-parser ejs nodemon mongoose