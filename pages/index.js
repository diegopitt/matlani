import * as React from 'react';
import Drawer from '../src/Drawer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import { useRouter } from 'next/router'

function Main(props) {
  const { } = props;
  const router = useRouter();
  return (
    <div>
      <Grid item xs={12} md={8} sx={{'& .markdown': { py: 3, }, }}>
        <Paper sx={{ position: 'relative', backgroundColor: '#756858', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/cacao.png)`, }}>
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src='/cacao.png' alt='Matlani' />}
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.4)', }} />
          <Grid container>
            <Grid item md={12}>
              <Drawer />
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 },}}>
                <Typography component="span" variant="h3" color="inherit">
                  MATLANI
                </Typography>
                <Typography variant="h4" color="inherit" paragraph>
                  Herbolaria, salud y nutricion
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Somos un colectivo dedicado al rescate y prevalencia de los conocimientos tradicionales de las plantas medicinales y sus usos para la nutricion y salud
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4,}}>
            <Typography variant="h4" color="#255527" paragraph sx={{ pl: 2, pt: 2}}>
              Extractos Herbales y Tinturas
            </Typography>
            <ImageList>
              <ImageListItem key="Subheader" cols={2}></ImageListItem>
              {tinturas.map((item) => (
                <ImageListItem onClick={() => { router.replace(item.link) }} key={item.img} sx={{ m: { xs: 0, md: 2 },}}>
                  <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  <ImageListItemBar title={item.title} subtitle={item.author} actionIcon={<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)',  }} aria-label={`info about ${item.title}`}></IconButton>} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4,}}>
            <Typography variant="h4" color="#255527" paragraph sx={{ pl: 2, pt: 4,}}>
              Superalimentos Organicos
            </Typography>
            <ImageList>
              <ImageListItem key="Subheader" cols={2}></ImageListItem>
              {suplementos.map((item) => (
                <ImageListItem onClick={() => { router.replace(item.link) }} key={item.img} sx={{ m: { xs: 0, md: 2 },}}>
                  <img src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  <ImageListItemBar title={item.title} subtitle={item.author} actionIcon={<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)',  }} aria-label={`info about ${item.title}`}></IconButton>} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4,}}>
            <Typography variant="h4" color="#255527" paragraph sx={{ pl: 2, pt: 2}}>
              Mazapan Artezanal
            </Typography>
            <ImageList>
              <ImageListItem key="Subheader" cols={2}></ImageListItem>
                <ImageListItem onClick={() => { router.replace(`/mazapan`) }} key={`mazapan`} sx={{ m: { xs: 0, md: 2 },}}>
                  <img src={`/maza.jpg?w=248&fit=crop&auto=format`} srcSet={`/maza.jpg?w=248&fit=crop&auto=format&dpr=2 2x`} alt={`mazapan`} loading="lazy" />
                  <ImageListItemBar title={`MAZAPAN`} subtitle={`Mazapan Artezanal`} actionIcon={<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)',  }} aria-label={`mazapan`}></IconButton>} />
                </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10}>
            <Paper sx={{ position: 'relative', backgroundColor: 'rgb(59, 34, 11)', color: '#fff', mb: 4, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
              <Box sx={{ position: 'relative', p: { xs: 2, md: 4 },}}>
                <Typography align='justify' variant="subtitle1" gutterBottom>
                  Trabajamos en cooperacion principalmente con distintas comunidades indigenas Tzeltales de Chiapas, asegurandonos de que las plantas sean cultivadas y cocechadas en armonia y respeto con su entorno
                </Typography>
                <Typography align='justify' variant="subtitle1">
                  Matlani del Nahuatl, "ayuda mutua", es la experiencia que queremos compartir desde las comunidades productoras hasta el consumidor final
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} justifyContent="flex-start" alignItems="flex-start">
            <Box sx={{ }}>
            </Box>
          </Grid>
          <Grid container md={6} justifyContent="flex-end" alignItems="flex-end">
            <Fab style={{boxShadow: "none"}} sx={{ bgcolor: '#25D366', '&:hover': { backgroundColor: '#25D366', opacity: [0.8, 0.7, 0.6], }, color: '#fff', margin: '24px', padding: '6px', border: '2px solid #25D366' }} aria-label="Whatsapp">
              <WhatsAppIcon sx={{ fontSize: 40 }} />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </div> 
  );
}
const tinturas = [
  {link:'/jamaica', img: '/jamaica.jpg', title: 'JAMAICA', author: 'Hibiscus Sabdariffa', rows: 2, cols: 2, featured: true,},
  {link:'/reishi', img: '/reishi.jpg', title: 'HONGO REISHI', author: 'Ganoderma Lucidum', rows: 2, cols: 2, featured: true,},
  {link:'/gengibre', img: '/gengi.jpg', title: 'GENGIBRE', author: 'Zingiber Officinale', },
  {link:'/chilchahua', img: '/chil.jpg', title: 'CHILCHAHUA', author: 'Tagetes Nelsonii Greenm', },
  {link:'/cafeverde', img: '/arabica.jpg', title: 'CAFE VERDE', author: 'Coffea Arabica',  },
  {link:'/hinojo', img: '/hinojo.jpg', title: 'Hinojo', author: 'Foeniculum Vulgare',  },
  {link:'/cempasuchil', img: '/tage.jpg', title: 'CEMPASHCHIL', author: 'TAGETES ERECTA L', rows: 2, cols: 2, featured: true, }
];
const suplementos = [
  {link:'/macuna', img: '/macuna.jpg', title: 'MACUNA PRURIENS', author: 'Dopamina y Proteina vegetal',  },
  {link:'/cafe', img: '/coma.jpg', title: 'CAFE ALTERNTIVO DE MACUNA PRURIENS', author: 'Cafe de MACUNA PRURIENS', cols: 2,},
  {link:'/cacao', img: '/cacao2.webp', title: 'CACAO SECADO AL SOL', author: 'Theobroma Cacao', cols: 2,},
  {link:'/cardomomo', img: '/cardo.webp', title: 'CARDOMOMO', author: 'Elattaria Cardomumum', rows: 2, cols: 2, featured: true, },

];

export default Main;