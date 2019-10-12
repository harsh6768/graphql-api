const express=require('express');
const graphqlHTTP=require('express-graphql');
const graphqlSchema=require('./model/graphqlSchema');
const bodyParser=require('body-parser');

const root=require('./routes/root');
const db=require('./config/mongodb.con');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/graphql', graphqlHTTP({
    schema:graphqlSchema,
    rootValue:root,
    graphiql:true
}))

const PORT=process.env.PORT||3001;
app.listen(PORT,()=>console.log(`Server is up on port ${PORT}`));
