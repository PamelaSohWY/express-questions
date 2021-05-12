const express = require('express');
const hbs = require('hbs')

//Setup express
let app = express();

//setup view engine 
app.set('view engine','hbs')

app.use(express.static('public'))

app.get('/', function(req,res){
    res.render('index.hbs')
})


// this is so that we can test
module.exports = app;