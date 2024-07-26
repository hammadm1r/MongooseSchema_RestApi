require('dotenv').config();
const mongoose = require ("mongoose");
URI = process.env.MONGO_URI;
mongoose.connect(URI);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('Connected to MongoDB');
})
db.on('error',(err)=>{
    console.log('Database Connection Error:',err);
})
db.on('disconnected',()=>{
    console.log('Database Disconnected');
})

module.exports = db;