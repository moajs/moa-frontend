require('./init');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var log4js = require('log4js');
var mount_routes = require('mount-routes');
var mount_simditor_qn = require('simditor-qn');
var mount_uploadify = require('uploadify')

var app = express();
var log = log4js.getLogger("moa-api");

// config
var simditor_qn_config = require('./config/simditor_qn')

// mount 
mount_simditor_qn(app, simditor_qn_config);

mount_uploadify(app,{
  // qn: simditor_qn_config.qn,//是否开启上传到七牛
  path:'/fileupload',
  fileKey:'myfile',
  multer: simditor_qn_config.multer
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
// replace morgan with the log4js connect-logger
log4js.configure('config/log4js.json', { reloadSecs: 300 });
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
mount_routes(app, __dirname + '/routes', false);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  return res.redirect('/404.html');
  // next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
