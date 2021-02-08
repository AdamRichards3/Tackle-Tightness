'use strict'
// This make sure all the dependencies are installed 
const express = require('express');
const GoogleAuth = require('simple-google-openid');
const mysql = require('mysql');
// Calls express to be used
const app = express();
// States what the port is, can also be stored in a .env file
const PORT  = process.env.PORT || 8080;
// Folders express needs to see
app.use(express.static('public'));
app.use(express.static('js'));
// Tells express what port to listne to 
app.listen(PORT, (err) => {
    console.log(`App listening on http://localhost:${PORT}`);
});
// Makes a get request to the index.html file
app.get('/',function(req,res) {
    res.sendFile('index.html');
});
// This will send a error message if there is status 500 
app.use(function (err, req, res, next){
    console.log(err.stack)
    res.status(500).send('An error has occured!')
});
// This intilises the MySQL coonection 
const mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'Exercise',
    multipleStatements : true
})
// this checks if the connection has happened
mysqlConnection.connect((err) => {
    if(err)
    {
        console.log(err.message)
    }
    console.log('Database ' + mysqlConnection.state);
})
// The google client code 
app.use(GoogleAuth('1061299997929-s6ts70cla6voe6g6k31pdp0oj6hrfhll.apps.googleusercontent.com'));
// installs the google auth middle ware
app.use('/api', GoogleAuth.guardMiddleware());
// Will display the users information
app.get('/api/hello', (req, res) => {
    res.send('Hello ' + (req.user.displayName || 'user without a name') + '!');
    console.log('successful authenticated request by ' + req.user.emails[0].value);
  });