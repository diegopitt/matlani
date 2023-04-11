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
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import ColorizeTwoToneIcon from '@mui/icons-material/ColorizeTwoTone';
import Divider from '@mui/material/Divider';

const theme = createTheme();

export default function Macuna() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/macuna.jpg)`, }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="/macuna.jpg" alt="" />}
            <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)',}} />
            <Grid container>
              <Grid item md={6}>
                <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
                <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
                  <Typography component="h1" variant="h4" color="inherit" gutterBottom>
                    MACUNA PRURIENS
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Dopamina y proteína vegetal
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3,}, }}>
              <Paper sx={{ position: 'relative', backgroundColor: 'grey.200', p: 4, }}>
                <Typography variant="h6" gutterBottom color="inherit">
                Esta maravillosa planta, también conocida como <b>frijol terciopelo</b>, es un excelente suplemento alimenticio con un perfil químico muy extendido llevándolo a tener acciones profundas en el sistema nervioso humano.
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contiene entre 3 y 6% de L-DOPA, precursor de la dopamina, aprox. 30% de proteína, serotonina conocida como hormona de la felicidad, y más."  />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Auxiliar en el tratamiento de: Parkinson, por su contenido de L-DOPA"  />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Diabetes (fuerte actividad hipoglucemiante)"  />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Alzheimer y fertilidad."  />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contiene propiedades afrodisíacas." />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Excelente suplemento alimenticio para niños y deportistas, estimula la glándula pituitaria, encargada del crecimiento y estimulación de otras glándulas." />
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
                    <ListItemText primary="200 GRAMOS" secondary="$200"  />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ColorizeTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary="$400" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ColorizeTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="1 KILO" secondary="$700" />
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