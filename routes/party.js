const express = require('express');
const router = express.Router();

const Poll = require('../models/Poll');

// start a poll. choices is an array of songId. hostId is the users unique spotify id.
router.post('/poll', (req, res, next) => {
    const hostId = req.body.hostId;
    const choice1 = {songId: req.body.song1, votes: 0};
    const choice2 = {songId: req.body.song2, votes: 0};

    var poll = new Poll({
        hostId: hostId,
        choices: [choice1, choice2]
    })

    poll.save().then((result) => {
        res.send(result)
    }).catch(next);
});

// vote for a song
router.put('/:id/:choice', (req, res, next) => {

});

// end a poll
router.delete('/:id', (req, res, next) => {

});

module.exports = router;
