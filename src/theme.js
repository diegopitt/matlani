import {  Dancing_Script, Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const Dancing = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const Montse = Montserrat({
  weight: ['400','500', '600'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});
// Create a theme instance.
const theme = createTheme({
  palette: {
    socials: {
      whatsapp: '#25D366',
      telegram: '#0088CC',
    },
    primary: {
      main: '#F6F6F6',
    },
    secondary: {
      main: '#ff00d5',
    },

    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: Montse.style.fontFamily,
    body2: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.1
    },
    body3: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 0.76
    },
  },

});

export default theme;
