'use strict'
// This make sure all the dependencies are installed 
const express = require('express'),
    GoogleAuth = require('simple-google-openid'),
    mysql = require('mysql'),
    db = require('./public/js/db.js');

// Calls express to be used
const app = express();
// States what the port is, can also be stored in a .env file
const PORT = process.env.PORT || 8080;
// Folders express needs to see
app.use(express.static('public'));
app.use(express.static('public/js'));
app.use(express.static(__dirname));
app.use(express.json());
// Tells express what port to listen to 
app.listen(PORT, (err) => {
    console.log(`App listening on http://localhost:${PORT}`);
});
// Makes a get request to the index.html file
app.get('/', function (req, res) {
    res.sendFile('index.html');
});

// The google client code 
app.use(GoogleAuth('1061299997929-s6ts70cla6voe6g6k31pdp0oj6hrfhll.apps.googleusercontent.com'));
// installs the google auth middle ware
app.use('/api', GoogleAuth.guardMiddleware());
// Will display the users information
app.get('/api/hello', (req, res) => {
    res.send('Hello ' + (req.user.displayName || 'user without a name') + '!');
    console.log('successful authenticated request by ' + req.user.emails[0].value);
});
// This will run the queries in the database to extract the data
app.get('/loadExercises/:id', (req, res) => {
    res.status(200);
    console.log(req.params.id);
    if (req.params.id == "pulledHamstring") {
        db.query("SELECT exercise_name, exercise_description FROM exercise.exercises WHERE injury_id=201", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } else if (req.params.id == "dislocatedShoulder") {
        db.query("SELECT exercise_name, exercise_description FROM exercise.exercises WHERE injury_id=202", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } else if (req.params.id == "twistedKnee") {
        db.query("SELECT exercise_name, exercise_description FROM exercise.exercises WHERE injury_id=203", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } else if (req.params.id == "twistedAnkle") {
        db.query("SELECT exercise_name, exercise_description FROM exercise.exercises WHERE injury_id=204", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } else if (req.params.id == "acl") {
        db.query("SELECT exercise_name, exercise_description FROM exercise.exercises WHERE injury_id=205", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    } 
    console.log(req);
});