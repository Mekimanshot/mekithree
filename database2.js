const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: 'node31902-mekiman.app.ruk-com.cloud',
    user: 'root',
    password:"XSIlxb27671",
    database:"newpro",
  
})

module.exports = dbConnection;