var express = require('express');
// Used for parsing form data
var bodyParser = require('body-parser');
// Used for joining pathname for static vies
var path = require('path');
// Used for creating user auth tokens
////////////////////////////////////
// var expressJWT = require('express-jwt');
// var jwt = require('jsonwebtoken');
var app = express();

// AUTH STUFF ////
//////////////////
// var secret = "mysupersecretpassword";

// MONGO STUFF ////
///////////////////
// var mongoose = require('mongoose');
// var User = require('./models/user');
// mongoose.connect('mongodb://localhost/recipes');

// MIDDLEWARE /////
// For jsons, forms, and static paths
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// AUTH STUFF ////
//////////////////
// app.use('/api/recipes', expressJWT({secret: secret}));
// app.use('/api/users', expressJWT({secret: secret})
// .unless({path: ['/api/users'], method: 'post'}));

// app.use(function (err, req, res, next) {
//   if (err.name === 'UnauthorizedError') {
//     res.status(401).send({message: 'You need an authorization token to view this information.'})
//   }
// });

// Routes to return JSON data to front end
app.use('/api/links', require('./controllers/links'));
app.use('/api/users', require('./controllers/users'));

// AUTH STUFF ////
//////////////////
// app.post('/api/auth', function(req, res) {
//   User.findOne({email: req.body.email}, function(err, user) {
//     if (err || !user) return res.status(401).send({message: 'User not found'});
//     user.authenticated(req.body.password, function(err, result) {
//       if (err || !result) return res.status(401).send({message: 'User not authenticated'});

//       var token = jwt.sign(user, secret);
//       res.send({user: user, token: token});
//     });
//   });
// });

// Redirect all requests to static views
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);
