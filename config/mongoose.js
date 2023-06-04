//require the library
const mongoose = require('mongoose');

mongoose.set('strictQuery',true);
// connect to the database

const url = process.env.MONGODB_URL;
mongoose.connect("mongodb+srv://admin:Anu123@cluster0.qec0i0r.mongodb.net/?retryWrites=true&w=majority"); 
// ||"mongodb://127.0.0.1/contact_list"

// acquire the connection to check if it is successfull
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connection to db'));

//successful
db.once('open',function(){
    console.log('successfull connected to the database');
});

module.exports = db;




