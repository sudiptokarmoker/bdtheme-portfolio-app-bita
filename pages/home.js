import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/flex.svg";

const Home = () => {
    return (
        <>
            <div className="bdt-digital-agency-wrap">
            <section className="bdt-header-section bdt-flex-middle">
                <Image src={profilePic} alt="Picture of the author" />

                <div className="bdt-header-menu-and-button bdt-flex-middle">
                    <ul className="bdt-header-menu bdt-flex-middle">
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">services</a>
                        </li>
                        <li>
                            <a href="#">about</a>
                        </li>
                        <li>
                            <a href="#">blog</a>
                        </li>
                        <li>
                            <a href="#">content</a>
                        </li>
                    </ul>
                    <div className="bdt-header-button">
                        <a className="bdt-animated-button" href="#">
                            <span>buy now</span>
                        </a>
                    </div>
                </div>

                <div className="bdt-header-offcanvas-menu">
                    <div id="myNav" className="bdt-offcanvas-overlay">
                        <a href="" className="bdt-closebtn">
                            &times;
                        </a>
                        <ul className="bdt-overlay-content">
                            <li>
                                <a href="#">home</a>
                            </li>
                            <li>
                                <a href="#">services</a>
                            </li>
                            <li>
                                <a href="#">about</a>
                            </li>
                            <li>
                                <a href="#">blog</a>
                            </li>
                            <li>
                                <a href="#">content</a>
                            </li>
                        </ul>
                    </div>
                    <span className="bdt-offcanvas-open">&#9776;</span>
                </div>
            </section>
                
                <section className="bdt-hero-section bdt-pd-bottom">
                    <div className="bdt-container">
                        <div className="bdt-hero-content bdt-zIndex">
                            <h2 className="bdt-hero-title">
                                A digital <br /> agency
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
                                            fill-rule="evenodd"
                                            d="M16 3H4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4z"
                                            clip-rule="evenodd"
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
                                    <a href="#">Business Stratagy</a>
                                </h2>
                                <div className="bdt-hero-services-desc bdt-gb-text">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered.
                                </div>
                            </div>
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
                                            fill-rule="evenodd"
                                            d="M10 17.016a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm0 1a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                            clip-rule="evenodd"
                                        />
                                        <rect
                                            width="4"
                                            height="2"
                                            x="8"
                                            y="2"
                                            rx="1"
                                        />
                                        <path d="M8.94 9.44l4.95-2.83-2.83 4.95-4.95 2.83 2.83-4.95z" />
                                    </svg>
                                </div>
                                <h2 className="bdt-hero-services-title bdt-sv-title">
                                    <a href="#">Website Development</a>
                                </h2>
                                <div className="bdt-hero-services-desc bdt-gb-text">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered.
                                </div>
                            </div>
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
                                            fill-rule="evenodd"
                                            d="M15.665 8.113a1 1 0 01-.667-.977L15 7a4 4 0 00-6.483-3.136 1 1 0 01-.8.2 4 4 0 00-3.693 6.61 1 1 0 01.2 1 4 4 0 006.67 4.087 1 1 0 011.262-.152 2.5 2.5 0 003.715-2.905 1 1 0 01.341-1.113 2.001 2.001 0 00-.547-3.478zM16 7c0 .057 0 .113-.003.17a3.001 3.001 0 01.822 5.216 3.5 3.5 0 01-5.201 4.065 5 5 0 01-8.336-5.109A5 5 0 017.896 3.08 5 5 0 0116 7z"
                                            clip-rule="evenodd"
                                        />
                                        <circle cx="10" cy="10" r="3" />
                                    </svg>
                                </div>
                                <h2 class="bdt-hero-services-title bdt-sv-title">
                                    <a href="#">Marketing & Reporting</a>
                                </h2>
                                <div class="bdt-hero-services-desc bdt-gb-text">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Home;
