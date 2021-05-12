const express = require('express');

let app = express();

//answer 1 
app.get('/', function(req,res){
    res.send('Hello everyone!')
})

//answer 2
app.get('/goodbye', function(req,res){
    res.send('So long and thank you for all the fish!')
})

//answer 3
app.get('/correct_me', function(req,res){
    res.send('Corwin of amber');
})

//answer 4
app.get('/faulty', function(req,res){
    res.send('the quick brown fox jumps over the lazy dog')
})

module.exports = app;