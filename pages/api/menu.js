// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
export default async function handler(req, res) {
    if (!req.body) {
        res.status(404).end("Error");
    }
    const { menuItemName, menuItemSlug } = req.body;
    const savedMenu = await prisma.menu.create({
        data: {
            name: menuItemName,
            slug: menuItemSlug,
        },
    });
    res.json({ savedMenu });
}
