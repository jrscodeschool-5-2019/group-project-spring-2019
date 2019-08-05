const express = require('express');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local');
const morgan = require('morgan');

const Student = require('./models/Student');
const StudentRoutes = require('./routes/students');

mongoose.connect('mongodb://localhost:27017/directory', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>
  res.json({status: 'ok', message: 'Welcome to my server.'})
);

// ====================
// PASSPORT config
// ====================

app.use(
  require('express-session')({
    secret: 'This is my secret phrase', // can be whatever you want; used to decode info in session
    resave: false, // required
    saveUninitialized: false, // required
  })
);
app.use(passport.initialize()); // need this in order to use passport
app.use(passport.session()); // need this in order to use passport

// create a new local strategy using Student.authenticate
// comes from passportLocalMongoose plugin on User schema
passport.use(new LocalStrategy(Student.authenticate()));
// reads session, takes data from session and un-encodes it
passport.serializeUser(Student.serializeUser()); // this method was added in user schema with plugin
// encodes data from session, serializing, putting back in session
passport.deserializeUser(Student.deserializeUser()); // this method was added in user schema with plugin

// create middleware for passing the current logged in user to the frontend
app.use((req, res, next) => {
  // when you put something in res.locals it makes it available in your template
  // app.locals might be an alternative as well?
  res.locals.currentUser = req.user;
  next();
});

// use the StudentRoutes file
app.use(StudentRoutes);

app.listen(8000, () => console.log('Server is listening on PORT 8000'));
