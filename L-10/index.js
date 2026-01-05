const express = require('express');
const app = express();

const userModel = require('./model/user.model');

app.get('/', (req, res) => {
    res.send('Welcome to User Management API');
});

// Create a new user
app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: 'Ravindra',
        username: 'ravindra123',
        email: 'ravindrakachariya@gmail.com'
    })
    res.send(createdUser);
})

// Update an existing user
app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ username: 'ravindra123' }, { name: 'Ravindra Kachariya' }, { new: true });
    res.send(updatedUser);
})

// Read a user
app.get('/read', async (req, res) => {
    // let allUsers = await userModel.find(); // give a array of all users
    // res.send(allUsers);
    let singleUser = await userModel.findOne({ username: 'ravindra123' }); // give a single user object
    res.send(singleUser);
});

// Delete a user
app.get('/delete', async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ username: 'ravindra123' });
    res.send(deletedUser);
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});