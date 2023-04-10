import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import ReplyTwoToneIcon from '@mui/icons-material/ReplyTwoTone';
import IconButton from '@mui/material/IconButton';

const theme = createTheme();

export default function Blog() {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Paper sx={{ position: 'relative', backgroundColor: 'grey.800', color: '#fff', mb: 4, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundImage: `url(/coma.jpg)`, }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src="/coma.jpg" alt="" />}
            <Box sx={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, backgroundColor: 'rgba(0,0,0,.3)',}} />
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
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3, }, }}>
              <Typography variant="h6" gutterBottom>
                texto
              </Typography>
              <Divider />
              <Typography variant="h6" gutterBottom>
                texto 2
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                  title
                </Typography>
                <Typography>desc</Typography>
              </Paper>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Archives
              </Typography>
              <Link display="block" variant="body1" href="https://mui.com/" key="https://mui.com/">
                algo
              </Link>
              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Social
              </Typography>
              <Link display="block" variant="body1" href="https://mui.com/" key="https://mui.com/">
                algo2
              </Link>
            </Grid>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}