import SearchBar from "./Child Compoenents/SearchBar";
import Filters from "./Child Compoenents/Filter";
import FiltersList from "./Child Compoenents/FiltersList";
import ResultsHeader from "./Child Compoenents/ResultsHeader"
import RecipeElement from "../RecipeElement";
function Search(){

    return(

        <>
            
            <SearchBar/>
            <Filters/>
            <FiltersList/>
            <ResultsHeader/>
            <RecipeElement/>
        </>


    );


}


export default Search;