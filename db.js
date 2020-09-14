var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/nodetest1');

var userSchema = new mongoose.Schema({
    username: String,
    useremail: String
}, { collection: 'userCollection' }
);


module.exports = { Mongoose: mongoose, UserSchema: userSchema }