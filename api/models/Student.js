const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const StudentSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    first: {
      type: String,
      require: true,
    },
    last: {
      type: String,
      require: true,
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
StudentSchema.plugin(passportLocalMongoose);

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
