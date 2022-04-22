const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLoggedin } = require('../lib/auth');

router.get('/login', isNotLoggedin, (req, res) => {
    res.render('auth/login')
});

router.post('/signup',isNotLoggedin, passport.authenticate('local.signup' ,{
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
}));

router.post('/signin',isNotLoggedin, (req, res, next) =>{
    passport.authenticate('local.signin', {
        successRedirect:'/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) =>{
    req.logOut();
    res.redirect('/');
});

module.exports = router;