const mongoose = require('mongoose')
const validator = require('validator')

const contactSchema = new mongoose.Schema({
    firstname:{
        type:String,
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
            required:[true,"Please enter your email"],
            validate:[validator.isEmail,"please enter a valid Email"]
    },
    phonenumber:{
        type:Number,
    },
    message:{
        type:String
    }
})

module.exports = mongoose.model("contact",contactSchema)