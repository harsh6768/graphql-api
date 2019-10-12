const Post=require('../model/postSchema');

let getPost=async(args)=>{

    const {id}=args;

    return Post.findOne({_id:id})
    .then(post=>{
        return {
            ... post._doc
        }
    })
    .catch(err=>{
        throw err;
    })

}

let getPosts=async(args)=>{
    return Post.find();
}

let addPost=(args)=>{

    const {
        title,
        body,
        author,
        topic 
    }=args

    var post=new Post({
        title,
        body,
        author,
        topic
    });

     try{

        //save the data
          return post
         .save()
         .then((result)=>{
             return { ... result._doc }  //graphql add some meta data to it so we need to return the Post data
         })
         .catch(err=>{
             throw err
         })
         
    }catch(err){
        throw err;
    }

}

let updatePost=(args)=>{

    const { id,title,body,topic }=args.id;
    //Here $set is the atomic operator in mongodb
    return Post.findOneAndUpdate({_id:id},{$set: {title,body,topic}},{new:true})
    .then(post=>{
        return {
            ... post._doc
        }
    })
    .catch(err=>{
        throw err;
    });

}

let deletePost=(args)=>{

    const {id}=args.id;

    return Post.findOneAndDelete({_id:id})
    .then(post=>{
        return {
            ... post._doc
        }
    })
    .catch(err=>{
        throw err;
    });

}

module.exports={
    getPost,
    getPosts,
    addPost,
    updatePost,
    deletePost
}