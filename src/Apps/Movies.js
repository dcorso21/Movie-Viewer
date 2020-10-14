import React from "react";
import "./Movies.css";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Movies({ searchResults }) {
    function fillOutMovie(movieInfo) {
        return (
            <div className="movie">
                <img
                    src={IMGPATH + movieInfo.poster_path}
                    alt={movieInfo.title}
                />
                <div className="info">
                    <div className="mname">
                        <p>{movieInfo.title}</p>
                    </div>
                    <div className="myear">{movieInfo.release_date}</div>
                </div>
            </div>
        );
    }

    function makeMovieCards(searchResults) {
        if (!searchResults) {
            return;
        }
        console.log("see", searchResults);

        return searchResults.map(fillOutMovie);
    }

    return (
        <div className="movieContainer">{makeMovieCards(searchResults)}</div>
    );
}
