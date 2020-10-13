import React from "react";
import "./navstyle.css";

function NavBar() {
    return (
        <nav className="navBar">
            <div className="header">
                <ul>
                    <li className="github">GitHub</li>
                    <li className="title">WORKING TITLE</li>
                    <li className="portfolio">Other Projects</li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
