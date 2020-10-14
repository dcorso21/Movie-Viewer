//  Modal Solution found here
// https://www.youtube.com/watch?v=LyLa7dU5tp8
import React from "react";
import ReactDom from "react-dom"
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    width:"50%",
    height: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
    color: "#FFF",
    padding: "50px",
    zIndex: 1001,
};

const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, .8)",
};

export default function Modal({ clickedMovie, isOpen }) {
    if (!isOpen) return null;
    console.log(clickedMovie);
    return ReactDom.createPortal(
        <>
            <div className="Overlay" style= {OVERLAY_STYLES}></div>
            <div style={MODAL_STYLES}>
                <div className="mtitle">{clickedMovie.title}</div>
                <img src={IMGPATH + clickedMovie.backdrop_path} alt=""/>
            </div>
        </>,
        document.getElementById("Modal-portal")
    );
}
