import React from "react";
import "./searchBar.css";

export default function SearchBar(props) {
    return (
        <div className="SearchBar">
            <ul className="navDisplay">
                <li className="pageName" onClick={props.fetchNowPlaying}>Movie Viewer</li>
                <li onClick={props.fetchPopular}>Popular</li>
                <li onClick={props.fetchNowPlaying}>In Theatres</li>
                <li onClick={props.fetchUpcoming}>Coming Soon</li>
                <li>
                    <input
                        className="searchInput"
                        onKeyPress={props.handleSearchEnter}
                        onChange={props.setSearchText}
                        type="text"
                        placeholder="Search for Movies"
                    />
                </li>
            </ul>
        </div>
    );
}
