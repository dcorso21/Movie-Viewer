import React from "react";
import "./Movies.css";

export default function Movies({ searchResults }) {
    function fillOutMovie(movieInfo) {
        return (
            <div className="movie">
                <img src={movieInfo.i.imageUrl} alt=""/>
                <div className="info">
                    <div className="mname"><p>{movieInfo.l}
                        </p></div>
                    <div className="myear">{movieInfo.y}</div>
                    {/* <div className="mrating">rating</div> */}
                </div>
            </div>
        );
    }

    function makeMovieCards(searchResults) {
        if (!searchResults.d) {
            return;
        }

        console.log("here", searchResults.d);
        // searchResults.d.map(fillOutMovie);
        return searchResults.d.map(fillOutMovie);
    }

    return <div className="movieContainer">{makeMovieCards(searchResults)}</div>;
}
