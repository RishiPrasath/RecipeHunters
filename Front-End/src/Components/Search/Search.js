import SearchBar from "./Child Compoenents/SearchBar";
import Filters from "./Child Compoenents/Filter";
import FiltersList from "./Child Compoenents/FiltersList";
import ResultsHeader from "./Child Compoenents/ResultsHeader"
import RecipeElement from "./Child Compoenents/RecipeElement";
function Search(){

    return(

        <>
            <h1>Search Page</h1>
            <SearchBar/>
            <Filters/>
            <FiltersList/>
            <ResultsHeader/>
            <RecipeElement/>
        </>


    );


}


export default Search;