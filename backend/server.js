const app = require('./app')

const connectDatabase = require('./config/database')

process.on("uncaughtException",(err)=>{
    console.log(`error: ${err.message}`);
    console.log(`shutting down the server due to uncaught exception error`);
    process.exit(1);
})


//conncting to the database
connectDatabase()

const server = app.listen(8080,() =>{
    console.log(`server is working on http://localhost:8080`)
})

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    });

})