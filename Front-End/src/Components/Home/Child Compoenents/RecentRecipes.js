import RecipeElement from "../../RecipeElement";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Container from "@mui/system";

function RecentRecipes(){

    return(
        <>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '600px',
                backgroundColor: 'white',
                justifyContent: 'center',
            }} 
            >
                <Typography variant="h4" color="primary" sx={{px:26, pb:3,}} 
                >Recent Recipes</Typography>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: "center",
                }} 
                >
                    
                    <RecipeElement/>
                    <RecipeElement/>
                    <RecipeElement/>
                </Box>
            </Box>
            
        </>
        

    );


}


export default RecentRecipes;