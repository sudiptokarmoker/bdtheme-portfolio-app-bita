export default async function handler(req, res) {
    if (!req.body) {
        res.status(404).end("Error");
    }
    const { pageName, pageSlug, content, bannerTitle } = req.body;
    const savedPages = await prisma.pages.create({
        data: {
            name: pageName,
            slug: pageSlug,
            banner_title: bannerTitle,
            content
        },
    });
    res.json({ savedPages });
}
