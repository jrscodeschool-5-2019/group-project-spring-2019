const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      require: true
    },
    last: {
      type: String,
      require: true
    }
  },
  img: {
    type: String
  },
  gradYear: {
    type: String
  },
  currentStudent: {
    type: Boolean,
    default: false
  },
  employmentStatus: {
    type: String
  },
  seekingEmployment: {
    type: Boolean,
    default: false
  },
  bio: {
    type: String
  },
  contactLinks: [{
    name: {type: String},
    last: {type: String}
  }]
  finalProject: {
    type: String
  }
})

const Student = mongoose.model('student', StudentSchema)

module.exports = Student
