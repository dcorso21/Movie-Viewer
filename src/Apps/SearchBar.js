import React from "react";
import "./searchBar.css";
const unirest = require("unirest");

export default function SearchBar({ parent, searchString }) {
    function updateSearchString(e) {
        parent.setState({searchString: e.target.value});
        console.log(parent.state.searchString);
    }
    function CallforData(searchString, setSearchResults) {
        let req = unirest(
            "GET",
            "https://rapidapi.p.rapidapi.com/title/auto-complete"
        );

        req.query({
            q: searchString,
        });

        req.headers({
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
                "a2bae0723bmsh29b3914ddcadd1ep1df2c5jsnc75135651838",
            useQueryString: true,
        });

        req.end(function (res) {
            if (res.error) throw new Error(res.error);

            setSearchResults(res.body);
            console.table(res.body);
            console.log(res.body);
        });
    }
    return (
        <div className="SearchBar">
            <input onChange={updateSearchString} type="text" />
            <button>Search</button>
        </div>
    );
}
