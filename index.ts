import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // INSERT
    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //         posts: {
    //             create: {title: 'Hello World'},
    //         },
    //         profile: {
    //             create: {bio: 'I like turtles'},
    //         }
    //     }
    // })
    // const allUsers = await prisma.user.findMany()
    // console.dir(allUsers, {depth: null});

    // UPDATE
    const post = await prisma.post.update({
        where: {id: 1},
        data: {published: true},
    })

    console.log(post);
}

main()
    .then(async ()=> {
        await prisma.$disconnect()
    })
    .catch(async (e)=> {
        console.log(e);
        await prisma.$disconnect()
        process.exit(1)
    })