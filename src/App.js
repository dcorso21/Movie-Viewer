import React from "react";
import NavBar from "./Apps/NavBar";
import SearchBar from "./Apps/SearchBar";
import Movies from "./Apps/Movies";


export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchText : "",
            searchResults : {},
        };
    }
    render(){
        return (
            <div>
                <NavBar />
                <SearchBar
                    parent={this}
                    searchText={this.searchText}
                    />
                {/* <Movies
                    searchResults={this.searchResults}
                /> */}
            </div>
        );
    }
}