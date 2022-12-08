import React from "react";
import "./search.css";
import "./search.svg";

const Search = ({ inputValue, setInputValue }) => {


    return (
        <input
            type="search"
            id="search"
            placeholder="Search..."
            autocomplete="off"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
        />
    )
}

export default Search;
