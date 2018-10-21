const express = require('express');
const router = express.Router();
const axios = require('axios');

// get user account info
router.get('/me', (req, res, next) => {
    const Authorization = req.headers.authorization;
    const requestOptions = {
        headers: {
            Authorization
        }
    }

    axios.get("https://api.spotify.com/v1/me", requestOptions).then((response) => {
        res.send(response.data);
    }).catch((err) => next(err));
})

// get all of a users playlists
router.get("/playlists", (req, res, next) => {
    const Authorization = req.headers.authorization;
    const requestOptions = {
        headers: {
            Authorization
        }
    }

    axios.get("https://api.spotify.com/v1/me/playlists?offset=0&limit=20", requestOptions).then((response) => {
        res.send(response.data)
    }).catch((err) => next(err));
});

// search songs
router.get("/search/:term", (req, res, next) => {
    const Authorization = req.headers.authorization;
    const requestOptions = {
        headers: {
            Authorization
        }
    }

    axios.get(`https://api.spotify.com/v1/search?q=${req.params.term}&type=track&market=us&limit=10&offset=5`, requestOptions).then((response) => {
        res.send(response.data);
    }).catch((err) => next(err));
})

module.exports = router;

