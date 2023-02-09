console.log("Back End server");


const express = require('express');
const cors = require('cors');

var bodyParser = require('body-parser')

const { MongoClient } = require("mongodb");


// Connection URI
const uri =
  "mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("RecipeHunters").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// const mongoose = require('mongoose');
// mongoose.connect(
// "mongodb+srv://RecipeHunters:t4g5@cluster0.evmmugl.mongodb.net/test",
// {useNewUrlParser:true},{strictQuery: false}
// )
// const db  = mongoose.connection
// db.on('error',(error)=>console.error(error));
// db.once('open',()=>console.log("Database connected!"))


const app = express();
app.listen(5000);
app.use(cors());
app.use(express.json());


app.use(bodyParser.json())
app.use(express.json());











const HomeRouter = require('./routes/Home');
const searchRouter = require('./routes/Search');
const recipeRouter = require('./routes/Recipe');
app.use('/home',HomeRouter);
app.use('/recipe',recipeRouter);
app.use('/search',searchRouter);







