

const { json } = require('express');
const express = require('express');
const router = express.Router();

const { MongoClient } = require("mongodb");


const bodyParser = require('body-parser')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))


router.get('/',(req,res)=>{
    res.send("Recipe Route");
})

router.get('/LoadRecipe/:name',async(req,res)=>{
    console.log('/LoadRecipe');

    console.log(req.params.name);

    const filter = {
      'name': req.params.name
    };
    const client = await MongoClient.connect(
      'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('RecipeHunters').collection('Recipes');
    const cursor = coll.find(filter);
    const result = await cursor.toArray();
    console.log(result);
    await client.close();
    res.json(result);
})

router.post('/addComment', async (req,res)=>{
  console.log('/addComment');
  /*
  Recieved request should contain:
  -name (for querying correct document)
  -posterName
  -comment 
  -rating

  Sample Data: { posterName: 'Emily', comment: 'Great Dish!', rating: 4 }
  */
    
    try {
    var comment = req.body;
    // update comments field with new array
    var updateclient = await MongoClient.connect(
      'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    
    
    
    const updateQuery = { "name": comment.name };
    const updateDocument = {
      $push: { 
        comments: {
        posterName:comment.posterName,
        comment:comment.comment,
        rating: comment.rating
        } 
      }
    };
    const collection = updateclient.db('RecipeHunters').collection('Recipes');
    const updateResult = await collection.updateOne(
                                      updateQuery, 
                                      updateDocument
                                    );
    
    await updateclient.close();

    console.dir(updateResult);


    //Verify result
    const filter = {
      'name': comment.name
    };
    const client = await MongoClient.connect(
      'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const coll = client.db('RecipeHunters').collection('Recipes');
    const cursor = coll.find(filter).project({comments:1});
    const result = await cursor.toArray();
    await client.close();
   
    console.log(result[0].comments);





    }catch(error){
      console.log("ERROR!");
      console.log(error.message);
      res.send(error.message)
    }
    

})

router.get('/shoppingList/:name',async(req,res)=>{
    console.log('/shoppingList');

    console.log(req.params.name);

    const client = await MongoClient.connect(
      'mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    const query = { "name": req.params.name };
    const projection = { "shoppingList": 1 };
    const collection = client.db('RecipeHunters').collection('Recipes');
    const cursor = collection.find(query).project(projection);
    // await cursor.forEach(console.dir);
    const result = await cursor.toArray();                                          
    res.json(result);  

})


module.exports = router;






