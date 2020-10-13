import React from "react";
import "./searchBar.css";

export default function SearchBar({ setSearchText, CallforData }) {
    return (
        <div className="SearchBar">
            <input onChange={setSearchText} type="text" />
            <button onClick={CallforData}>Search</button>
        </div>
    );
}
