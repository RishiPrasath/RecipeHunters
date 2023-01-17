

const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Home Route");

})  


router.get('/recentRecipes',(req,res)=>{
    console.log('/recentRecipes');
    // Description
    // Retrieves new recipes that were uploaded recently
    // Database Query Requirements
    // Sort Recipes by creation date in descending order
    // Limit Recipes to 12 

    
    res.send("/recentRecipes");

})  


router.get('/FeaturedRecipes',(req,res)=>{
    console.log('/FeaturedRecipes'); 
    // Database Query Requirements:
    // Recipes must contain Tags that classify the Recipes
    // 2 Recipes Picked at random
    // If selected Recipe contains a video, the video will be used as the thumbnail instead.
    
    res.send("/FeaturedRecipes");

})  


module.exports = router;