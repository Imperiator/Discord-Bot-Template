const mongoose = require('mongoose');

const GuildShema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Guild', GuildShema);