import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const wicon = <WhatsAppIcon sx={{bgcolor: '#25D366', color: '#fff',fontSize: 26}} />
const ticon = <TelegramIcon sx={{bgcolor: '#0088CC', color: '#fff',fontSize: 26}} />
export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>  {
    setOpen(false);
    window.location.href = 'http://wa.me/529161268169';
   }
   const handleClose2 = () =>  {
    setOpen(false);
   }
   const handleClose3 = () =>  {
    setOpen(false);
    window.location.href = 'http://t.me/529161268169';
   }

  return (
    <div sx={{transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel=""
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<CallTwoToneIcon sx={{bgcolor: '#ff00d5',  color: '#fff',fontSize: 36 }} />}
        onClose={handleClose2}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: 'secondary',
          size: 'large',
        }}
      >
        <SpeedDialAction key='Whatsapp' icon={wicon} tooltipTitle='Whatsapp' tooltipOpen onClick={handleClose} FabProps={{color: 'primary', size: 'small', sx: { bgcolor: 'primary.main', } }} />
        <SpeedDialAction key='Telegram' icon={ticon} tooltipTitle='Telegram' tooltipOpen onClick={handleClose3} FabProps={{ size: 'small', sx: { bgcolor: '#0088CC', } }} />

      </SpeedDial>
    </div>
  );
}