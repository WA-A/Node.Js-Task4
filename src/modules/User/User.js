const express = require('express');
const app = express();
const connection = require('../../../DB/Connection.js');

const {AddUser} = require('./User.controller.js');
const {ReadUsers} = require('./User.controller.js');
const {UpdateUser} = require('./User.controller.js');
const {DeleteUser} = require('./User.controller.js');


//Insert User for table user
app.post('/InsertUser',AddUser);
 
  // Read Table for table user
app.get('/ShowUser',ReadUsers);

// Update User  for table user
app.patch('/UpdateUser',UpdateUser);  

    // Delete User  for table user
app.delete('/DeleteUser',DeleteUser);


 module.exports = app ;   // export code to index.js