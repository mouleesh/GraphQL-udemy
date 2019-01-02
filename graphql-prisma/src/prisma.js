import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466'
})

prisma.query.users(null, '{ id name email posts { id title} }').then((data) => {
    console.log(JSON.stringify(data, undefined, 2));
})

// prisma.mutation.createPost({
//     data: {
//         title: "jhbn",
//         body: "bnjnhg hghb",
//         published: true,
//         author: {
//             connect: {
//                 id: "cjqdsef1n000p0921facy0thd"
//             }
//         }
//     }
// }, '{id title body published}').then(data => {
//     console.log(data);
    
// })