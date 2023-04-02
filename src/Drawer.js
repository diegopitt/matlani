import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
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
    <Box
      sx={{backgroundColor: '#81a46d', height: '100%', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
        <Typography sx={{ padding: "18px 0px 0px 18px"}} variant="h5" gutterBottom="true" color='secondary'>Carrito</Typography>
      <List>
        {['Mazapan Tradicional', 'Macuna Pruriens', 'Hongo Reishi', 'Chilchahua'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItem>
              <ListItemText primaryTypographyProps={{ color: 'primary', fontWeight: 'medium', variant: 'body2', }} primary={text} secondary={text} />
            </ListItem>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div sx={{ color: "#ffffff", fontSize: 34 }} style={{ paddingTop: "24px", paddingRight: "24px", textAlign: "right", width: '100%'}}>
      <IconButton onClick={toggleDrawer('right', true)}><ShoppingCartTwoToneIcon sx={{ color: "#ffffff", fontSize: 38 }} /></IconButton>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        {list('right')}
      </Drawer>
    </div>
  );
}