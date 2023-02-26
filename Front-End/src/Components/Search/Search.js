import SearchBar from "./Child Compoenents/SearchBar";
import Filters from "./Child Compoenents/Filter";
import FiltersList from "./Child Compoenents/FiltersList";
import ResultsHeader from "./Child Compoenents/ResultsHeader"
import RecipeElement from "../RecipeElement";
import {useLocation} from "react-router-dom";
function Search(){

    const location = useLocation();
    const pathname = decodeURI(location.pathname);
    const searchMode = pathname.replace('/search/','');
    console.log(searchMode);

    return(
        <>
            <SearchBar/>
            <Filters/>
            <FiltersList/>
            <ResultsHeader/>
            <RecipeElement/>
            {/* Here the You may also like component needs to be added */}
        </>
    );
}

export default Search;