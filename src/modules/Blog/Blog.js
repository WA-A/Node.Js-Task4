const express = require('express');
const app = express();
const connection = require('../../../DB/Connection.js');
const {AddBlog,ShowBlog,UpdateBlog,DeleteBlog} = require('./Blog.controller');


  //Insert Blog for table Blog
app.post('/InsertBlog',AddBlog);


// Read Table for table Blog
app.get('/ShowBlog',ShowBlog);


  // Update Blog for table Blog
  app.patch('/UpdateBlog/:user_name',UpdateBlog); 


// Delete Blog for table Blog
app.delete('/DeleteBlog/:user_name',DeleteBlog);
    

module.exports = app ;   // export code to index.js