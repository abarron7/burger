var mysql = require('mysql');

// For jawsDB
var connection;
if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 8889,
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;