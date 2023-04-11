import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
import LocalDrinkTwoToneIcon from '@mui/icons-material/LocalDrinkTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import ColorizeTwoToneIcon from '@mui/icons-material/ColorizeTwoTone';
import Divider from '@mui/material/Divider';

const theme = createTheme();

export default function Chilchahua() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/chil.jpg)`, }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="/chil.jpg" alt="" />}
            <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)',}} />
            <Grid container>
              <Grid item md={6}>
                <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
                <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
                  <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                  CHILCHAHUA
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                  TAGETES NELSONII GREENM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3,}, }}>
            <Paper sx={{ position: 'relative', backgroundColor: 'grey.200', p: 4, }}>
                <Typography variant="h6" gutterBottom color="inherit">
                 Auxiliar en el tratamiento de diarrea, parásitos, salmonella, fiebre tifoidea e infecciones gastrointestinales.
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tomar de 15 a 25 gotas con un poco de agua 3 veces al día, antes o después de los alimentos, de 5 a 7 días. Tomar máximo 7 días seguidos. Evitar consumo en menores de 2 años.Tomar de 15 a 25 gotas con un poco de agua 3 veces al día, antes o después de los alimentos, de 5 a 7 días. Tomar máximo 7 días seguidos. Evitar consumo en menores de 2 años."  />
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
                    <ListItemText primary="GOTERO 30 MILILITROS" secondary="$200"  />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ColorizeTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="GOTERO 125 MILILITROS" secondary="$600" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ColorizeTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="GOTERO 250 MILILITROS" secondary="$1000" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <LocalDrinkTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="BOTELLA 500 MILILITROS" secondary="$1600" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <LocalDrinkTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="BOTELLA 1 LITRO" secondary="$2500" />
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