import RecipeElementMain  from "./Child Compoenents/RecipeElementMain"; 
import { Box } from "@mui/system";
import Modal from "./Child Compoenents/Modal";
import { Component } from "react";

// This Component needs to get the id of the recipe and 
// render the correct information passing that information
function Recipe(props){
    console.log(props);
    return(
        <>
            {/* <p>Recipe Page</p>
            <Breadcrumb/>
            <Modal/> */}
            <Box sx={{ backgroundColor: '#F1F1F1'}} >
                <RecipeElementMain/>
            </Box> 
        </>
    );
}

export default Recipe;