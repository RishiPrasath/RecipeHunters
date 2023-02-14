import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

import axios from 'axios' 
function FeaturedRecipes(){
    
    var [featuredrecipes ,setfeaturedrecipes] = useState([]);

    useEffect(() =>{
        

        axios.get("http://localhost:5100/home/FeaturedRecipes")
        .then(res=>{
            setfeaturedrecipes(res.data)
        }).catch(err=>{
            console.log(err);
        })

    },[]);

    var RecipeOne = featuredrecipes[0];
    var RecipeTwo = featuredrecipes[1];
    console.log(RecipeOne);
    console.log(RecipeTwo);

    return(

        <Box
            sx={{
            py: 1,
            px: 15,
            display: 'flex',
            flexDirection: 'column',
            height: '950px',
            backgroundColor: '#CADED6',
            }}
            >
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '475px',
                    backgroundColor: '#CADED6',
                    alignItems: "center",
                    justifyContent: "center",
                }} 
            >
                <Container>
                    <Container sx={{width: 350,}}>
                        <Typography variant="caption" sx={{my:1,}}>
                            Easy
                        </Typography>
                        <Typography variant="h5" sx={{my:1,}}>
                        {RecipeOne && RecipeOne.name}
                        </Typography>
                        <Typography variant="body2" sx={{my:1,py:2}}>
                        {RecipeOne && RecipeOne.briefdescription}
                        </Typography>
                        <Button variant="contained">Let's cook</Button>
                    </Container>
                </Container>

                <Container
                    sx={{
                        height: 434,
                        width: 773,
                    }}
                >
                    <Box
                    sx={{
                        backgroundColor: 'grey.600',
                        color: '#fff',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${RecipeOne && RecipeOne.briefdescription})`,
                        height: 434,
                        width: 621,
                        borderRadius: 3,
                    }}
                    >
                    </Box> 
                </Container>
            </Box>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '475px',
                    backgroundColor: '#CADED6',
                    alignItems: "center",
                    justifyContent: "center",
                }} 
            >
                <Container
                    sx={{
                        height: 434,
                        width: 773,
                    }}
                >
                    <Box
                    sx={{
                        backgroundColor: 'grey.600',
                        color: '#fff',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${RecipeTwo && RecipeTwo.briefdescription})`,
                        height: 434,
                        width: 621,
                        borderRadius: 3,
                    }}
                    >
                    </Box> 
                </Container>
                <Container>
                    <Container sx={{width: 350,}}>
                        <Typography variant="caption" sx={{my:1,}}>
                            Low Fat
                        </Typography>
                        <Typography variant="h5" sx={{my:1,}}>
                        {RecipeTwo && RecipeTwo.name}
                        </Typography>
                        <Typography variant="body2" sx={{my:1,py:2}}>
                        {RecipeTwo && RecipeTwo.briefdescription}
                        </Typography>
                        <Button variant="contained">Let's eat</Button>
                    </Container>
                </Container>
            </Box>
        </Box>
    );
}

export default FeaturedRecipes;