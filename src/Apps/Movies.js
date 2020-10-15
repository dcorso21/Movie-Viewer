import React, { useState } from "react";
import "./Movies.css";
import Modal from "./Modal.js";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Movies({ searchResults }) {
    const [isOpen, setIsOpen] = useState(false);
    const [clickedMovie, setClickedMovie] = useState(searchResults[0]);

    function handleClickMovie(movie) {
        setClickedMovie(movie);
        setIsOpen(true);
    }

    function fillOutMovie(movieInfo) {
        return (
            <div
                key={movieInfo.id}
                className="movie fadeIn"
                onClick={() => handleClickMovie(movieInfo)}
            >
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
        if (!searchResults) return;
        return searchResults.map(fillOutMovie);
    }

    return (
        <>
            <div className="movieContainer">
                {makeMovieCards(searchResults)}
            </div>
            <Modal
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                clickedMovie={clickedMovie}
            />
        </>
    );
}
