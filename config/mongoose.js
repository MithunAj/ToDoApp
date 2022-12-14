// requiring the library
const mongoose = require('mongoose');

//setting up the connection to db
mongoose.connect('mongodb://localhost/toDoApp');

// opening the connection to mongo db
const db = mongoose.connection;

//check if the conenction as any problem 
db.on('error',console.error.bind(console,'There was an error opening the connection to db'));

//if the connection is successfully opened
db.once('open',function(){
    console.log('Successfully connected to database todoapp')

});

module.exports = db;