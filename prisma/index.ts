// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
// //   await prisma.user.create({
// //     data: {
// //       name: 'Alice',
// //       email: 'alice@prisma.io',
// //       Post: {
// //         create: { title: 'Hello World' },
// //       },
// //       Profile: {
// //         create: { bio: 'I like turtles' },
// //       },
// //     },
// //   })

// //   const allUsers = await prisma.user.findMany({
// //     include: {
// //       Profile: true,
// //     },
// //   })
// //   console.dir(allUsers, { depth: null })

// const post = await prisma.profile.update({
//     where: { id: 1 },
//     data: { bio: "I like dogs"},
//   })
//   console.log(post)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })