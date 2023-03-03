import SearchBar from "./Child Compoenents/SearchBar";
import Filters from "./Child Compoenents/Filter";
import FiltersList from "./Child Compoenents/FiltersList";
import ResultsHeader from "./Child Compoenents/ResultsHeader"
import RecipeElement from "../RecipeElement";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid';


function Search() {
    const [searchResults, setSearchResults] = new useState([]);
    useEffect(() => {
        axios.get("http://localhost:5100/search/loadAllRecipes")
            .then(res => {
                console.log(res.data)
                setSearchResults(res.data)
            }).catch(err => {
                console.log(err);
            })
    }, [setSearchResults]);

    const getQuery = (query) => {

        console.log("Coming from <SearchBar/> : " + query);

        const url = `http://localhost:5100/search/searchResults/${query}`;
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res.data);
                setSearchResults(res.data)

            }).catch(err => {
                console.log(err);
            })

    }

    const location = useLocation();
    const pathname = decodeURI(location.pathname);
    const searchMode = pathname.replace('/search/', '');
    console.log(searchMode);


    return (
        <>
            <SearchBar onChange={getQuery} />
            {/* <Filters/> */}
            {/* <FiltersList/> */}
            {/* <ResultsHeader/> */}
            {/* <RecipeElement/> */}
            <Filters />
            <Grid container spacing={3} >
                {searchResults.length !== 0 && searchResults.map(
                    (recipe, i) =>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}  >
                                <RecipeElement 
                                    name={recipe.name}
                                    videoURL={recipe.videoURL}
                                    tags={recipe.tags}
                                    imageURLs={recipe.imageURLs}
                                    briefdescription={recipe.briefdescription}
                                />
                        </Grid>)}
            </Grid>
            {/* Here the You may also like component needs to be added */}
        </>
    );
}

export default Search;