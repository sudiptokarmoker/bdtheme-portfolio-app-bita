import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";

const DetailsPages = ({ initialPagesLists }) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (router.query.id) {
            fetch("/api/pageDetails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: router.query.id }),
            })
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setLoading(false);
                }).catch(error => {
                    setError(true);
                });
        }
    }, [router.query.id]);

    if (isLoading) return <p>Loading...</p>

    return (
        <>
            {error === true ? <h1>page not found</h1> : <div className="bdt-digital-agency-wrap">
                <Navbar pagesItemLists={initialPagesLists} />
                <section className="bdt-hero-section bdt-pd-bottom">
                    <div className="bdt-container">
                        <div className="bdt-hero-content bdt-zIndex">
                            <h2 className="bdt-hero-title">
                                {data && data.pagesDetails && data.pagesDetails.name}
                            </h2>
                        </div>
                        <div className="bdt-hero-services-section bdt-grid bdt-3-col bdt-grid-gap-large bdt-pd-top-bottom bdt-zIndex">
                            <div className="bdt-hero-services-item">
                                <div className="bdt-hero-services-icon">
                                    <svg
                                        width="100"
                                        height="100"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z"
                                            clipRule="evenodd"
                                        />
                                        <rect
                                            width="2"
                                            height="2"
                                            x="9.002"
                                            y="12"
                                            rx="1"
                                        />
                                        <path d="M9.1 6.995a.905.905 0 111.8 0l-.35 3.507a.553.553 0 01-1.1 0L9.1 6.995z" />
                                    </svg>
                                </div>
                                <h2 className="bdt-hero-services-title bdt-sv-title">
                                    {data && data.pagesDetails && data.pagesDetails.banner_title && <Link href={'/content/' + data.pagesDetails.id}>{data.pagesDetails.banner_title}</Link> }
                                </h2>
                                <div className="bdt-hero-services-desc bdt-gb-text">
                                    {data && data.pagesDetails && data.pagesDetails.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>}
        </>
    );
};

export const getServerSideProps = async () => {
    const pages = await prisma.pages.findMany({
        select: {
            id: true,
            name: true,
            slug: true,
        },
    });
    return {
        props: {
            initialPagesLists: pages,
        },
    };
};

export default DetailsPages;
