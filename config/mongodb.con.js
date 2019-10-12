const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/graphql_post',{useUnifiedTopology: true,useNewUrlParser: true });
let db=mongoose.connection;

db.once('open',()=>{
    console.log('MongoDb Connected...');
})

db.on('error',(err)=>{

    console.log(err);
    
})
module.exports=db;
