const mysql = require('mysql2');
const connection =  mysql.createConnection({  // Connect to DataBase
    host:'localhost',
    user:'root',
    password:'',
    database:'user_blog_exam',
  });

  module.exports = connection ; // connection is variable