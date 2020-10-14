import React from "react";
import NavBar from "./Apps/NavBar";
import SearchBar from "./Apps/SearchBar";
import Movies from "./Apps/Movies";
const APIKEY = "4ed50824248c60e35aae0bba177517b9";
const SEARCHPATH = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            searchResults: "",
        };
    }
    setSearchText(e) {
        this.setState({ searchText: e.target.value });
    }
    async fetchNowPlaying() {
        let resp = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`
        );
        let jsonresp = await resp.json();
        console.log(jsonresp.results);
        this.setState({searchResults : jsonresp.results});
    }
    async fetchSearchQuery() {
        let resp = await fetch(SEARCHPATH + this.state.searchText);
        let jsonresp = await resp.json();
        console.log(jsonresp.results);
        this.setState({searchResults : jsonresp.results});
    }

    render() {
        if (this.state.searchResults === ""){
            this.fetchNowPlaying();
        }
        return (
            <div>
                <NavBar />
                <SearchBar
                    setSearchText={(e) => this.setSearchText(e)}
                    CallforData={(e) => this.fetchSearchQuery(e)}
                />
                <Movies searchResults={this.state.searchResults} />
            </div>
        );
    }
}
