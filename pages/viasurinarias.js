import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useRouter } from 'next/router';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import IconButton from '@mui/material/IconButton';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import Divider from '@mui/material/Divider';
import GrassTwoToneIcon from '@mui/icons-material/GrassTwoTone';
import ColorizeTwoToneIcon from '@mui/icons-material/ColorizeTwoTone';

export default function Vias() {
  const router = useRouter();
  return (
    <div>
      <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/extractos.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/extractos.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.45)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m:2 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" sx={{ pt: 4 }}>
                COMPUESTO PARA VIAS URINARIAS
              </Typography>
              <Typography variant="detailstitle">
                Riñones, Vejiga, Prostata y Uretra
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', p: 4, }}>
                <Typography variant="h6" gutterBottom color="inherit">
                  Compuesto para vías urinarias Riñones, vejiga, próstata y uretra. Efectivo contra infecciones en vías urinarias, retención de líquidos e incontinencia. Auxiliar como desintoxicante hepático y renal, ayuda a mitigar cálculos biliares y renales.
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Tomar de 15 a 25 gotas con un poco de agua 3 veces al día, antes o después de los alimentos, durante 7 días. Tomar máximo 7 días y descansar otros 7 para volver a consumir. " />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, mb: 0, backgroundColor: '#f7dfca' }}>
                <Typography variant="h6" gutterBottom>
                  CONTIENE
                </Typography>
                <Divider />
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Hoja de Níspero" secondary="Eriobotrya Japonica" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Doradilla" secondary="Sellaginela Lepidophilia" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Té limón" secondary="Cymbopogon Citratus" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Pelo de maíz" secondary="Zea Mays" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Hierba Santa" secondary="Piper Auritum" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Cola de Caballo" secondary="Equisetum Arvense" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="Hinojo" secondary="Foeniculum Vulgare" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, mb: 4, backgroundColor: '#f7dfca' }}>
                <Typography variant="h6" gutterBottom>
                  PRESENTACION
                </Typography>
                <Divider />
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <ColorizeTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="GOTERO 30 MILILITROS" secondary={<Typography variant="presentacionsec" color="primary">$150</Typography>} />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </main>
      </Container>

    </div>
  );
}