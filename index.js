var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var ObjectID = mongodb.ObjectID;
var USERS_COLLECTION = 'users';

var app = express();
var path = require('path');
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect("mongodb://Kathleens-MacBook-Pro.local", function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log('Database connection ready');

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log('App now running on port', port);
  });
});

app.use('/', express.static(path.join(__dirname, 'public')))

// app.get('/', function(req, res) {
// 	res.send('Hello World');
// })

app.get('/api', function(req, res) {
  console.log(db.listCollections());
  db.collection('users').find({}).toArray(function(err, docs) {
    if (err) {
      console.log('Error:');
      console.log(err);
    }
    res.send(docs);
  });
});