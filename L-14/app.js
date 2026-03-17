const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(cookieParser());

app.get("/", function (req, res) {
    // Set Cookie
    res.cookie("name", "Ravindra");
    res.send("Done");

    // bcrypt password encryption
    bcrypt.genSalt(10, function (req, res) {
        bcrypt.hash("Ravindra", salt, function (err, hash) {
            console.log(hash);
        });
    });

    // bcrypt password dcryption
    bcrypt.compare("Ravindra", "duixjsaomklcdfgmjnddnismkcvfinjdsmliom", function (err, res) {
        console.log(res);
    });

    //JWT
    let token = jwt.sign({
        email: "ravindrakachariya@gmail.com"
    }, "Hello");
    res.cookie("token", token);
    console.log(token);
});

app.get("/read", function (req, res) {
    // Set Cookie
    console.log(req.cookies);
    res.send("Read Page");

    // JWT Read 
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token, "Hello");
    console.log(data);
});

app.listen(3000);