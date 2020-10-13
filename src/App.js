import React from "react";
import NavBar from "./Apps/NavBar";
import SearchBar from "./Apps/SearchBar";
import Movies from "./Apps/Movies";
const unirest = require("unirest");

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            searchResults: {},
        };
    }
    setSearchText(e) {
        this.setState({ searchText: e.target.value });
    }
    CallforData(e) {
        let req = unirest(
            "GET",
            "https://rapidapi.p.rapidapi.com/title/auto-complete"
        );

        req.query({
            q: this.state.searchText,
        });

        req.headers({
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
                "a2bae0723bmsh29b3914ddcadd1ep1df2c5jsnc75135651838",
            useQueryString: true,
        });

        req.end((res) => {
            if (res.error) throw new Error(res.error);
            this.setState({ searchResults: res.body });
            console.log(this.state.searchResults);
        });
    }
    render() {
        return (
            <div>
                <NavBar />
                <SearchBar
                    setSearchText={(e) => this.setSearchText(e)}
                    CallforData={(e) => this.CallforData(e)}
                />
                <Movies searchResults={{...this.state.searchResults}} />
            </div>
        );
    }
}
