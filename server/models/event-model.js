const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema(
    {
        name: String,
        date: Date,
        time: String,
        sendReminders: Boolean,
        agenda: String,
        sendInvites: Boolean
    }
)

module.exports= new mongoose.model('events',Event)