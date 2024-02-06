const connection = require('../../../DB/Connection.js');

const  AddBlog = (req,res)=>{
    const {title,description,user_name} = req.body;
    connection.execute(`INSERT INTO Blog(title,description,user_name) VALUES('${title}','${description}','${user_name}')`,    
    (err,result)=>{    
        if(err){
          if (err.errno==1062) 
          return res.json({message:"user_name Aleady is Used"}); 
        
        else 
          return res.json({message:"user_name While Creating Blog"});  
    }
      return res.json({message:"Success Insert For Table Blog"});
    });   
  }

const ShowBlog = (req,res)=>{       
    connection.execute(`SELECT * FROM Blog`,(err,result)=>{          
        if(err){
            return res.json({message:"Error"});
           }
       return res.json({message:"Success Show For Table Blog",Blogs:result});
     });  
  }

const UpdateBlog =(req,res)=>{   
    const {title}= req.body;
    const {user_name}=req.params;
    connection.execute(`UPDATE Blog SET title ='${title}' where user_name = '${user_name}'`,(err,result)=>{
        if(err){
            if(!user_name){  
                return res.json({message:" Not Allowed To Edit the Blog"});
            }
        }
      
    return res.json({message:"Success Updated For Table Blog"});
    });
    
    }

const DeleteBlog = (req,res)=>{    
    const {user_name}=req.params;
    connection.execute(`DELETE FROM Blog WHERE user_name = '${user_name}'`,(err,result)=>{
        
        if(err){
            if(!user_name){  
                return res.json({message:" Not Allowed To Delete the Blog"});
            }
        }
        
        
    return res.json({message:"Success Delete For Table Blog"});
    });
    
    }
  module.exports = {AddBlog,ShowBlog,UpdateBlog,DeleteBlog};