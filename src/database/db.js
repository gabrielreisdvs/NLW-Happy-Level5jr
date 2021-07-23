const Database = require('sqlite-async');


// create table
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            facebook TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

// create and execute database then export 'db'
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)