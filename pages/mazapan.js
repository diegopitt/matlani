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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import IconButton from '@mui/material/IconButton';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import ViewAgendaTwoToneIcon from '@mui/icons-material/ViewAgendaTwoTone';
import Divider from '@mui/material/Divider';

export default function Blog() {
  const router = useRouter();
  return (
    <div>
      <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/maza.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/maza.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.45)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m: 2 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" sx={{ pt: 4 }}>
                MAZAPAN ARTEZANAL
              </Typography>
              <Typography variant="detailstitle">
                Elavorado con productos artesanales
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} >
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f7dfca' }}>
                <Typography variant="h6" gutterBottom>
                  INDICACIONES
                </Typography>
                <Divider />
                <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                  Mazapan de elavoracion cacera a base de cacahuate molido y piloncillo (panela)
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#f7dfca' }}>
                <Typography variant="h6" gutterBottom>
                  INGREDIENTES
                </Typography>
                <Divider />
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleTwoToneIcon sx={{ color: '#6e5b4b' }} />
                    </ListItemIcon>
                    <ListItemText primary="Cacahuate" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleTwoToneIcon sx={{ color: '#6e5b4b' }} />
                    </ListItemIcon>
                    <ListItemText primary="Avena" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleTwoToneIcon sx={{ color: '#6e5b4b' }} />
                    </ListItemIcon>
                    <ListItemText primary="Piloncillo (Panela)" />
                  </ListItem>
                </List>
              </Paper>
              <Paper elevation={0} sx={{ mt: 4, mb: 4, p: 2, backgroundColor: '#f7dfca' }}>
                <Typography variant="h6" gutterBottom>
                  PRESENTACION
                </Typography>
                <Divider />
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon sx={{ color: '#6e5b4b', ml: 0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="250 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$200</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon sx={{ color: '#6e5b4b', ml: 0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$500</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon sx={{ color: '#6e5b4b', ml: 0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="1 KILO" secondary={<Typography variant="presentacionsec" color="primary">$1000</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon sx={{ color: '#6e5b4b', ml: 0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="1.5 KILOS" secondary={<Typography variant="presentacionsec" color="primary">$1600</Typography>} />
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