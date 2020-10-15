//  Modal Solution found here
// https://www.youtube.com/watch?v=LyLa7dU5tp8
import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Modal({ clickedMovie, isOpen, setIsOpen }) {
    if (!isOpen) return null;
    const MODAL_STYLES = {
        background: `linear-gradient(to bottom, rgba(0, 0, 0, .5), #000), url(${
            IMGPATH + clickedMovie.backdrop_path
        })`,
        backgroundSize: "cover",
    };
    console.log(clickedMovie);
    return ReactDom.createPortal(
        <>
            <div className="Overlay" onClick={() => setIsOpen(false)}></div>
            <div className="Modal" style={MODAL_STYLES}>
                {/* <div className="closeBtn">close</div> */}
                <i
                    className="fas fa-times closeBtn"
                    onClick={() => setIsOpen(false)}
                ></i>
                <div className="modalContent">
                    <div className="card-title">{clickedMovie.title}</div>
                    <div className="infoCard">
                        <div>
                            <h3>Info</h3>
                            <div className="releaseDate">
                                Release Date: {clickedMovie.release_date}
                            </div>
                            <div className="voteAverage">
                                Average Vote: {clickedMovie.vote_average}
                            </div>
                        </div>
                        <div className="overview">
                            <h3>Overview</h3>
                            <p>{clickedMovie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("Modal-portal")
    );
}
