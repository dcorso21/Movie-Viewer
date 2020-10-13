import React from "react";
import logo from "./logo.svg";
import "./App.css";
var unirest = require("unirest");

function CallforData() {
    var req = unirest(
        "GET",
        "https://rapidapi.p.rapidapi.com/title/auto-complete"
    );

    req.query({
        q: "lord of the rings",
    });

    req.headers({
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "a2bae0723bmsh29b3914ddcadd1ep1df2c5jsnc75135651838",
        useQueryString: true,
    });

    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={CallforData} >Click MEEEEE!</button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
