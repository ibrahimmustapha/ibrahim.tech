import React from "react"
import "./css/search.module.css"

const Search = () => {
    return (
        <form>
            <label htmlFor="search">Search</label>
            <input type="text" name="search" placeholder="search blog here" id="search"/>
        </form>
    )
}

export default Search