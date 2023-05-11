import { Dancing_Script, Montserrat, Amatic_SC } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const Dancing = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const Amatic = Amatic_SC({
  weight: ['700'],
  display: 'swap',
  subsets: ['latin-ext'],
  preload: false,
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const Montse = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  components: {
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          fontFamily: Dancing.style.fontFamily,
          fontWeight: 500,
          fontSize: 22,
          lineHeight: 1.1
        }
      }
    },    
    MuiDivider: {
      styleOverrides: {
        root: {
          background:'#e2bc99'
        }
      }
    }
  },
  palette: {
    socials: {
      whatsapp: '#25D366',
      telegram: '#0088CC',
    },
    primary: {
      main: '#255527',
    },
    secondary: {
      main: '#81a46d',
    },
    gris: {
      main: '#ff00d5',
    },
    yellow: {
      main: '#dabca1',
    }
  },
  typography: {
    fontFamily: Amatic.style.fontFamily,
    body2: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.1
    },
    h3: {
      fontFamily: Montse.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      fontFamily: Montse.style.fontFamily,
      fontWeight: 700,
    },
    h6: {
      fontSize: 16,
      color: '#255527',
      fontWeight:500
    },
    body3: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 0.76
    },
    presentacionsec: {
      fontFamily: Montse.style.fontFamily,
      fontWeight: 500,
      fontSize: 16,
    },
    detailstitle: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 500,
      fontSize: 32,
      textShadow: "#685849 1px 0 10px",
      lineHeight: 1.1,
      color: '#dabca1'
    },
    cardtitle: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 1.35,
      color: '#f7dfca'
    },
    drawer: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 0.76
    },
  },
});

export default theme;
