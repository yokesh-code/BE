const express = require('express');
const bodyParser =  require('body-parser')
const app =  express();

const mongoose = require('mongoose')

const dbUrl = "mongodb://localhost:27017/yokesh";

mongoose.connect(dbUrl,{useNewUrlParser:true});

const con = mongoose.connection;

try{
    con.on('open',()=>{
        console.log("MongoDB is connected!!!")
    })
}
catch(error){
    console.log("Error : "+ error);
}

const port = 3010;
app.listen(port,()=>{
    console.log("Port is Running    ====>  " + port)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const studentRouter =  require('./routes/student')

app.use("/student",studentRouter)
