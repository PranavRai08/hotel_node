//import
const mongoose = require("mongoose");

// MongoDB URL
const mongoURL = 'mongodb://localhost:27017/hotels';

//MongoDB Connection
mongoose.connect(mongoURL)
.then(() =>{
    console.log("connected.");
})
.catch((err) =>{
    console.error(err);
})

//Access the Default connection object
const db = mongoose.connection;

// Define Event Listener

// db.on('connected', () =>{
//     console.log('Connected to MongoDB Server.');
// });

// db.on('error', (err) =>{
//     console.log('MongoDB connection error:', err);
// });

db.on('disconnected', () =>{
    console.log('disconnected to MongoDB Server.');
});


//Export
module.exports = db;

