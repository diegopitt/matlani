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
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import Divider from '@mui/material/Divider';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';

export default function Canela() {
  const router = useRouter();
  return (
    <div>
      <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/canela.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/canela.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.45)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m:2 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" sx={{ pt: 4 }}>
                CANELA
              </Typography>
              <Typography variant="detailstitle">
                Cinnamumum Ceylanicum
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', p: 2, }}>
              <Typography variant="h6" gutterBottom>
                  DETALLES
                </Typography>
                <Divider />
                <Typography variant="h6" gutterBottom color="inherit" sx={{ mt: 3 }}>
                Es un estimulante en general, regulador de <b>periodos menstruales</b> y es <b>afrodisiaco</b> en mujeres  
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Auxiliar en tos, gripa, fiebre, dolores nervios y mejorador digestivo" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Tomar máximo 15 días y descansar 7 para volver a consumir" />
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
                      <Inventory2TwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="150 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$100</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$300</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="1 KILO" secondary={<Typography variant="presentacionsec" color="primary">$400</Typography>} />
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