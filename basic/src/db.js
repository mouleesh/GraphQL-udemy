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

const db = {
    users,
    posts,
    comments
}

export { db as default };