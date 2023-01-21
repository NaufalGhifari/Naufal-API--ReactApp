// import modules
const express = require("express");
const mongoose = require("mongoose"); 
const morgan = require("morgan"); 
const cors = require("cors");
const { response } = require("express");
require("dotenv").config(); 

// fix mongoose strictQuery error
mongoose.set('strictQuery', false);

// app
const app = express();

// EDAMAM db


// mongo db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB Connected!")).catch((err)=>console.log(`!! DB Concection Error: ${err} !!`));

// middlewares
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}))

// routes


// port
const port = process.env.PORT || 8080;

// listener
//const server = app.listen(port, ()=> console.log(`Server is running in port ${port}`));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
        if (err) console.log(err);
    });
    console.log(`Server is running on port: ${port}`);
});