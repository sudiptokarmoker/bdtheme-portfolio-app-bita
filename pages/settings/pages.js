import { useUser } from "../../lib/hooks";
import Layout from "../../components/Layout";
import { useState } from "react";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();
//import { prisma } from './../../db';

const Pages = ({ initialPagesLists }) => {
    const user = useUser({ redirectTo: "/login" });
    const [pageName, setPageName] = useState("");
    const [bannerTitle, setBannerTitle] = useState("");
    const [pageSlug, setPageSlug] = useState("");
    const [content, setContent] = useState("");

    const [pageLists, setPageLists] = useState(initialPagesLists);

    const SubmitHandler = async (event) => {
        event.preventDefault();
        const res = await fetch(`/api/pages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                pageName,
                pageSlug,
                content,
                bannerTitle
            }),
        });
        const data = await res.json();
        setPageLists([...pageLists, data.savedPages])
        setPageName("");
        setPageSlug("");
    };

    return (
        <Layout>
            <h1>Settings - Pages</h1>
            {user && (
                <>
                    <div className="input-form-element">
                        <form onSubmit={SubmitHandler} name="menuForm" className="menuForm">
                            <div>
                                <label htmlFor="pageName">
                                    {" "}
                                    Name of page :{" "}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="pageName"
                                    value={pageName}
                                    className="pageName"
                                    id="pageName"
                                    placeholder="name of page"
                                    onChange={(e) =>
                                        setPageName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="pageSlug">
                                    {" "}
                                    Name of page slug:{" "}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="pageSlug"
                                    value={pageSlug}
                                    className="pageSlug"
                                    id="pageSlug"
                                    placeholder="name of page item slug"
                                    onChange={(e) =>
                                        setPageSlug(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="bannerTitle">
                                    Banner Title:
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="bannerTitle"
                                    value={bannerTitle}
                                    className="bannerTitle"
                                    id="bannerTitle"
                                    placeholder="name of page banner title"
                                    onChange={(e) =>
                                        setBannerTitle(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="content">
                                    Content:
                                </label>
                                <textarea required
                                    name="content"
                                    value={content}
                                    className="content"
                                    id="content"
                                    placeholder="content"
                                    onChange={(e) =>
                                        setContent(e.target.value)
                                    }></textarea>
                            </div>
                            <div>
                                <input type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="col-6">
                            <h2>Pages Lists</h2>
                            <ul>
                                {pageLists.map((pageItem) => {
                                    return (
                                        <li key={pageItem.id}>
                                            {pageItem.name} | {pageItem.slug}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </>
            )}

            <style jsx>{`
                .input-form-element {
                }
                input[type="text"], textarea {
                    width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    box-sizing: border-box;
                }

                input[type="submit"] {
                    width: 10%;
                    background-color: #4caf50;
                    color: white;
                    padding: 14px 20px;
                    margin: 8px 0;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                input[type="submit"]:hover {
                    background-color: #45a049;
                }

                div {
                    border-radius: 5px;
                    background-color: #f2f2f2;
                    padding: 20px;
                }
            `}</style>
        </Layout>
    );
};

export const getServerSideProps = async () => {
    const pages = await prisma.pages.findMany();
    return {
        props: {
            initialPagesLists: pages,
        },
    };
};

export default Pages;
