const express = require('express');
const mongoose = require('mongoose')

const student = mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phone_no:{
        type:String,
        required:true
    }
})

var studentdata = mongoose.model('studentdata',student);

module.exports = studentdata;

