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

export default function Cacao() {
  const router = useRouter();
  return (
    <div>
      <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/cacao.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/cacao.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.45)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m:2 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" sx={{ pt: 4 }}>
                CACAO SECADO AL SOL
              </Typography>
              <Typography variant="detailstitle">
                Theobroma Cacao
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
                  INDICACIONES
                </Typography>
                <Divider />
                <Typography variant="h6" gutterBottom color="inherit" sx={{ mt: 3 }}>
                  Utilizar de 7 a 13 semillas al día ya sea en licuado o ingeridas a lo largo del día
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#6e5b4b' }} />
                    </ListItemIcon>
                    <ListItemText primary="Auxiliar en el tratamiento de enfermedades cardiovasculares, cerebrovasculares y visuales" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#6e5b4b' }} />
                    </ListItemIcon>
                    <ListItemText primary="Contiene propiedades antivirales, antitumorales e incluso más antioxidantes que el café verde" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#6e5b4b' }} />
                    </ListItemIcon>
                    <ListItemText primary="Excelente regulador hormonal y digestivo" />
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
                      <Inventory2TwoToneIcon sx={{ color: '#6e5b4b', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="150 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$100</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon sx={{ color: '#6e5b4b', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$300</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon sx={{ color: '#6e5b4b', ml:0.7 }} />
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