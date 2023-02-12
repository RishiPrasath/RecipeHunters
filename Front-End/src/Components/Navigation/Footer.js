  import * as React from 'react';
  import CssBaseline from '@mui/material/CssBaseline';
  import Box from '@mui/material/Box';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import Link from '@mui/material/Link';
  import logo from './logoRecipeHunters.png';
  import IconButton from '@mui/material/IconButton';
  import Grid from '@mui/material/Grid';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" ml={20}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Recipe Hunters
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  function Footer() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '15vh',
          marginTop: '1em',
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'transparent',
          }}
        >
          <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid xs>
              <IconButton edge="start" color="inherit" aria-label="menu">
                        <img src={logo} alt="Logo" height="80" />
              </IconButton>
            </Grid>
            <Grid xs={6}>
              <Typography variant="body1">
                Elevate your cooking game with every recipe
              </Typography>

            </Grid>
            <Grid xs>
              <Grid container spacing={3}>
                <Grid xs>
                  <FacebookIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mt:8 }} />
                </Grid>
                <Grid xs>
                  <TwitterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mt:8 }} />
                </Grid>
                <Grid xs>
                  <LinkedInIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mt:8 }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Copyright/>
          </Container>
        </Box>
      </Box>
    );
  }
  
  export default Footer;