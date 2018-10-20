const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require('axios');

router.get('/spotify', passport.authenticate('spotify', {session: false}), (req, res) => {
    // won't be called
});

// sends access token to the user
router.get('/spotify/callback', passport.authenticate('spotify'), (req, res) => {
    res.status(200).json({token: req.user});
});

module.exports = router;
