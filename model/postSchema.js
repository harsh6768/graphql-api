const mongoose=require('mongoose');


const postSchema=mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true 
    },
    author:{
        type:String
    },
    topic:{
        type:String
    }
})


module.exports=mongoose.model('posts',postSchema);

