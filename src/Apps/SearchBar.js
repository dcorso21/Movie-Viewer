import React from "react";
import "./searchBar.css";

export default function SearchBar({ setSearchText, handleSearchEnter }) {
    return (
        <div className="SearchBar">
            <ul className="navDisplay">
                <li className="pageName">
                    Movie Viewer
                </li>
                <li>
                    Popular
                </li>
                <li>
                    In Theatres
                </li>
                <li>
                    Coming Soon
                </li>
                <li>
                    <input
                        className="searchInput"
                        onKeyPress={handleSearchEnter}
                        onChange={setSearchText}
                        type="text"
                        placeholder="Search for Movies"
                    />
                </li>
            </ul>
        </div>
    );
}
