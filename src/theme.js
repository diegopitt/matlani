import { Dancing_Script, Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const Dancing = Dancing_Script({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
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
    MuiListItemIcon: {
      fontSize: 82,
    }, 
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
          background:'#e0cbb8'
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
    fontFamily: Montse.style.fontFamily,
    body2: {
      fontFamily: Dancing.style.fontFamily,
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.1
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      color:'#6e5b4b',
      fontWeight:400
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
      fontSize: 14,
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
    title: {
      fontFamily: Montse.style.fontFamily,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.35,
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
