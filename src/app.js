const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const authCookieMiddleware = require('./middlewares/authCookieMiddleware')
const userVerifyMiddleware = require('./middlewares/userVerifyMiddleware');



// ************ Route System require and use() ************
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({secret: 'shhhhh', resave: true, saveUninitialized: true}));

app.use(authCookieMiddleware);
app.use(userVerifyMiddleware.admin);
app.use(userVerifyMiddleware.usuario);
app.use(userVerifyMiddleware.session);



app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETEno
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public


// ************ WRITE YOUR CODE FROM HERE ************
app.use('/', mainRouter); // Ru
app.use('/users', usersRouter);// Rutas /users
app.use('/products', productsRouter);// Rutas /products


// ************ catch 404 and forward to error handler ************
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
