const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        lowercase: true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true,
        enum:['Seller','Buyer']
    }
})

module.exports = mongoose.model('Person',personSchema);
