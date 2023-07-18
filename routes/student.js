const express = require('express');

const router = express.Router();

const student  =  require('../controllers/student')

router.post('/', student.createStudent);

router.get('/',  student.createStudent);


module.exports = router;