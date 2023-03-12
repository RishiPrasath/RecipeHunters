import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
// The card component needs to pass props and show data from the Database (Title, Description, Image)

const styles = {
  paper: {
    height: '100%'
  }
};
function RecipeElement(props){
    return (
        <Card style={styles.paper}
            sx={{  borderRadius:5, backgroundColor: '#F1F1F1' 
            }}
        >
          <CardActionArea>
            <CardMedia
              sx={{ height: 220 }}
              component="img"
              image={props.imageURLs}
              alt={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {/* Chicken Cordon Bleu */}
              {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {/* Chicken breasts are rolled up around ham and Swiss cheese, topped with seasoned bread crumbs, and baked. */}
              {props.briefdescription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{ justifyContent:'right',
        }}
          >
            <Link to={{
              pathname:"/recipe/"+props.name,
              state: {stateParam:true}
            }}>
            <Button  
            size="small" 
            variant="outlined" 
            // href='/recipe'   
            startIcon={<AddIcon />} >
              View Recipe
            </Button>
            </Link>
          </CardActions>
        </Card>
      );
}

export default RecipeElement;