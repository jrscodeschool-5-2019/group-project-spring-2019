const express = require('express')
const Student = require('../models/Student')
const router = express.Router()

// /directory/
router
  .route('/')
  .get(async (req, res) => {
    await Student.find({}).then(students =>
      res.json({ status: 'ok', data: students })
    )
  })
  .post(async (req, res) => {
    const rawStudent = req.body
    const newStudent = await new Student(rawStudent)

    newStudent.save()

    res.json({ status: 'ok', newStudent })
  })

// /directory/:studentId
router
  .route('/:studentId')
  .get(async (req, res) => {
    await Student.findById(req.params.studentId).then(foundStudent =>
      res.json(foundStudent)
    )
  })

  .put(async (req, res) => {
    await Student.findById(req.params.studentId).then(foundStudent => {
      foundStudent.name.first = req.body.first_name
      foundStudent.name.last = req.body.last_name
      foundStudent.img = req.body.img
      foundStudent.gradYear = req.body.gradYear
      foundStudent.currentStudent = req.body.currentStudent
      foundStudent.employmentStatus = req.body.employmentStatus
      foundStudent.seekingEmployment = req.body.seekingEmployment
      foundStudent.bio = req.body.bio
      foundStudent.contactLinks = req.body.contactLinks
      foundStudent.finalProject = req.body.finalProject
      foundStudent.save()

      res.json(foundStudent)
    })
  })
  .delete(async (req, response) => {
    await Student.findByIdAndDelete(req.params.studentId).then(res => {
      response.json({ status: 'ok', res: req.params.studentId })
    })
  })

module.exports = router
