const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const StudentRoutes = require('./routes/students');
mongoose.connect('mongodb://localhost:27017/directory', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>
  res.json({status: 'ok', message: 'Welcome to my server.'})
);

app.use('/directory', StudentRoutes);

app.listen(8000, () => console.log('Server is listening on PORT 8000'));
