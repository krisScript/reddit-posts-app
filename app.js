
const express = require('express');
const path = require('path');

const sassMiddleware = require('node-sass-middleware');

const homeRouter = require('./routes/home');
const dataRouter = require('./routes/posts');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();

// view engine setup
app.set('views','views');
app.set('view engine', 'ejs');

app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(dataRouter)
app.use(homeRouter);
process.on('unhandledRejection', (reason, p) => {
  
});
app.use(errorController.get404);
app.listen(3000);


