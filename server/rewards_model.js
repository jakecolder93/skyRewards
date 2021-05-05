/* eslint-disable prettier/prettier */

const Pool = require('pg').Pool 
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'my_database',
    password: 'root',
    port: 5432,
})


const getRewards = () => {
    return new Promise(function(resolve,reject) {
        pool.query('SELECT * FROM rewards ORDER BY id ASC ', (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows)
        })
    })
}

module.exports = getRewards;