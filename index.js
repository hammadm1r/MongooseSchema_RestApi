const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./routers/authRouter');
require ('dotenv').config();
const db = require('./db');

const app = express();

const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use('/auth',authController);
app.get('/',function(req,res){
    res.send('Hello World, How I can Help You')
})

app.listen(PORT);