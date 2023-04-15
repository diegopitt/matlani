import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import flower from "../public/flowergreen.svg";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ backgroundColor: '#81a46d', height: '100%', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }} component="nav" aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader color='primary' sx={{ bgcolor: 'transparent', fontWeight:600, fontSize:32, py:2, textAlign: 'center' }} component="div" id="nested-list-subheader">
            MATLANI
          </ListSubheader>
        }>
        <Divider variant="middle" />
        <ListItemButton sx={{ mt:2 }}>
          <ListItemIcon>
          <Image sx={{ position: 'relative'}} width={34} height={34} priority src={flower} alt="Quienes Somos" />
          </ListItemIcon>
          <ListItemText primary="Quienes Somos" primaryTypographyProps={{ ml:-1, color: 'primary', fontWeight: 'medium', variant: 'drawer', }} />
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
          <Image sx={{ position: 'relative'}} width={34} height={34} priority src={flower} alt="Comunidades" />
          </ListItemIcon>
          <ListItemText variant="drawer" primary="Comunidades"  primaryTypographyProps={{ ml:-1,  color: 'primary', fontWeight: 'medium', variant: 'drawer', }}/>
        </ListItemButton>
        <ListItemButton>
        <ListItemIcon>
          <Image sx={{ position: 'relative'}} width={34} height={34} priority src={flower} alt="Contacto" />
          </ListItemIcon>
          <ListItemText variant="drawer" primary="Contacto"  primaryTypographyProps={{ ml:-1,  color: 'primary', fontWeight: 'medium', variant: 'drawer', }}/>
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div sx={{ color: "#ffffff", fontSize: 34 }} style={{ marginBottom: "-18px", paddingRight: "18px", textAlign: "right", width: '100%' }}>
      <IconButton onClick={toggleDrawer('right', true)}><MenuTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}