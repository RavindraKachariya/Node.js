const express = require('express');
const path = require('path');
const User = require('./src/model/user.model');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/read', async (req, res) => {
    let allUsers = await User.find();
    res.render('read', { users: allUsers });
});

app.get('/edit/:id', async (req, res) => {
    let user = await User.findOne({ _id: req.params.id });
    res.render('edit', { user });
});


app.post('/update/:id', async (req, res) => {
    let { name, email } = req.body;

    await User.findOneAndUpdate(
        { _id: req.params.id },
        { Name: name, Email: email },
        { new: true }
    );

    res.redirect('/read');
});

app.post('/create', async (req, res) => {

    let { name, email } = req.body;

    let createdUser = await User.create({
        Name: name,
        Email: email,
    });

    res.redirect('/read');
});

app.get('/delete/:id', async (req, res) => {
    let users = await User.findOneAndDelete({ _id: req.params.id });
    res.redirect('/read');
});


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});