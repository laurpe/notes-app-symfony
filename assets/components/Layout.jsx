import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <Link to="/">notes</Link>
                        <Link to="/add">add note</Link>
                    </ul>
                </nav>
            </header>
            {children}
        </>
    );
};

export default Layout;
