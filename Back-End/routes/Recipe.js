

const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("Recipe Route");

})

router.get('/LoadRecipe',(req,res)=>{
    console.log('/LoadRecipe');

})


router.post('/addComment',(req,res)=>{
    console.log('/addComment');

})

router.get('/shoppingList',(req,res)=>{
    console.log('/shoppingList');

})


module.exports = router;






