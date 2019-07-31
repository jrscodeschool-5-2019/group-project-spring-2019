const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  passwordHash: {
    type: String,
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
  employmentStatus: {
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

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;
