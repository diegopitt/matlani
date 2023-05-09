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

export default function Hepatico() {
  const router = useRouter();
  return (
    <div>
      <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/extractos.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/extractos.jpg" alt="" />}
        <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.45)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m:2 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h4" color="inherit" sx={{ pt: 4 }}>
                COMPUESTO HEPATICO
              </Typography>
              <Typography variant="detailstitle">
                Reishi - Cardo Mariano
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
                  Mezcla especializada en sanar cualquier tipo de daño hepático, hígado graso, cirrosis, hepatitis, etc. Excelente para dolores fuertes de cabeza
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Tomar de 15 a 25 gotas con un poco de agua 3 veces al día, antes o después de los alimentos" />
                  </ListItem>
                  <ListItem >
                    <ListItemIcon>
                      <CircleTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Para uso cotidiano" />
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
                    <ListItemText primary="HONGO REISHI" secondary="Ganoderma Lucidum" />
                  </ListItem>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <GrassTwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="CARDO MARIANO" secondary="Silybum Marianum" />
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
                    <ListItemText primary="GOTERO 30 MILILITROS" secondary={<Typography variant="presentacionsec" color="primary">$200</Typography>} />
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