const express = require('express');
const router = express.Router();
const Student = require("../database/models/student");

router.get('/',  (req, res, next) =>  {
    Student.findAll()
    .then(students => res.status(200).json(students))
});

router.get('/:id',  (req, res, next) =>  {
    const id = req.params.id;

    Student.findByPk(id)
    .then( (student) => {
        res.status(200).json(student)
    })
});

router.get('/:id/campus',  (req, res, next) =>  {
    const id = req.params.id;

    Student.findByPk(id)
    .then( (student) => {

        student.getCampus()
        .then( (campus) => {
            res.status(200).json(campus)
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
        res.status(200).json(student)
    })
});

router.put('/',  (req, res, next) =>  {

    Student.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gpa: req.body.gpa
    },

    {where: {id: req.body.id}}

    )
    .then( () => {
        res.status(200).json("Successfully Updated!")
    })
});

router.delete('/:id',  (req, res, next) =>  {

    Student.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( () => {
        res.status(200).json("Successfully Deleted!")
    })
});

module.exports = router;
