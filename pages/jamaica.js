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
import Divider from '@mui/material/Divider';
import ColorizeTwoToneIcon from '@mui/icons-material/ColorizeTwoTone';

const theme = createTheme();

export default function Jamaica() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg"  sx={{position: 'relative'}}>
        <main>
          <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/jamaica.jpg)`, }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="/jamaica.jpg" alt="" />}
            <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)',}} />
            <Grid container>
              <Grid item md={6}>
                <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
                <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                  JAMAICA
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                  Hibiscus Sabdariffa
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3,}, }}>
              <Paper sx={{ position: 'relative', backgroundColor: 'grey.200', p: 4, }}>
                <Typography variant="h6" gutterBottom color="inherit">
                Extraordinario para <b>normalizar la presión</b> alta (hipertensión), contiene antioxidantes, auxiliar en la reducción de niveles de colesterol y para limpiar sangre y riñones
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tomar de 15 a 25 gotas con un poco de agua 3 veces al día, antes o después de los alimentos, durante 7 días. Tomar máximo 15 días y descansar 7 para volver a consumir."  />
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
                      <ColorizeTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="GOTERO 30 MILILITROS" secondary="$100"  />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </Container>
      
    </ThemeProvider>
  );
}