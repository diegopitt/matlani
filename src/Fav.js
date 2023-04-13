import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import DialpadTwoToneIcon from '@mui/icons-material/DialpadTwoTone';

const wicon = <WhatsAppIcon sx={{color: '#fff',fontSize: 26}} />
const ticon = <TelegramIcon sx={{color: '#fff',fontSize: 26}} />
const dicon = <DialpadTwoToneIcon sx={{color: '#000',fontSize: 22}} />

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
        icon={<CallTwoToneIcon sx={{ color: '#fff',fontSize: 36 }} />}
        onClose={handleClose2}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: 'secondary',
          size: 'large',
        }}
      >
        <SpeedDialAction key='Whatsapp' icon={wicon} tooltipTitle='Whatsapp' tooltipOpen onClick={handleClose} FabProps={{ sx: { bgcolor: 'socials.whatsapp', '&:hover': { bgcolor: 'socials.whatsapp', }} }} />
        <SpeedDialAction key='Telegram' icon={ticon} tooltipTitle='Telegram' tooltipOpen onClick={handleClose3} FabProps={{ sx: { bgcolor: 'socials.telegram', '&:hover': { bgcolor: 'socials.telegram', }} }} />
        <SpeedDialAction key='Telefono' icon={dicon} tooltipTitle='9161268169' tooltipOpen />
      </SpeedDial>
    </div>
  );
}