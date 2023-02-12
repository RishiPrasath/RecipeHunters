import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

// The card component needs to pass props and show data from the Database (Title, Description, Image)
function RecipeElement(){
    return (
        <Card 
            sx={{ maxWidth: 345, borderRadius:5, mx: 2, backgroundColor: '#F1F1F1',
            }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
              image="https://source.unsplash.com/random?food"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Chicken Cordon Bleu
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Chicken breasts are rolled up around ham and Swiss cheese, topped with seasoned bread crumbs, and baked.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ justifyContent:'right',
        }}
          >
            <Button size="small" variant="outlined" startIcon={<AddIcon />} >
              View Recipe
            </Button>
          </CardActions>
        </Card>
      );
}

export default RecipeElement;