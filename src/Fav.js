import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div sx={{transform: 'translateZ(0px)', flexGrow: 1, height:0, }}>
      <SpeedDial
        ariaLabel=""
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<WhatsAppIcon sx={{ bgcolor: '#25D366', '&:hover': { backgroundColor: '#25D366', opacity: [0.8, 0.7, 0.6], }, color: '#fff',fontSize: 40 }} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: 'primary',
          size: 'large',
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}