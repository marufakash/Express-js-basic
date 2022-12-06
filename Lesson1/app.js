const express = require('express');
const app = express();
const routerUser = require('./routes/users.route');

app.use('/api/user',routerUser);

app.use('/register', (req, res) => {
    // res.status(200).json({
    //     message: 'Hello user.',
    //     statusCode: 200,
    // })
    // res.redirect('/api/user/login')
    res.statusCode = 200;
    res.sendFile(__dirname +'/views/register.html');
})

app.use('/', (req, res) => {
    // res.send('<h1>I am get request from home router.</h1>');
    // res.end();
    // res.statusCode = 200;
    // res.sendFile(__dirname +'/views/index.html');
    res.cookie('name','Gazi Mahabuba');
    res.cookie('name','Maruf Akash');
    res.end();
})

app.use( (req, res) => {
    res.send('<h1>404, page not found</h1>');
    res.end();
})

module.exports = app;