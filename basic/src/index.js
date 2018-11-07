import {GraphQLServer} from 'graphql-yoga';

//String, Boolean, Int, Float, ID - Scalar types

//Type Definitions - Schema
const typeDefs = `
    type Query {
        me: User!
        post: Post!
        greeting(name: String): String!
        add(numbers: [Float!]!): Float!
        grades: [Int!]!
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
        me() {
            return {
                id: "223dd",
                name: "Guru",
                email: "gggmouleesh@gmail.com",
                age: 28
            }
        },
        post() {
            return {
                id: "24332c",
                title: "Title of the Post!",
                body: "",
                published: false
            }
        },
        greeting(parent, args, ctx, info) {
            return args.name ? `Hello, ${args.name}` : "Hello";
        },
        add(parent, args, ctx, info) {
            if(args.numbers.length === 0) {
                return 0;
            }

            return args.numbers.reduce((acc, currentValue) => {
                return acc + currentValue;
            });
        },
        grades(parents, args, ctx, ingo) {
            return [54, 85, 65];
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