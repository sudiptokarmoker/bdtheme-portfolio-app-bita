import {prisma} from './../../db';

export default async function handler(req, res) {
    if (!req.body) {
        res.status(404).end("Error");
    }
    const { id } = req.body;
    
    const pagesDetails = await prisma.pages.findUnique({
        where: {
            id: parseInt(id),
        }
      })
    res.json({ pagesDetails });
}
