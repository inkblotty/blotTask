var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var ObjectID = mongodb.ObjectID;
var USERS_COLLECTION = 'users';

var app = express();
var cors = require('cors');
var path = require('path');
var router = express.Router();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
var users;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect("mongodb://Kathleens-MacBook-Pro.local/data", function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  users = db.collection('users');
  console.log('Database connection ready');

  // Initialize the app.
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log('App now running on port', port);
  });
});

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api', router);
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/public/index.html')
});

// API routes
router.get('/', function(req, res) {
  users.find({}).toArray(function(err, docs) {
    if (err) {
      console.log(err);
    }
    res.json(docs);
  });
});

// this is for debugging only
app.use('/empty', function(req, res) {
  users.remove();
  res.send('users collection emptied');
});

// route to create new user
router.route('/users')
  .post(function(req, res) {
    users.insert(req);
    res.send('new user added');
  });

// routes to read/update user
router.route('/users/:user_id')
  .get(function(req, res) {
    // build query from params
    var userId = req.params.user_id;
    var query = { 'id': userId };

    users.find(query).toArray(function(err, user) {
      res.send(user);
    });
  })
  .put(function(req, res) {
    var userId = req.params.user_id;
    var query = { 'id': userId };

    users.update(query,
      { $set: {
          "display_name": req.body.display_name,
        }
      }
    , function() {
      users.find(query).toArray(function(err, user) {
        if (err) {
          res.send(err);
        }
        res.json({ status: 200, message: 'Update successful', user: user[0] });
      });
    });
  });

// routes to read/update a users' task list
router.route('/tasks/:user_id')
  .get(function(req, res) {
    // build query from params
    var userId = req.params.user_id;
    var query = { 'id': userId };

    users.find(query).toArray(function(err, user) {
      res.send(user[0].tasks);
    });
  })
  .put(function(req, res) {
    var userId = req.params.user_id;
    var query = { 'id': userId };

    users.update(query,
      { $set: {
          "tasks": req.body.tasks,
        }
      }
    , function() {
      users.find(query).toArray(function(err, user) {
        if (err) {
          res.send(err);
        }
        res.json({ status: 200, message: 'Update successful', user: user[0].tasks });
      });
    });
  });