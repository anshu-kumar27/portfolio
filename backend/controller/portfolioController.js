const ErrorHandler = require('../middleware/errorHandler');
const Contact = require('../model/contactModel');
const Feedback = require('../model/feedbackModel')

exports.feedbackSubmit = async(req,res,next) =>{
    try{
        const {message} = req.body;
        const feedback = await Feedback.create({
            message
        })
        res.status(201).json({
            success:true,
            feedback
        })
    }catch(error){
        console.log(error)
        return next(new ErrorHandler("error uploading feedback",500));
    }
}

exports.contactSubmit = async(req,res,next) =>{
    try{
        const contact = await Contact.create(
            req.body
        )
        res.status(201).json({
            success:true,
            contact
        })
    }catch(error){
        console.log(error)
        return next(new ErrorHandler("error uploading contact",500));
    }
}