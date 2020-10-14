import React from "react";
// import NavBar from "./Apps/NavBar";
import SearchBar from "./Apps/SearchBar";
import Movies from "./Apps/Movies";
const APIKEY = process.env.REACT_APP_API_KEY;
const SEARCHPATH = `https://api.themoviedb.org/3/search/movie?&api_key=${APIKEY}&query=`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            searchResults: "",
        };
    }
    handleSearchEnter(e) {
        if (e.key === "Enter") {
            console.log("enter press here! ");
            this.fetchSearchQuery();
        }
    }
    setSearchText(e) {
        this.setState({ searchText: e.target.value });
    }
    async fetchMovies(field) {
        let resp = await fetch(
            `https://api.themoviedb.org/3/movie/${field}?api_key=${APIKEY}&language=en-US&page=1`
        );
        let jsonresp = await resp.json();
        this.setState({ searchResults: jsonresp.results });
    }
    async fetchSearchQuery() {
        let resp = await fetch(SEARCHPATH + this.state.searchText);
        let jsonresp = await resp.json();
        this.setState({ searchResults: jsonresp.results });
    }

    render() {
        if (this.state.searchResults === "") {
            this.fetchMovies("popular");
        }
        return (
            <div>
                {/* <NavBar /> */}
                <SearchBar
                    setSearchText={(e) => this.setSearchText(e)}
                    handleSearchEnter={(e) => this.handleSearchEnter(e)}
                    fetchPopular={() => this.fetchMovies("popular")}
                    fetchNowPlaying={() => this.fetchMovies("now_playing")}
                    fetchUpcoming={()=> this.fetchMovies("upcoming")}
                />
                <Movies searchResults={this.state.searchResults} />
            </div>
        );
    }
}
