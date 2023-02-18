import RecipeElementMain  from "./Child Compoenents/RecipeElementMain"; 
import { Box } from "@mui/system";
import Modal from "./Child Compoenents/Modal";
import {useLocation} from "react-router-dom";
import { useEffect,useState} from "react";
import axios from 'axios' 
// This Component needs to get the id of the recipe and 
// render the correct information passing that information
function Recipe(props){
    
    
    const location = useLocation();
    
    
    const [recipe ,setRecipe] = useState([]);



    useEffect(() =>{
        const pathname = decodeURI(location.pathname);
        const recipeName = pathname.replace('/recipe/','');
        console.log(recipeName);
        const url = `http://localhost:5100/recipe/LoadRecipe/${recipeName}`;
        console.log(url);
        axios.get(url)
        .then(res=>{
            console.log(res.data);
            setRecipe(res.data)
            
        }).catch(err=>{
            console.log(err);
        })

    },[]);



    return(
        <>
            {/* <p>Recipe Page</p>
            <Breadcrumb/>
            <Modal/> */}
            <Box sx={{ backgroundColor: '#F1F1F1'}} >
                {/* {recipe && <RecipeElementMain data = {data}/>} */}
                {recipe && recipe.map(
                    oneRecipe=><RecipeElementMain data = {oneRecipe}/>
                )}
            
            </Box> 
        </>
    );
}

export default Recipe;