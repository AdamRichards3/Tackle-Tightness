'use strict'

const express = require('express');

const app = express();

const PORT  = process.env.PORT || 8080;

app.listen(PORT, (err) => {
    console.log(`App listening on http://localhost:${PORT}`);
});