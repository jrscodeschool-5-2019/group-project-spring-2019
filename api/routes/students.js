const express = require('express');
const router = express.Router({mergeParams: true});
const passport = require('passport');
const Student = require('../models/Student');

// caching disabled for every route
// prevents user from being able to see secret page using browser's 'back' button
// may not always work, depending on browser configuration
// must place this block of code before defining routes
router.use((req, res, next) => {
  res.set(
    'Cache-Control',
    'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
  );
  next();
});

// /register/ (Registration component)
router.post('/registration', async (req, res) => {
  console.log('user signup');

  const {username, password, name, email} = req.body;
  // ADD VALIDATION
  Student.findOne({email: email}, (err, student) => {
    if (err) {
      console.log('students.js post error: ', err);
    } else if (student) {
      res.json({
        error: 'Sorry, that email is already in use',
      });
    } else
      Student.findOne({username: username}, (err, student) => {
        if (err) {
          console.log('students.js post error: ', err);
        } else if (student) {
          res.json({
            error: 'Sorry, that username is already in use',
          });
        } else {
          const newStudent = new Student({
            username: username,
            password: password,
            email: email,
            name: {
              first: name.first,
              last: name.last,
            },
          });
          newStudent.save((err, savedStudent) => {
            if (err) return res.json(err);
            res.json(savedStudent);
          });
        }
      });
  });
  // const newStudent = new Student({
  //   password: password,
  //   username: username,
  //   email: email,
  //   name: {
  //     first: name.first,
  //     last: name.last,
  //   },
  // });
  // newStudent.save((err, savedStudent) => {
  //   if (err) return res.json(err);
  //   res.json(savedStudent);
  // });
});

// /directory/ (Directory landing page)
router.route('/').get(async (req, res) => {
  await Student.find({}).then(students => res.json({status: 'ok', data: students}));
});

// /directory/:studentId (Details component)
router.route('/:studentId').get(async (req, res) => {
  await Student.findById(req.params.studentId).then(foundStudent =>
    res.json(foundStudent)
  );
});

// /directory/profile/:studentId (Profile component)
router.route('/profile/:studentId').get(async (req, res) => {
  await Student.findById(req.params.studentId).then(foundStudent =>
    res.json(foundStudent)
  );
});

// /directory/profile/:studentId/edit (Profile component - edit mode)
router
  .route('/profile/:studentId/edit')
  .put(async (req, res) => {
    await Student.findById(req.params.studentId).then(foundStudent => {
      foundStudent.name.first = req.body.firstName;
      foundStudent.name.last = req.body.lastName;
      foundStudent.img = req.body.img;
      foundStudent.gradYear = req.body.gradYear;
      foundStudent.currentStudent = req.body.currentStudent;
      foundStudent.employer = req.body.employer;
      foundStudent.seekingEmployment = req.body.seekingEmployment;
      foundStudent.bio = req.body.bio;
      foundStudent.contactLinks.gitHub = req.body.gitHub;
      foundStudent.contactLinks.linkedIn = req.body.linkedIn;
      foundStudent.contactLinks.other = req.body.otherLink;
      foundStudent.finalProject = req.body.finalProject;
      foundStudent.save();

      res.json(foundStudent);
    });
  })

  // maybe don't have this? Instead, `delete` button can be a POST that clears the card fields?
  .delete(async (req, response) => {
    await Student.findByIdAndDelete(req.params.studentId).then(res => {
      response.json({status: 'ok', res: req.params.studentId});
    });
  });

// create middleware to check if logged in
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/student-login');
};

module.exports = router;
