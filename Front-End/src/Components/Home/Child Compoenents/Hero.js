import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import hero from './hero-background.jpg';

function Hero(){
    return (
        <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.600',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${hero})`,
          minHeight: 425,  
        }}
        >
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src={hero} alt="Hero Recipe Hunters" />}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
              minHeight: 423,
            }}
          />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                  textAlign: 'center'
                }}
              >
                <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                Elevate your cooking game with every recipe
                </Typography>
                <Typography variant="h6" color="inherit" paragraph>
                The ultimate tool for food enthusiasts and home chefs alike. With a wide variety of recipes
                to choose from, you'll never run out of inspiration for your next meal.
                </Typography>
                <Button color="primary" variant="contained" href='/search' sx={{ mx: 1,}}>Search Recipes</Button>
                <Button color="secondary" variant="contained">Find the perfect meal</Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>        
      );
}

export default Hero;

