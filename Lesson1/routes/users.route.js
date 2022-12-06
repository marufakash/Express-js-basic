const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('<h1>I am get request from about router.</h1>');
    res.end();
})

router.get('/login', (req, res) => {
    res.send('<h1>I am get request from login routr.</h1>');
    res.end();
})

module.exports = router;