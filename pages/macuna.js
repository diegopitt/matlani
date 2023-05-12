import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Inventory2TwoToneIcon from '@mui/icons-material/Inventory2TwoTone';
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


export default function Macuna() {
  const router = useRouter();
  return (
    <div>
      <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/macuna.jpg)`, }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src="/macuna.jpg" alt="" />}
        <Box sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.45)', }} />
        <Grid container>
          <Grid item md={6}>
            <IconButton onClick={() => { router.replace("/") }}><ReplyTwoToneIcon sx={{ color: "#ffffff", fontSize: 38, m:2 }} /></IconButton>
            <Box sx={{ position: 'relative', p: { xs: 3, md: 6 }, pr: { md: 0 }, }}>
              <Typography component="h1" variant="h3" sx={{ pt: 4 }}>
                MUCUNA PRURIENS
              </Typography>
              <Typography variant="detailstitle">
                Mucuna Pruriens
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container maxWidth="lg">
        <main>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Paper sx={{ position: 'relative', backgroundColor: '#f7dfca', p: 2, }}>
              <Typography variant="h6" gutterBottom>
                  DETALLES
                </Typography>
                <Divider />
                <Typography variant="h6" gutterBottom color="inherit" sx={{ mt: 3 }}>
                  Esta maravillosa planta, también conocida como <b>frijol terciopelo</b>, es un excelente suplemento alimenticio con un perfil químico muy extendido llevándolo a tener acciones profundas en el sistema nervioso humano
                </Typography>
                <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                  <ListItem >
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Contiene entre 3 y 6% de L-DOPA, precursor de la dopamina, aprox. 30% de proteína, serotonina conocida como hormona de la felicidad, y más" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Auxiliar en el tratamiento de Parkinson, por su contenido de L-DOPA" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Diabetes (fuerte actividad hipoglucemiante)" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Alzheimer y fertilidad" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Contiene propiedades afrodisíacas" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FilterVintageTwoToneIcon sx={{ color: '#255527' }} />
                    </ListItemIcon>
                    <ListItemText primary="Excelente suplemento alimenticio para niños y deportistas, estimula la glándula pituitaria, encargada del crecimiento y estimulación de otras glándulas" />
                  </ListItem>
                </List>
                <Typography variant="h6" gutterBottom color="inherit">
                  Usar de 1 a 2 cucharadas al dia en licuado, como substituto de harinas, en los alimentos
                </Typography>
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
                    <ListItemText primary="200 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$200</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="500 GRAMOS" secondary={<Typography variant="presentacionsec" color="primary">$400</Typography>} />
                  </ListItem>
                  <ListItem disableGutters disablePadding>
                    <ListItemIcon>
                      <Inventory2TwoToneIcon sx={{ color: '#255527', ml:0.7 }} />
                    </ListItemIcon>
                    <ListItemText primary="1 KILO" secondary={<Typography variant="presentacionsec" color="primary">$700</Typography>} />
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