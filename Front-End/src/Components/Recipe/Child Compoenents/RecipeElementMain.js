import * as React from 'react';
import { borderRadius, Box } from "@mui/system";
import { Breadcrumbs } from "@mui/material";
import { Chip } from '@mui/material';
import { Typography } from "@mui/material";
import { Rating } from '@mui/material';
import { IconButton } from "@mui/material";
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import SaveIcon from '@mui/icons-material/Save';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState,useEffect } from 'react';
import { json } from 'react-router-dom';
import { createPdf } from '../exportPDF';

// Padding and margin in top and bottom needs to be improved. 
// Also the background color in some of the elements is not correct 

function RecipeElementMain(props){
    console.log(props.data);
    const [recipe ,setRecipe] = React.useState([])
    const [value, setValue] = React.useState(4);
    const [showPDF, setShowPDF] = useState(false);
     
    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
    }

    useEffect(() =>{
        
        setRecipe(props.data);
    },[]);

    function exportPDF() {
        setShowPDF(true);
        createPdf(props.data);
    }   

    // const itemData = [
    //     {
    //       img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    //       title: 'Breakfast',
    //     },
    //     {
    //       img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    //       title: 'Burger',
    //     },
    //     {
    //       img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //       title: 'Tomato basil',
    //     },
    //   ];

    const itemData = [
        {
          img: recipe.imageURLs,
          title: recipe.name,
          video: recipe.videoURL,
        }
    ];

    return(

        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                mx:3,
                backgroundColor: 'white',
            }}
        >
            <Breadcrumbs></Breadcrumbs>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                minWidth: 1144,
                my: 5, 
            }}
            >
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 572,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                    >
                        {/* <Chip label="Lunch" size='medium' />
                        <Chip label="Peruvian" size='medium' sx={{mx: 2}}/>
                        <Chip label="Fish" size='medium'/> */}
                        <Chip label={props.data.summary_tags.country.join(' , ')} size='medium' />
                        <Chip label={props.data.summary_tags.difficulty.join(' , ')} size='medium' />
                        <Chip label={props.data.summary_tags.meal.join(' , ')} size='medium' />
                        <Chip label={props.data.summary_tags.nutrition.join(' , ')} size='medium' />
                        <Chip label={props.data.summary_tags.time} size='medium' />
                    </Box>
                    
                    <Typography variant='h2' sx={{ my: 2,}}>{props.data.name}</Typography>
                    <Typography variant='subtitle1'>{props.data.shoppingList.ingredients.length} ingredients | {props.data.durationToCook} min </Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        sx={{ my: 2,}}
                    />
                    <Box sx={{ display: 'flex'}}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <IconButton>
                                <SaveIcon></SaveIcon>
                            </IconButton>
                            <IconButton>
                                <FavoriteIcon></FavoriteIcon>
                            </IconButton>
                            <IconButton onClick={exportPDF}>
                                <DownloadIcon></DownloadIcon>
                            </IconButton>
                        </ButtonGroup>
                    </Box>
                    {showPDF && (
                        <Box sx={{ width: '100%', height: 400 }}>
                            <iframe id="pdf" style={{ width: '100%', height: '100%' }}></iframe>
                        </Box>
                    )}

                    <Typography variant='body2' sx={{ my: 3,}}>
                    {recipe.briefdescription}
                    </Typography>
                    
                    <Typography variant='h5'>Ingredients</Typography>
                    <List>
                        
                    <ListItem>

                    

                    {/* <ListItemText
                        primary="1 kg white fish fillet Mahi-Mahi"
                    /> */}
                    
                    </ListItem>
                    {props.data.shoppingList.ingredients.map(
                            (ingredient)=> 
                            <ListItem>
                            <ListItemText
                            primary={ingredient}
                            />
                            </ListItem>
                    )}
                    </List>
                    
                </Container>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 572,
                    }}>
                    <Box
                        sx={{
                            backgroundColor: 'grey.600',
                            color: '#fff',
                            // backgroundSize: 'cover',
                            // backgroundRepeat: 'no-repeat',
                            // backgroundPosition: 'center',
                            // backgroundImage: `url(https://source.unsplash.com/random?ceviche)`,
                            height: 564,
                            width: 603,
                            borderRadius: 3,
                        }}
                    >
                        <iframe
                            title={props.data.name}
                            width="564"
                            height="603"
                            src={props.data.videoURL}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </Box>
                    
                    
                    <ImageList sx={{ width: 500, height: 164, borderRadius: 2, }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                    </ImageList>



                </Container>
            </Box>
            <Box sx={{ px: 12,}}>
            <Typography variant='h5'>Equipment</Typography>
                    <List>
                        {props.data.shoppingList.equipment.map(
                           item=>
                           <ListItem>

                            <ListItemText
                                primary={item}
                            />
                            </ListItem>  
                        )
                        
                        }
                    </List>
                <Typography variant='h5'>Preparation</Typography>
                <List>
                    {props.data.instructions.map(
                        step=>
                        <ListItem>
                        <ListItemText
                            primary={step}
                        />
                        </ListItem>,

                    )}    


                    {/* {generate(
                        <ListItem>
                        <ListItemText
                            primary="Wash and dry the fish. Cut the fish into cubes of approximately
                            2 cm. Remove any remaining skin, scales or spines. It is important that you only have cubes of lean meat similar in size. Put the fish to the side."
                        />
                        </ListItem>,
                    )} */}
                </List>
                <Box>
                    <Typography variant='h5'>Nutrition Facts</Typography>
                    <Box sx={{ display: 'flex', flexDirection:'row', my: 3,}}>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                width: 150, 
                                height: 80,
                                backgroundColor: 'rgba(80, 182, 78, 0.4)',
                                borderRadius: '4px',
                                alignItems: "center",
                                justifyContent: "center",
                                mx: 3,
                            }}
                        >
                            <Typography variant='h5'>{props.data.totalCarbs}</Typography>
                            <Typography variant='subtitle1'>total carbs</Typography>
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                width: 150, 
                                height: 80,
                                backgroundColor: 'rgba(80, 182, 78, 0.4)',
                                borderRadius: '4px',
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography variant='h5'>{props.data.totalCarbs-2}</Typography>
                            <Typography variant='subtitle1'>net carbs</Typography>
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                width: 150, 
                                height: 80,
                                backgroundColor: 'rgba(80, 182, 78, 0.4)',
                                borderRadius: '4px',
                                alignItems: "center",
                                justifyContent: "center",
                                mx:3,
                            }}
                        >
                            <Typography variant='h5'>{props.data.fat}</Typography>
                            <Typography variant='subtitle1'>fat</Typography>
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                width: 150, 
                                height: 80,
                                backgroundColor: 'rgba(80, 182, 78, 0.4)',
                                borderRadius: '4px',
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography variant='h5'>{props.data.protein}</Typography>
                            <Typography variant='subtitle1'>protein</Typography>
                        </Box>
                        <Box 
                            sx={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                width: 150, 
                                height: 80,
                                backgroundColor: 'rgba(80, 182, 78, 0.4)',
                                borderRadius: '4px',
                                alignItems: "center",
                                justifyContent: "center",
                                mx:3,
                            }}
                        >
                            <Typography variant='h5'>{props.data.calories}</Typography>
                            <Typography variant='subtitle1'>calories</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default RecipeElementMain;