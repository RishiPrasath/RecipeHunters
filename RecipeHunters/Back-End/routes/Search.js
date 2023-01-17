const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Search Route");

})  

router.get('/searchResults',(req,res)=>{
console.log('/searchResults');
//Database Query Requirements
//Filter Recipes by query name
//Filter Recipes by filters using the tags field in the Recipe Document 

}) 


router.get('/recomendedResults',(req,res)=>{
// Query name and input of filters by the user are matched to their correspondent score fields in the Database.
// The sum of the score allows to query Recipes that have the same score of or an recipe that has an score that is +5 or -5.
// Limit Recipes to 4

    
}) 



module.exports = router;