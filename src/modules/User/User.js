const express = require('express');
const app = express();
const mysql = require('mysql2');

const connection =  mysql.createConnection({  // Connect to DataBase
    host:'localhost',
    user:'root',
    password:'',
    database:'user_blog_exam',
  });


//Insert User for table user
app.post('/InsertUser',(req,res)=>{
   // res.json("send");
    const {email,password,bio} = req.body;
    connection.execute(`INSERT INTO user(email,password,bio) VALUES('${email}','${password}','${bio}')`,    // Sentence SQL this is Preparation stage (التحضير)
    (err,result)=>{    // Sentence SQL this is execute stage (التنفيذ)
        if(err){
          if (err.errno==1062) 
          return res.json({message:"Email Aleady is Used"}); // dublicate
        
        else 
          return res.json({message:"Email While Creating User"});  // another error
    }
      return res.json({message:"Success Insert For Table user"});
    });   
  });
 

  // Read Table for table user
app.get('/ShowUser',(req,res)=>{       // localhost:4000/SHOWuser  =====> When I run it in the browser, it shows that I have an API, which means it worked API
    
    connection.execute(`SELECT * FROM user`,(err,result)=>{          // (err,result)==> callback function === the execute replay to her is result
        if(err){
            return res.json({message:"Error"});
           }
       return res.json({message:"Success Show for Table user",users:result});
     });  
  });

  // Update User  for table user
  app.patch('/UpdateUser',(req,res)=>{   // patch is chanch on part from obj
    const {id,email}= req.body;
    connection.execute(`UPDATE user SET email ='${email}' where id = '${id}'`,(err,result)=>{
      if(result.affectedRows == 0){  // means no update
        return res.json({message:"User Not Found"});
    }
    return res.json({message:"Success Updated For Table user"});
    });
    
    });  

    // Delete User  for table user
app.delete('/DeleteUser',(req,res)=>{    
    const {id}= req.body;
    connection.execute(`DELETE FROM user WHERE id = '${id}'`,(err,result)=>{
      if(result.affectedRows==0){ // means no update
        return res.json({message:"user not found"});
    }
    return res.json({message:"Success Delete For Table user"});
    });
    
    });

    module.exports = app ;   // export code to index.js