'use strict'
// This make sure express is installed 
const express = require('express');

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