import * as React from 'react';
import Drawer from '../src/Drawer';
import Fav from '../src/Fav';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router'
import Image from 'next/image';
import flower from "../public/flowergreen.svg";
import { useMediaQuery } from '@mui/material';

function Main(props) {
  const { } = props;
  const matches = useMediaQuery('(min-width:796px)');
  const router = useRouter();
  return (
    <div>
      <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
        <Paper sx={{ position: 'relative', background: 'url(/banner.jpg)', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
          {/* Increase the priority of the hero background image */}
          {<img style={{ display: 'none' }} src='/banner.jpg' alt='Matlani' />}
          <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, }} />
          <Grid container>
            <Grid item md={12}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item sm={6} sx={{ flexGrow: 1 }}>
                  <div style={{ paddingTop: "26px", paddingLeft: "22px", textAlign: "left", width: '100%' }}>
                    <Image sx={{ position: 'relative' }} width={52} height={52} priority src={flower} alt="Matlani" />
                  </div>
                </Grid>
                <Grid item md={6} sx={{ flexGrow: 1 }}>
                  <Drawer />
                </Grid>
              </Grid>
              <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
                <Typography component="span" variant="h3" color="gris">
                  MATLANI
                </Typography>
                <Typography sx={{ fontWeight: 500, }} variant="h4" paragraph color="gris">
                  Herbolaria, Salud y Nutricion
                </Typography>
                <Typography variant="subtitle1" color="gris">
                  Somos un colectivo dedicado al rescate y prevalencia de los conocimientos tradicionales de las plantas medicinales y sus usos para la nutricion y salud
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4, }}>
            <Typography align="center" variant="body2" color="#255527" sx={{ pl: { xs: 1, md: 2 }, pt: 2, pr: { xs: 1, md: 2 } }}>
              Extractos Herbales y Tinturas
            </Typography>
            <ImageList variant="standard" cols={matches ? 3 : 2} gap={26}>
              {tinturas.map((item) => (
                <ImageListItem onClick={() => { router.push(item.link) }} key={item.img} sx={{ m: { xs: 0, md: 2 }, border: "2px solid #255527" }}>
                  <img style={{ minHeight: 240, maxHeight: 320 }} src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  <ImageListItemBar sx={{"& .MuiImageListItemBar-subtitle":(theme) => theme.typography.cardtitle, background: 'rgba(23,53,24,0.86)' }} title={item.title} subtitle={item.Species} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4, }}>
            <Typography align="center" variant="body2" color="primary" paragraph sx={{ pl: { xs: 1, md: 2 }, pt: 4, pr: { xs: 1, md: 2 } }}>
              Superalimentos Organicos
            </Typography>
            <ImageList cols={matches ? 3 : 2} variant="standard" gap={26}>
              {suplementos.map((item) => (
                <ImageListItem onClick={() => { router.push(item.link) }} key={item.img} sx={{ m: { xs: 0, md: 2 }, border: "2px solid #255527", }}>
                  <img style={{ minHeight: 240, maxHeight: 320 }} src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  <ImageListItemBar sx={{"& .MuiImageListItemBar-subtitle":(theme) => theme.typography.cardtitle, background: 'rgba(23,53,24,0.86)' }} title={item.title} subtitle={item.Species} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={10} sx={{ pb: 4, }}>
            <Typography align="center" variant="body2" color="#255527" paragraph sx={{ pl: { xs: 1, md: 2 }, pt: 4, pr: { xs: 1, md: 2 }, }}>
              Compuestos Herbales
            </Typography>
            <Typography align="center" variant="body3" color="#255527" paragraph sx={{ mt: -1, pl: { xs: 2, md: 2 }, pt: 0, pr: { xs: 1, md: 2 } }}>
              Mezclas de extractos para potencializar y especializar determinadas propiedades medicinales
            </Typography>
            <ImageList cols={matches ? 3 : 2} variant="standard" gap={26}>
                {compuestos.map((item) => (
                  <ImageListItem onClick={() => { router.push(item.link) }} key={item.img} sx={{ m: { xs: 0, md: 2 }, border: "2px solid #255527", }}>
                    <img style={{ minHeight: 240, maxHeight: 320 }} src={`${item.img}?w=248&fit=crop&auto=format`} srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                    <ImageListItemBar sx={{ background: 'rgba(23,53,24,0.86)' }} title={item.title} subtitle={item.Species} />
                  </ImageListItem>
                ))}
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={10} sm={6} md={4} sx={{ pb: 4, }} direction="row" justifyContent="center" alignItems="center">
            <Typography align="center" variant="body2" color="#255527" paragraph sx={{ pl: { xs: 1, md: 2 }, pt: 2, pr: { xs: 1, md: 2 } }}>
              Mazapan Artezanal
            </Typography>
            <ImageList variant="standard" cols={1} gap={0}>
              <ImageListItem onClick={() => { router.push(`/mazapan`) }} key={`mazapan`} sx={{ m: { xs: 0, md: 2, border: "2px solid #255527" }, }}>
                <img style={{ minHeight: 240, maxHeight: 320 }} src={`/maza.jpg?w=248&fit=crop&auto=format`} srcSet={`/maza.jpg?w=248&fit=crop&auto=format&dpr=2 2x`} alt={`mazapan`} loading="lazy" />
                <ImageListItemBar sx={{ background: 'rgba(23,53,24,0.86)' }} title={`MAZAPAN`} subtitle={`Mazapan Artezanal`} actionIcon={<IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)', }} aria-label={`mazapan`}></IconButton>} />
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ mb: 0, mt: 3, }}>
          <Grid item xs={12} sm={10}>
            <Paper sx={{ position: 'relative', backgroundColor: 'rgb(59, 34, 11)', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
              <Box sx={{ position: 'relative', p: { xs: 2, md: 4 }, }}>
                <Typography align='justify' variant="subtitle1" gutterBottom>
                  Trabajamos en cooperacion principalmente con distintas comunidades indigenas <b>Tzeltales</b> de Chiapas, asegurandonos de que las plantas sean cultivadas y cocechadas en <b>armonia y respeto con su entorno</b>
                </Typography>
                <Typography align='justify' variant="subtitle1">
                  Matlani del Nahuatl, <b>ayuda mutua</b>, es la experiencia que queremos compartir desde las <b>comunidades productoras</b> hasta el consumidor final
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} justifyContent="flex-start" alignItems="flex-start">
            <Box sx={{ position: 'relative', marginLeft: 1, p: { xs: 0, md: 1 }, }}>
              <Image style={{ display: 'inline-block', marginBottom: 38 }} src="/leaf2.png" width={102} height={270} priority={true} quality={100} alt="Planta" />
                <div style={{ display: 'inline-block', marginLeft: -8 }}>
                <Image src="/leaf.png" width={80} height={87} priority={true} quality={100} alt="Planta" />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Fav />
    </div>
  );
}
const tinturas = [
  { link: '/tcardomomo', img: '/cardo.jpg', title: 'CARDOMOMO', Species: 'Elattaria Cardomumum' },
  { link: '/dienteleon', img: '/diente.jpg', title: 'DIENTE DE LEON', Species: 'Taraxacum Officinale'},
  { link: '/damiana', img: '/damiana.jpg', title: 'DAMIANA', Species: 'Turnera Diffusa'},
  { link: '/coladecaballo', img: '/cola.jpg', title: 'COLA DE CABALLO', Species: 'Equisetum Arvense'},
  { link: '/chilcuague', img: '/chilcuague.jpg', title: 'CHILCUAGUE', Species: 'Heliopsis Longipes'},
  { link: '/canela', img: '/canela.jpg', title: 'CANELA', Species: 'Cinnamumum Ceylanicum' },
  { link: '/albahaca', img: '/albahaca.jpg', title: 'ALBAHACA', Species: 'Ocimun Basilicum' },
  { link: '/tcacao', img: '/cacao.jpg', title: 'CACAO', Species: 'Theobroma Cacao', },
  { link: '/jamaica', img: '/jamaica.jpg', title: 'JAMAICA', Species: 'Hibiscus Sabdariffa' },
  { link: '/cuachalalate', img: '/cuacha.jpg', title: 'CUACHALALATE', Species: 'Amphipterygium Adstringens'},
  { link: '/reishi', img: '/reishi2.jpg', title: 'HONGO REISHI', Species: 'Ganoderma Lucidum' },
  { link: '/gengibre', img: '/gengi.jpg', title: 'GENGIBRE', Species: 'Zingiber Officinale'},
  { link: '/chilchahua', img: '/chil.jpg', title: 'CHILCHAHUA', Species: 'Tagetes Nelsonii Greenm'},
  { link: '/cafeverde', img: '/arabica.jpg', title: 'CAFE VERDE', Species: 'Coffea Arabica'},
  { link: '/hinojo', img: '/hinojo.jpg', title: 'HINOJO', Species: 'Foeniculum Vulgare', },
  { link: '/cempasuchil', img: '/tage2.jpg', title: 'CEMPASUCHIL', Species: 'Tagetes Erecta L' }
];
const suplementos = [
  { link: '/macuna', img: '/macuna.jpg', title: 'MACUNA PRURIENS', Species: 'Mucuna Pruriens', },
  { link: '/cafe', img: '/coma.jpg', title: 'CAFE ALTERNTIVO DE MACUNA PRURIENS', Species: 'Mucuna Pruriens' },
  { link: '/cacao', img: '/cacao.jpg', title: 'CACAO SECADO AL SOL', Species: 'Theobroma Cacao' },
  { link: '/cardomomo', img: '/cardo.jpg', title: 'CARDOMOMO', Species: 'Elattaria Cardomumum' },
];
const compuestos = [
  { link: '/viasurinarias', img: '/extractos.jpg', title: 'COMPUESTO PARA VIAS URINARIAS', Species: 'Riñones, Vejiga, Prostata y Uretra'},
  { link: '/imsomnio', img: '/extractos.jpg', title: 'COMPUESTO IMSOMNIO', Species: 'Reishi - Yauhtli'},
  { link: '/hepatico', img: '/extractos.jpg', title: 'COMPUSTO HEPATICO', Species: 'ReishI - Cardo Mariano'},
];

export default Main;