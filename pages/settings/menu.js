import { useUser } from "../../lib/hooks";
import Layout from "../../components/Layout";
import { useState } from "react";

const Menu = ({ initialMenuLists }) => {
    const user = useUser({ redirectTo: "/login" });
    const [menuItemName, setMenuItemName] = useState("");
    const [menuItemSlug, setMenuItemSlug] = useState("");
    const [menuItemLists, setMenuItemLists] = useState(initialMenuLists);

    const SubmitHandler = async (event) => {
        event.preventDefault();
        const res = await fetch(`/api/menu`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                menuItemName,
                menuItemSlug,
            }),
        });
        const data = await res.json();
        setMenuItemLists([...menuItemLists, data.savedMenu]);
        setMenuItemName("");
        setMenuItemSlug("");
    };

    return (
        <Layout>
            <h1>Settings - Menu</h1>
            {user && (
                <>
                    <div className="input-form-element">
                        <form
                            onSubmit={SubmitHandler}
                            name="menuForm"
                            className="menuForm"
                        >
                            <div>
                                <label htmlFor="menuItemName">
                                    {" "}
                                    Name of menu :{" "}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="menuItemName"
                                    value={menuItemName}
                                    className="menuItemName"
                                    id="menuItemName"
                                    placeholder="name of menu"
                                    onChange={(e) =>
                                        setMenuItemName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="menuItemSlug">
                                    {" "}
                                    Name of menu slug:{" "}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="menuItemSlug"
                                    value={menuItemSlug}
                                    className="menuItemSlug"
                                    id="menuItemSlug"
                                    placeholder="name of menu item slug"
                                    onChange={(e) =>
                                        setMenuItemSlug(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <input type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="col-6">
                            <h2>Menu Lists</h2>
                            <ul>
                                {menuItemLists.map((menuItem) => {
                                    return (
                                        <li key={menuItem.id}>
                                            {menuItem.name} | {menuItem.slug}
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
                input[type="text"] {
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
    const contact = await prisma.menu.findMany();
    return {
        props: {
            initialMenuLists: contact,
        },
    };
};

export default Menu;
