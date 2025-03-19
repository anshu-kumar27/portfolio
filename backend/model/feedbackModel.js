const mongoose = require('mongoose')

const feedbackschema = new mongoose.Schema({
    message:{
        type:String
    }
})

module.exports = mongoose.model("Feedback",feedbackschema)