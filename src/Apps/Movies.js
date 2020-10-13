import React from "react";
import "./Movies.css";

export default function Movies({ searchResults }) {
    return (
        <div>
            {console.log(searchResults)}
            {/* {movies.map((m) => console.log(m))} */}
            <div className="movie">
                <div className="poster">poster</div>
                <div className="info">
                    <div className="mname">title</div>
                    <div className="myear">year</div>
                    <div className="mrating">rating</div>
                </div>
            </div>
            {/* <div onClick={() => pp(movies)}>{movies.toString()}</div> */}
        </div>
    );
}
