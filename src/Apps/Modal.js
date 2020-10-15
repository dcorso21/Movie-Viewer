//  Modal Solution found here
// https://www.youtube.com/watch?v=LyLa7dU5tp8
import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Modal({ clickedMovie, isOpen }) {
    if (!isOpen) return null;
    console.log(clickedMovie);
    return ReactDom.createPortal(
        <>
            <div className="Overlay"></div>
            <div className="Modal">
                <div className="mtitle">{clickedMovie.title}</div>
                <img src={IMGPATH + clickedMovie.backdrop_path} alt="" />
            </div>
        </>,
        document.getElementById("Modal-portal")
    );
}
