import Image from "next/image";
import profilePic from "../public/flex.svg";
import Link from "next/link";

const Navbar = ({ pagesItemLists }) => {
    return (
        <>
            <section className="bdt-header-section bdt-flex-middle">
                <Link href={'/'}><a><Image src={profilePic} alt="Picture of the author" /></a></Link> 
                
                <div className="bdt-header-menu-and-button bdt-flex-middle">
                    <ul className="bdt-header-menu bdt-flex-middle">
                        {pagesItemLists.map((content) => {
                            return (
                                <li key={content.id}>
                                    <Link href={'/content/' + content.id}>{content.name}</Link> 
                                </li>
                            );
                        })}
                    </ul>
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
        </>
    );
};

export default Navbar;
