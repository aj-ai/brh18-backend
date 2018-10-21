const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChoiceSchema = new Schema(
    {
        songId: String,
        votes: Number
    }
)

const PollSchema = new Schema(
    {
        hostId: String,
        choices: [ChoiceSchema]
    }
)

const Poll = mongoose.model('poll', PollSchema);

module.exports = Poll
