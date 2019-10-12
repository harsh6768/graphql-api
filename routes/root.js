const graphqlController=require('../controller/graphqlController');

let root={
    post:graphqlController.getPost,
    posts:graphqlController.getPosts,
    addPost:graphqlController.addPost,
    updatePost:graphqlController.updatePost,
    deletePost:graphqlController.deletePost
}

module.exports=root;