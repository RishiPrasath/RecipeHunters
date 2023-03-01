const express = require('express');
const router = express.Router();
const { MongoClient } = require("mongodb");


const bodyParser = require('body-parser')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/',(req,res)=>{
    res.send("Search Route");

})  

router.get('/searchResults/:query', async (req,res)=>{
    console.log('/searchResults');
//Database Query Requirements
//Filter Recipes by query name
//Filter Recipes by filters using the summary_tags field in the Recipe Document 

//https://www.mongodb.com/docs/drivers/node/current/fundamentals/aggregation/
//https://www.youtube.com/watch?v=EnfsjWK0Wcs
//https://www.mongodb.com/docs/atlas/atlas-search/text/#fuzzy-examples


    console.log(req.params.query);
    const query =  req.params.query;
    const client = await MongoClient.connect(
        'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('RecipeHunters').collection('Recipes');
    const pipeline = [{
        '$search': {
          'index': 'recipesearch',
          'text': { 'query': query,'path': {'wildcard': '*'},'fuzzy': {"maxEdits": 2,"prefixLength": 4,}}
        }
    }];
    const cursor = coll
    .aggregate(pipeline)
    .project({name:1,imageURLs:1,summary_tags:1,videoURL:1,briefdescription:1,score: { $meta: "searchScore" }})// Limiting fields to be displayed;
    .sort({score:-1});// Sort by relevance score in descending order
    const result = await cursor.toArray();
    console.log(result);
    await client.close();
    res.json(result);
}) 


router.get('/loadAllRecipes', async (req,res)=>{
      const client = await MongoClient.connect(
        'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      const coll = client.db('RecipeHunters').collection('Recipes');
      const cursor = 
      coll.find({}) // Leave it empty as no filter is applied  
      .sort({"_id":-1}) // _id field contains a timestamp 
      //https://steveridout.com/mongo-object-time/#:~:text=Did%20you%20know%20that%20each,an%20ObjectId%20from%20a%20timestamp. 
      .project({name:1,imageURLs:1,tags:1,videoURL:1,briefdescription:1}); // Limiting fields to be displayed 
      const result = await cursor.toArray();//The resulting data
      console.log(result);
      await client.close();
      res.json(result);//return result

})


router.get('/recomendedResults',(req,res)=>{
// Query name and input of filters by the user are matched to their correspondent score fields in the Database.
// The sum of the score allows to query Recipes that have the same score of or an recipe that has an score that is +5 or -5.
// Limit Recipes to 4

    
}) 



module.exports = router;