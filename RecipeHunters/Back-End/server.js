console.log("Back End server");

const express = require('express');
const app = express();

const HomeRouter = require('./routes/Home');
const searchRouter = require('./routes/Search');
const recipeRouter = require('./routes/Recipe');




app.listen(5000);

app.use('/home',HomeRouter);
app.use('/recipe',recipeRouter);
app.use('/search',searchRouter);

app.get('/',(req,res)=>{
    res.send("Back End Server");

})



