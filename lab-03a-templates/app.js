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

app.get('/about-us', function(req,res){
    res.render('about-us.hbs')
})

app.get('/multiply/:left/:right', function(req,res){
    let left1= parseInt(req.params.left);
    let right1= parseInt(req.params.right);
    let total= left1 * right1;
    res.render('results.hbs',{
        "displayLeft": left1,
        "displayRight": right1, 
        "displayTotal":total
    })
})

// this is so that we can test
module.exports = app;