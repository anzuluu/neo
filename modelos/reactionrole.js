const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reactionRolSchema = new Schema({
    idG: { type: String },
    name: { type: String },
    message: { type: String },
    roles: [{
        role: String,
        emoji: String
    }]
})

const reactionRol = mongoose.model('reactionrol', reactionRolSchema)
module.exports = reactionRol