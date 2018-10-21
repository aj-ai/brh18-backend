const express = require('express');
const router = express.Router();
const passport = require('passport');
const axios = require('axios');

router.get('/spotify', passport.authenticate('spotify', {
    session: false, 
    scope: ["streaming", "user-read-birthdate", "user-read-email", "user-read-private"]
}), (req, res) => {
    // won't be called
});

// sends access token to the user
router.get('/spotify/callback', passport.authenticate('spotify'), (req, res) => {
    res.set({
        'x-access-token': req.user
    });
    res.redirect(`http://localhost:3000/party?token=${req.user}`);
});

module.exports = router;
