import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Icon } from '@mui/material';
import { Divider } from '@mui/material';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import StarIcon from '@mui/icons-material/Star';
import LabelIcon from '@mui/icons-material/Label';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

function Features(){

    return (
    <Box
        sx={{
          py: 10,
          px: 15,
          display: 'flex',
          flexDirection: 'column',
          height: '475px',
          backgroundColor: '#F5F5F5',
        }}
      >
        <Divider  
          sx={{
            color:'primary',
            width:'50vh',
            height: '4px',
            ml: 18,
          }} 
        />

        <Typography variant="h4" sx={{my:2, ml:18}}>
        Recipe Hunters Features
        </Typography>
        
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'row',
            height: '475px',
            backgroundColor: '#F5F5F5',
            alignItems: "center",
            justifyContent: "center",
         }} 
        > 
          <Box
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            width: '327px',
            height: '227px',
            backgroundColor: 'rgba(80, 182, 78, 0.8)',
            py: 2, 
            px: 3,
          }}
          >
            <Icon fontSize="large" color="black" sx={{my:1,}}>
              <QueryBuilderIcon />
            </Icon>
            <Typography variant="h6" sx={{my:1,}}>
            Quick prep
            </Typography>
            <Typography variant="body2">
            The Quick Prep feature in a recipe app streamlines the cooking process
            by providing an efficient way to chop, shred, slice, or mince ingredients for a recipe. 
            </Typography>
          </Box>
          <Box
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            width: '327px',
            height: '227px',
            backgroundColor: 'rgba(255, 88, 88, 0.8)',
            py: 2, 
            px: 3,
          }}
          >
            <Icon fontSize="large" color="black" sx={{my:1,}}>
              <StarIcon />
            </Icon>
            <Typography variant="h6" sx={{my:1,}}>
            Favorite recipe
            </Typography>
            <Typography variant="body2">
            Users can quickly find and access their favorite recipes, making meal planning and preparation easier. 
            With Recipe Hunters cooking is convenient and personalized. 
            </Typography>
          </Box>

          <Box
          sx={{
            mt: 3,
            display: 'flex',
            flexDirection: 'column',
            width: '327px',
            height: '227px',
            backgroundColor: 'rgba(255, 111, 89, 0.8)',
            py: 2, 
            px: 3,
          }}
          >
            <Icon fontSize="large" color="black" sx={{my:1,}}>
              <LabelIcon />
            </Icon>
            <Typography variant="h6" sx={{my:1,}}>
            Intelligent Tagging
            </Typography>
            <Typography variant="body2">
            Users can quickly find recipes that fit their needs, preferences, and restrictions.
            It uses advanced algorithms to accurately tag recipes.
            </Typography>
          </Box>

        </Box>
      
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: '#F5F5F5',
          }}
        >
        </Box>
    </Box>

    );


}


export default Features;