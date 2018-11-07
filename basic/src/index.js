import {GraphQLServer} from 'graphql-yoga';

//String, Boolean, Int, Float, ID - Scalar types

const users = [{
    id: "1",
    name: "Andrew",
    email: "ggmoasdfhsjdm",
    age: 25
},{
    id: "2",
    name: "Sarah",
    email: "sdafsds"
}]

const posts = [{
    id: "1",
    title: "asdfasf",
    body: "asdf",
    published: true,
    author: "1"
},{
    id: "2",
    title: "asdf",
    body: "asdf",
    published: false,
    author: "2"
}]

const comments = [{
    id: "1",
    text: "Comment text 1",
    post: "1",
    author: "1"
},{
    id: "2",
    text: "Comment text 2",
    post: "1",
    author: "2"
}]

//Type Definitions - Schema
const typeDefs = `
    type Query {
        me: User!
        posts(query: String): [Post!]!
        users(query: String): [User!]!
        comments: [Comment!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post]!
        comments: [Comment]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
        comments: [Comment]!
    }

    type Comment {
        id: ID!
        text: String!
        post: Post!
        author: User!
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
        posts(parent, args, ctx, info) {
            if(!args.query){
                return posts
            }

            return posts.filter((post) => {
                const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())

                return isTitleMatch || isBodyMatch;
            }) 
        },
        users(parent, args, ctx, info) {
            if(!args.query){
                return users
            }

            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            }) 
        },
        comments(parent, args, ctx, info){
            return comments;
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            });
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => {
                return comment.post === parent.id
            });
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter((post) => {
                return post.author === parent.id
            });
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => {
                return comment.author === parent.id
            });
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            });
        },
        post(parent, args, ctx, info) {
            return posts.find((post) => {
                return post.author === parent.id
            });
        }
    },
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("The server is up!");
});