const express = require('express');
const app = express();
const mysql = require('mysql2');
const UserRouter = require('./src/modules/User/User.js');
const BlogRouter = require('./src/modules/Blog/Blog.js');
app.use(express.json());

const connection =  mysql.createConnection({  // Connect to DataBase
    host:'localhost',
    user:'root',
    password:'',
    database:'user_blog_exam',
  });

  app.use(UserRouter); // import User.js
  app.use(BlogRouter); // import Blog.js

 // Port Server
  app.listen(3000,()=>{
    console.log('server is running ..... 3000');
    });