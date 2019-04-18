const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./configuration/config');
const cors = require('cors');
const session = require('client-sessions');

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
const feedbackRouter = require('./routes/feedback');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//uncommend this to make the angular front end live
app.use(express.static(path.join(__dirname, '/dist/email-automation-angular')));

//comment these out to make the angualr front end live
//app.use(express.static(path.join(__dirname, 'public')));
//app.use('/', indexRouter);

app.use('/signup',signupRouter);
app.use('/cityContent',cityContentRouter);
app.use('/users',userRouter);
app.use('/sendgrid',sendgripRouter);
app.use('/feedback', feedbackRouter);


//uncomment this to make the angular front end live; only thing that needs to be done is bundle the angular project
//and put into the dist folder of this working directory. From there just uncomment the following codeblock
app.all('*', (req, res) => {
    console.log(`[TRACE] Server 404 request: ${req.originalUrl}`);
    console.log("right before the sending of our index.html file");
    console.log("__dirname");
    console.log(__dirname);
    res.status(200);
    res.sendFile(path.join(__dirname, '/dist/email-automation-angular/index.html'));
    console.log("after the sending of the index.html file");
  });

/*Malhotra legacy code
// Set Port
app.set('port', (process.env.PORT || 3000));
*/

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function(){
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

module.exports = app;
