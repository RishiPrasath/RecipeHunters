import * as React from 'react';
import { borderRadius, Box } from "@mui/system";
import { Breadcrumbs } from "@mui/material";
import { Chip } from '@mui/material';
import { Typography } from "@mui/material";
import { Rating } from '@mui/material';
import Icon from "@mui/material";
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



function RecipeElementMain(){
    
    const [value, setValue] = React.useState(4);
    function generate(element) {
        return [0, 1, 2].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
    }

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
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
                        <Chip label="Lunch" size='medium' />
                        <Chip label="Peruvian" size='medium' sx={{mx: 2}}/>
                        <Chip label="Fish" size='medium'/>

                    </Box>
                    
                    <Typography variant='h2' sx={{ my: 2,}}>Ceviche</Typography>
                    <Typography variant='subtitle1'>10 ingredients | 30 min </Typography>
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
                            <IconButton>
                                <DownloadIcon></DownloadIcon>
                            </IconButton>
                        </ButtonGroup>
                    </Box>
                    
                    <Typography variant='body2' sx={{ my: 3,}}>
                    Ceviche is a Peruvian dish typically made from fresh raw fish cured in fresh citrus 
                    juices, most commonly lime or lemon. It is also spiced with ají, chili peppers or other 
                    seasonings and julienned red onions, salt, and cilantro are also added.
                    </Typography>
                    
                    <Typography variant='h5'>Ingredients</Typography>
                    <List>
                        {generate(
                            <ListItem>

                            <ListItemText
                                primary="1 kg white fish fillet Mahi-Mahi"
                            />
                            </ListItem>,
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
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(https://source.unsplash.com/random?ceviche)`,
                            height: 564,
                            width: 603,
                            borderRadius: 3,
                        }}
                    >
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
                        {generate(
                            <ListItem>

                            <ListItemText
                                primary="Lemon squeezer"
                            />
                            </ListItem>,
                        )}
                    </List>
                <Typography variant='h5'>Preparation</Typography>
                <List>
                    {generate(
                        <ListItem>
                        <ListItemText
                            primary="Wash and dry the fish. Cut the fish into cubes of approximately
                            2 cm. Remove any remaining skin, scales or spines. It is important that you only have cubes of lean meat similar in size. Put the fish to the side."
                        />
                        </ListItem>,
                    )}
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
                            <Typography variant='h5'>9g</Typography>
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
                            <Typography variant='h5'>7.7g</Typography>
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
                            <Typography variant='h5'>2.9g</Typography>
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
                            <Typography variant='h5'>21.9g</Typography>
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
                            <Typography variant='h5'>170</Typography>
                            <Typography variant='subtitle1'>calories</Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>

            
        </Box>
    );

}


export default RecipeElementMain;