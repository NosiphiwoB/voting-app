const mongoose = require("mongoose")

const postSchema = mangoose.Schema({
    partyName: {
        type: String,
        require: true
    },
    startDate: {
        type: Date,
        require: true
    },
    leader: {
        type: String,
        require: true
    },
    members: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('post', postSchema)