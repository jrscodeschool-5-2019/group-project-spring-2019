const express = require("express");
const router = express.Router();
const passport = require("passport");
const Student = require("../models/Student");

// caching disabled for every route
// prevents user from being able to see protected routes using browser's 'back' button
// may not always work, depending on browser configuration
// must place this block of code before defining routes
router.use((req, res, next) => {
  res.set(
    "Cache-Control",
    "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
  );
  next();
});


// REGISTER
// POST to http://localhost:8000/registration
router.post('/registration', async (req, res) => {
  const {username, password, name, email} = req.body;

  // ADD VALIDATION
  Student.findOne({ email: email }, (err, student) => {
    if (err) {
      console.log("students.js post error: ", err);
    } else if (student) {
      res.json({
        error: "Sorry, that email is already in use"
      });
    } else
      Student.findOne({ username: username }, (err, student) => {
        if (err) {
          console.log("students.js post error: ", err);
        } else if (student) {
          res.json({
            error: "Sorry, that username is already in use"
          });
        } else {
          const newStudent = new Student({
            username: username,
            password: password,
            email: email,
            name: {
              first: name.first,
              last: name.last
            },
            gradYear: '',
            img: '',
            currentStudent: false,
            employer: '',
            seekingEmployment: false,
            bio: '',
            location: '',
            contactLinks: {
              gitHub: '',
              linkedIn: '',
              other: '',
            },
            finalProject: '',
          });
          newStudent.save((err, savedStudent) => {
            if (err) return res.json(err);
            res.json(savedStudent);
          });
        }
      });
  });
});


// For adding dummy data through Postman
// POST to http://localhost:8000/add-students
router.post('/add-students', async (req, res) => {
  const {username, email} = req.body;

  // ADD VALIDATION
  Student.findOne({ email: email }, (err, student) => {
    if (err) {
      console.log("students.js post error: ", err);
    } else if (student) {
      res.json({
        error: "Sorry, that email is already in use"
      });
    } else
      Student.findOne({ username: username }, (err, student) => {
        if (err) {
          console.log("students.js post error: ", err);
        } else if (student) {
          res.json({
            error: "Sorry, that username is already in use"
          });
        } else {
          const newStudent = new Student(req.body);
          newStudent.save((err, savedStudent) => {
            if (err) return res.json(err);
            res.json(savedStudent);
          });
        }
      });
  });
});

// LOG IN
// POST to http://localhost:8000/student-login
router.post('/student-login', passport.authenticate('local'), (req, res) => {
  const userInfo = {
    username: req.user.username
  };
  res.status(200).send(userInfo);
});

// get user - not really working, but leaving it here anyways
router.get('/user', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});


// LOG OUT
// POST to http://localhost:8000/logout
router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

// GET ALL STUDENTS
// GET from http://localhost:8000/directory
router.route('/directory').get(async (req, res) => {
  await Student.find({}).then(students => res.json({status: 'ok', data: students}));
});

// GET ALL STUDENTS (another route, does the same thing as /directory)
// GET from http://localhost:8000/student-view
router.route('/student-view').get(async (req, res) => {
  await Student.find({}).then(students => res.json({status: 'ok', data: students}));
});

// GET ONE STUDENT BY ID
// NOTE: frontend is not using this, so commenting out for now
// /directory/:studentId (Details component)
// router.route('/:studentId').get(async (req, res) => {
//   await Student.findById(req.params.studentId).then(foundStudent =>
//     res.json(foundStudent)
//   );
// });

// GET USER'S PROFILE BY USERNAME
// GET from http://localhost:8000/profile/${username}
router.route('/profile/:username').get(async (req, res) => {
  await Student.findOne({username: req.params.username}, (err, foundStudent) =>
    res.json({status: 'ok', student: foundStudent})
  );
});

// EDIT USER'S PROFILE INFORMATION
// PUT to http://localhost:8000/profile/${_id}/edit
router.route('/profile/:studentId/edit').put(async (req, res) => {
  await Student.findById(req.params.studentId).then(foundStudent => {
    foundStudent.name = req.body.name;
    foundStudent.img = req.body.img;
    foundStudent.gradYear = req.body.gradYear;
    foundStudent.currentStudent = req.body.currentStudent;
    foundStudent.employer = req.body.employer;
    foundStudent.seekingEmployment = req.body.seekingEmployment;
    foundStudent.bio = req.body.bio;
    foundStudent.location = req.body.location;
    foundStudent.contactLinks = req.body.contactLinks;
    foundStudent.finalProject = req.body.finalProject;
    foundStudent.save();

    res.json(foundStudent);
  });
});
// DELETE STUDENT BY USERNAME - NOT INCLUDING THIS AT THE MOMENT
// DELETE from http://localhost:8000/profile/${username}/delete
// .delete(async (req, response) => {
//   req.logout();
//   await Student.findOne({username: req.params.username}),
//     res => {
//       response.json({status: 'ok', res: req.params.username});
//     };
// });

module.exports = router;
