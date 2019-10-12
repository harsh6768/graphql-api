const {buildSchema}=require('graphql');

let schema=buildSchema(`
 
    type Query{
       post(id:Int!):Post,
       posts:[Post]
    }

    type Mutation{
        addPost(title:String!,body:String!,author:String,topic:String):Post,
        updatePost(id:String!,title:String,body:String,author:String,topic:String):Post,
        deletePost(id:String!):Post
    }
    
    type Post{
        title:String,
        body:String,
        author:String,
        topic:String,
    }

`);

module.exports=schema;