const express = require('express');
const router = express.Router();
const Student = require("../database/models/student");

router.get('/',  (req, res, next) =>  {
    Student.findAll()
    .then(students => res.status(200).json({
        data: students,
    }))
});

router.get('/:id',  (req, res, next) =>  {
    const id = req.params.id;

    Student.findByPk(id)
    .then( (student) => {
        res.status(200).json({
            data: student
        })
    })
});

router.post('/',  (req, res, next) =>  {

    Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa
    })
    .then( (student) => {
        res.status(200).json({
            data: student
        })
    })
});

module.exports = router;
