const mysql = require('mysql');
// This establishes the connection with the database
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Exercise',
    multipleStatements: true
})
// this checks if the connection has happened
mysqlConnection.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    console.log('Database ' + mysqlConnection.state);
})
// Exports the code above to access it in the app.js file
module.exports = mysqlConnection;