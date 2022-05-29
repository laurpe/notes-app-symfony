import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Notes</Link>
                        </li>
                        <li>
                            <Link to="/add">Add note</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
        </>
    );
};

export default Layout;
