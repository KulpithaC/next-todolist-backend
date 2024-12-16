import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const allPosts = await prisma.Post.findMany();
  console.log(allPosts);
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
