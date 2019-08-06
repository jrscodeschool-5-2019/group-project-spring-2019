const express = require('express');
const router = express.Router();
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
});

router.post('/student-login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    req.login(user, function(err) {
      res.status(200).send(JSON.stringify(user));
    });
  })(req, res, next);
});

// Student log in
// router.post('/login', passport.authenticate('local'), (req, res) => {
//   console.log('logged in', req.user);
//   const userInfo = {
//     username: req.user.username,
//   };
//   res.status(200).send(userInfo);
// });

// get user - not working
router.get('/user', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    res.json({user: req.user});
  } else {
    res.json({user: null});
  }
});

// log out
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({msg: 'logging out'});
  } else {
    res.send({msg: 'no user to log out'});
  }
});

// /directory/ (Directory landing page)
router.route('/directory').get(async (req, res) => {
  await Student.find({}).then(students => res.json({status: 'ok', data: students}));
});

// /directory/ (Directory landing page)
router.route('/student-view').get(async (req, res) => {
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
      foundStudent.location = req.body.location;
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
