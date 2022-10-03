const mongoose = require('mongoose')

const secureSchema = new mongoose.Schema({
    GuildId: String,
    ChannelId: String,
})

const model = mongoose.model("SecureSchema", secureSchema)

module.exports = model;