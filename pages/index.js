import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
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
          <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 },}}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              MATLANI
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Catalogo de Productos
            </Typography>
            <Typography variant="subtitle1" gutterBottom="true">
              Somos un colectivo dedicado al rescate y prevalencia de los conocimientos tradicionales de las plantas medicinales y sus usos para la nutricion y salud
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    <ImageList>
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Grid container>
        <Grid item md={12}>
          <Paper
            sx={{
              position: 'relative',
              backgroundColor: 'rgb(59, 34, 11)',
              color: '#fff',
              mb: 4,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
          <Box sx={{ position: 'relative', p: { xs: 2, md: 4 }, pr: { md: 0 },}}>
            <Typography variant="subtitle1" gutterBottom="true">
              Trabajamos en cooperacion principalmente con distintas comunidades indigenas Tzeltales de Chiapas, asegurandonos de que las plantas sean cultivadas y cocechadas en armonia y respeto con su entorno
            </Typography>
            <Typography variant="subtitle1">
              Matlani del Nahuatl, "ayuda mutua", es la experiencia que queremos compartir desde las comunidades productoras hasta el consumidor final
            </Typography>
          </Box>
          </Paper>
        </Grid>
      </Grid>
  </Grid>
  );
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'HONGO REISHI',
    author: 'TINTURA - Ganoderma Lucidum',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'CHILCHAHUA',
    author: 'TINTURA - Tagetes Nelsonii Greenm',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'MACUNA PRURIENS',
    author: 'Dopamina y Proteina vegetal',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'CAFE ALTERNTIVO DE MACUNA PRURIENS',
    author: 'Cafe con MACUNA PRURIENS',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'CACAO SECADO AL SOL',
    author: 'Theobroma Cacao',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'CARDOMOMO',
    author: 'Elattaria Cardomumum',
    rows: 2,
    cols: 2,
    featured: true,
  },
];

export default Main;