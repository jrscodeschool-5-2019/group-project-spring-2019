const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

const StudentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  name: {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  img: {
    type: String,
  },
  gradYear: {
    type: String,
  },
  currentStudent: {
    type: Boolean,
    default: false,
  },
  employer: {
    type: String,
  },
  seekingEmployment: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  contactLinks: {
    gitHub: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
    other: {
      type: String,
    },
  },
  finalProject: {
    type: String,
  },
});

// add a bunch of important methods to StudentSchema
// to enable user authentication
// MAYBE DELETE THIS?
// StudentSchema.plugin(passportLocalMongoose);

// Define schema methods
StudentSchema.methods = {
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

// Define pre hooks for the save method
StudentSchema.pre('save', function(next) {
  if (!this.password) {
    console.log('models/Student.js =======NO PASSWORD PROVIDED=======');
    next();
  } else {
    console.log('models/Student.js hashPassword in pre save');

    this.password = this.hashPassword(this.password);
    next();
  }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
