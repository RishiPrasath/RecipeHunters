import RecipeElement from "../../RecipeElement";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
// import { useState } from "react";
import React, { useState, useEffect } from 'react';

import axios from 'axios' 





function RecentRecipes(){
    const [recentrecipes ,setrecentrecipes] = useState([]);
    useEffect(() =>{
        

        axios.get("http://localhost:5100/home/recentRecipes")
        .then(res=>{
            console.log(res.data)
            setrecentrecipes(res.data)
        }).catch(err=>{
            console.log(err);
        })

        

    },[]);

    var recipeList = recentrecipes;
    console.log(recipeList);
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
                    
                    
                    {recipeList && recipeList.map(
                        recipe => 
                        <RecipeElement 
                        name = {recipe.name} 
                        videoURL= {recipe.videoURL}  
                        tags = {recipe.tags} 
                        imageURLs = {recipe.imageURLs}
                        briefdescription = {recipe.briefdescription}  
                    /> )}
                    

                    {/* <RecipeElement/>
                    <RecipeElement/>
                    <RecipeElement/> */}
                </Box>
            </Box> 
        </>
    );
}

export default RecentRecipes;