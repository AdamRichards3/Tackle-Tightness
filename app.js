'use strict'
// This make sure express is installed 
const express = require('express');
const GoogleAuth = require('simple-google-openid');

const app = express();

const PORT  = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('js'));

app.listen(PORT, (err) => {
    console.log(`App listening on http://localhost:${PORT}`);
});

app.get('/',function(req,res) {
    res.sendFile('index.html');
});


app.use(function (err, req, res, next){
    console.log(err.stack)
    res.status(500).send('An error has occured!')
});

app.use(GoogleAuth('1061299997929-s6ts70cla6voe6g6k31pdp0oj6hrfhll.apps.googleusercontent.com'));

app.use('/api', GoogleAuth.guardMiddleware());

app.get('/api/hello', (req, res) => {
    res.send('Hello ' + (req.user.displayName || 'user without a name') + '!');
    console.log('successful authenticated request by ' + req.user.emails[0].value);
  });