import {GraphQLServer} from 'graphql-yoga';

//String, Boolean, Int, Float, ID - Scalar types

//Type Definitions - Schema
const typeDefs = `
    type Query {
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

//Resolvers
const resolvers = {
    Query: {
        me(){
            return {
                id: "223dd",
                name: "Guru",
                email: "gggmouleesh@gmail.com",
                age: 28
            }
        },
        post(){
            return {
                id: "24332c",
                title: "Title of the Post!",
                body: "",
                published: false
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("The server is up!");
});