const express = require('express');
const cors = require('cors');
const passport = require('./passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const morgan = require('morgan');

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

app.use(
  session({
    secret: 'frosty-narwhal',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
  })
);
// app.use((req, res, next) => {
//   console.log('req.session', req.session);
//   next();
// });

app.use(passport.initialize()); // need this in order to use passport
app.use(passport.session()); // need this in order to use passport

// use the StudentRoutes file
app.use(StudentRoutes);

app.listen(8000, () => console.log('Server is listening on PORT 8000'));
