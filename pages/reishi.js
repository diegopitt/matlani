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
import LocalDrinkTwoToneIcon from '@mui/icons-material/LocalDrinkTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import ColorizeTwoToneIcon from '@mui/icons-material/ColorizeTwoTone';
import Divider from '@mui/material/Divider';

const theme = createTheme();

export default function Reishi() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/reishi2.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/reishi2.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                HONGO REISHI
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                GANODERMA LUCIDUM
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Paper sx={{ position: 'relative', backgroundColor: 'grey.200', p: 4, }}>
                <Typography variant="h6" gutterBottom color="inherit">
                  Este increíble hongo conocido como <b>Hongo de la Inmortalidad</b> o el <b>Hongo Rey</b>, se gana su nombre gracias a las siguientes y más cualidades: </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Auxiliar en el tratamiento de Ansiedad, insomnio, estrés, depresión, casos de daño hepático, alcoholismo, cirrosis, hepatitis." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Estimula sistema inmunológico y cardiovascular. " />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Regula presión arterial, colesterol, triglicéridos y glucosa en la sangre. " />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contiene propiedades antivirales, desinflamatorias y antioxidantes." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Excelente suplemento alimenticio, contiene todos los aminoácidos esenciales, vitaminas y minerales." />
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
                    <ListItemText primary="GOTERO 30 MILILITROS" secondary="$200" />
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