import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CustomSwitch } from './ui/CustomSwitch';
import { Grid } from '@mui/material';
import { useContext } from 'react';
import { NewsContext } from '../contexts/Context';

const style = {
  position: 'absolute',
  top: '50%',
  left: '49.5%',
  transform: 'translate(-50%, -50%)',
  width: 390,
  bgcolor: '#282828',
  border: 'none',
  borderRadius: '25px',
  boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
  p: 4,
};

export const SettingsPopup = ({handleClose, open}) => {
  const ctx = useContext(NewsContext);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Settings
          </Typography>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Show news banner
            </Typography>
            <CustomSwitch checked={ctx.isNewsShown} onChange={ctx.toggleNewsShown} />
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}