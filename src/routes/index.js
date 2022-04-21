const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedin } = require('../lib/auth');


router.get('/', (req, res) =>{
    res.render('index');
})
router.get('/home', isLoggedIn, (req, res) =>{
    res.render('home/home');
})


module.exports = router;