import React from "react";
import "./searchBar.css";

export default function SearchBar({ setSearchText, handleSearchEnter }) {
    return (
        <div className="SearchBar">
            <input
                className="searchInput"
                onKeyPress={handleSearchEnter}
                onChange={setSearchText}
                type="text"
                placeholder="Search for Movies"
            />
        </div>
    );
}
