const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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
