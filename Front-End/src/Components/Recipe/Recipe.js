import RecipeElementMain  from "./Child Compoenents/RecipeElementMain"; 
import { Box } from "@mui/system";
import Breadcrumb from "./Child Compoenents/Breadcrumb"
import Modal from "./Child Compoenents/Modal"
function Recipe(){

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