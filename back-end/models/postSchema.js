const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    partyname: {
        type: String,
        require: true
    },
    startdate: {
        type: String,
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