const express = require('express');
const router = express.Router();
const Campus = require("../database/models/campus");

router.get('/',  (req, res, next) =>  {
    Campus.findAll()
    .then(campuses => res.status(200).json(campuses))
});

router.get('/:id',  (req, res, next) =>  {
    const id = req.params.id;

    Campus.findByPk(id)
    .then( (campus) => {
        res.status(200).json(campus)
    })
});

router.get('/:id/students',  (req, res, next) =>  {
    const id = req.params.id;

    Campus.findByPk(id)
    .then( (campus) => {

        campus.getStudents()
        .then( (students) => {
            res.status(200).json(students)
        })
        
    })
});

router.post('/',  (req, res, next) =>  {

    Campus.create({
        name: req.body.name
    })
    .then( (campus) => {
        res.status(200).json(campus)
    })
});

router.put('/',  (req, res, next) =>  {

    Campus.update({
        name: req.body.name
    },

    {where: {id: req.body.id}}

    )
    .then( () => {
        res.status(200).json("Successfully Updated!")
    })
});

router.delete('/:id',  (req, res, next) =>  {

    Campus.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( () => {
        res.status(200).json("Successfully Deleted!")
    })
});

module.exports = router;
