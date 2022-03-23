const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, './public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// app.use(morgan('combined'))

route(app);

// 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
