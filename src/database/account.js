/* eslint-disable prettier/prettier */

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('../../../sqliteData/skyTest.db');

let sql =  `SELECT * FROM SkyRewards`

const accnum = db.all(sql,[],(err,rows) => {
    if(err){
        throw err;
    }
    rows.forEach((row) => 
    console.log(row.Account))
});

console.log(accnum)
