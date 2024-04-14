const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
    guildID: String,
    guildName: String,
    prefix: { 'type': String, 'default': '!'},
    logChannel: { 'type': String, 'default': '829443483739357264'},
});

module.exports = mongoose.model('Guild', guildSchema);