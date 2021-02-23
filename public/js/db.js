
const mysql = require('mysql');

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