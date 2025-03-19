const ErrorHandler = require('./errorHandler');

module.exports = (err,req,res,next)=>{
    err.statusCode = err?.statusCode ?? 500;
    err.message = err?.message ?? 'Internal Server Error';
    
    if(err.code === 11000){
        message = `Duplicate key Error : ${Object.keys(err.keyValue)} `,
        err = new ErrorHandler(message,404)

    }

    res.status(err.statusCode).json({
        success:false,
        err:err.message,
        errorStack : err.stack
    })
}