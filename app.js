const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./configuration/config');

const uri = config.mongoUri;
mongoose.Promise = global.Promise;
mongoose.connect(uri,{
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

const indexRouter = require('./routes/index');
const signupRouter = require('./routes/signup');
const cityContentRouter = require('./routes/cityContent');
const userRouter = require('./routes/users');
const sendgripRouter = require('./routes/sendgrip');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/signup',signupRouter);
app.use('/cityContent',cityContentRouter);
app.use('/users',userRouter);
app.use('/sendgrid',sendgripRouter);

// Set Port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('Server started on port '+app.get('port'));

});

module.exports = app;
