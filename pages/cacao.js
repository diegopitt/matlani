import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import IconButton from '@mui/material/IconButton';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import Fav from '../src/Fav';
import Divider from '@mui/material/Divider';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';

const theme = createTheme();

export default function Cacao() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg"  sx={{position: 'relative'}}>
        <main>
          <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/cacao.png)`, }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="/cacao.png" alt="" />}
            <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)',}} />
            <Grid container>
              <Grid item md={6}>
                <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
                <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
                  <Typography component="h1" variant="h5" color="inherit" gutterBottom>
                    CACAO SECADO AL SOL
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                  THEOBROMA CACAO
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3,}, }}>
              <Paper sx={{ position: 'relative', backgroundColor: 'grey.200', p: 4, }}>
                <Typography variant="h6" gutterBottom color="inherit">
                Utilizar de 7 a 13 semillas al día ya sea en licuado o ingeridas a lo largo del día.
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Auxiliar en el tratamiento de enfermedades cardiovasculares, cerebrovasculares y visuales."  />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contiene propiedades antivirales, antitumorales e incluso más antioxidantes que el café verde."  />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Excelente regulador hormonal y digestivo. Utilizar de 7 a 13 semillas al día ya sea en licuado o ingeridas a lo largo del día." />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, mb: 4, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                  PRESENTACION
                </Typography>
                <Divider />
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="150 GRAMOS" secondary="$100"  />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary="$300" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="1 KILO" secondary="$400" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </main>
        <Fav />
      </Container>
      
    </ThemeProvider>
  );
}