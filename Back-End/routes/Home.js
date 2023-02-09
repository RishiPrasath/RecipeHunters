

const express = require('express');
const router = express.Router();


const { MongoClient } = require("mongodb");


router.get('/',(req,res)=>{
    console.log("Home Route");
    res.send("Home Route");

})  


router.get('/recentRecipes',async (req,res)=>{
    console.log('/recentRecipes');
    // Description
    // Retrieves new recipes that were uploaded recently
    // Database Query Requirements
    // Sort Recipes by creation date in descending order
    // Limit Recipes to 12 

    

    
    const client = await MongoClient.connect(
      'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('RecipeHunters').collection('Recipes');
    const cursor = 
    coll.find({}) // Leave it empty as no filter is applied  
    .sort({"_id":-1}) // _id field contains a timestamp 
    //https://steveridout.com/mongo-object-time/#:~:text=Did%20you%20know%20that%20each,an%20ObjectId%20from%20a%20timestamp. 
    .limit(12)// Limit Recipes to 12 
    .project({name:1,imageURLs:1,tags:1,videoURL:1}); // Limiting fields to be displayed 
    const result = await cursor.toArray();//The resulting data
    console.log(result);
    await client.close();
    res.json(result);//return result
    
    

})  


router.get('/FeaturedRecipes', async (req,res)=>{
    console.log('/FeaturedRecipes'); 
    // Database Query Requirements:
    // Recipes must contain Tags that classify the Recipes
    // 2 Recipes Picked at random
    // If selected Recipe contains a video, the video will be used as the thumbnail instead.
    
    const client = await MongoClient.connect(
        'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      const coll = client.db('RecipeHunters').collection('Recipes');//Access Recipe collection
      const cursor = 
      coll.aggregate([{$sample : {size:2}}]).project({name:1,imageURLs:1,briefdescription:1,videoURL:1})// Limiting fields to be displayed 
      const result = await cursor.toArray();//The resulting data
      console.log(result);
      await client.close();
      res.json(result);//return result

})  


module.exports = router;