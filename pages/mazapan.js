import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
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

const theme = createTheme();

export default function Blog() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/maza.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/maza.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                MAZAPAN ARTEZANAL
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Elavorado con productos 100% artesanales
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5} >
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Typography variant="h6" gutterBottom>
                Mazapan de elavoracion cacera a base de cacahuate molido y piloncillo (panela).
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                  INGREDIENTES
                </Typography>
                <Divider />
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cacahuate" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Avena" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AddCircleTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="Piloncillo (Panela)" />
                  </ListItem>
                </List>
              </Paper>
              <Paper elevation={0} sx={{ mt: 4, mb: 4, p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                  PRESENTACION
                </Typography>
                <Divider />
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem disableGutters>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="250 GRAMOS" secondary="$200" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary="$600" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="1 KILO" secondary="$1000" />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <ViewAgendaTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="1.5 KILOS" secondary="$1600" />
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