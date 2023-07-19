const express = require('express');
const mongoose = require('mongoose')

const student = require('../models/student')
//async await function 

const createStudent = async(req,res)=>{
    console.log("Request from Postman" + req.body)

    const newStudent = new student({
        id:req.body.id,
        name: req.body.name,
        gender : req.body.gender,
        phone_no : req.body.phone_no
    });
    console.log(newStudent)

    try{
        await newStudent.save();
        res.status(201).json(newStudent)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

const getStudent = async(req,res)=>{
    try{
        const students = await student.find();

        res.status(201).json(students)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

module.exports.createStudent = createStudent;
module.exports.getStudent = getStudent;
