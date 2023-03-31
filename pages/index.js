import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Main(props) {
  const { } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: '#756858',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(/cacao.png)`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src='/cacao.png' alt='Matlani' />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.4)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              MATLANI
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Catalogo de Productos
            </Typography>
            <Typography variant="subtitle1" gutterBottom="true">
              Somos un colectivo dedicado al rescate y prevalencia de los conocimientos tradicionales de las plantas medicinales y sus usos para la nutricion y salud
            </Typography>
            <Typography variant="subtitle1" gutterBottom="true">
              Trabajamos en cooperacion principalmente con distintas comunidades indigenas Tzeltales de Chiapas, asegurandonos de que las plantas sean cultivadas y cocechadas en armonia y respeto con su entorno
            </Typography>
            <Typography variant="subtitle1">
              Matlani del Nahuatl, "ayuda mutua", es la experiencia que queremos compartir desde las comunidades productoras hasta el consumidor final
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
}

Main.propTypes = {};

export default Main;