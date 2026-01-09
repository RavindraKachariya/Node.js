const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/userdb`);

const userSchema = mongoose.Schema({
    Name: String,
    Email: String,
});

module.exports = mongoose.model('user', userSchema);