import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

function FeaturedRecipes(){
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
                        Easy Tuna Patties
                        </Typography>
                        <Typography variant="body2" sx={{my:1,py:2}}>
                        These tuna patties, seasoned with Italian breadcrumbs and Parmesan, are tender 
                        inside and crisp outside. They make a great appetizer or hot sandwich.
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
                        backgroundImage: `url(https://source.unsplash.com/random?easy+food)`,
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
                        backgroundImage: `url(https://source.unsplash.com/random?salad)`,
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
                        Garlic Mashed Cauliflower
                        </Typography>
                        <Typography variant="body2" sx={{my:1,py:2}}>
                        Creamy cauliflower &#34;mashed potatoes&#34; flavored with garlic and Parmesan cheese are a guilt-free and delicious 
                        option for anyone on a low-carb diet.
                        </Typography>
                        <Button variant="contained">Let's eat</Button>
                    </Container>
                </Container>
            </Box>
        </Box>
    );
}

export default FeaturedRecipes;