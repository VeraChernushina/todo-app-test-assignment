import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

import CrossIcon from './assets/cross-icon.svg';
import CheckIcon from './assets/check-icon.svg';

export const CustomSwitch = styled(Switch)(() => ({
  width: 51,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2.5,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${CheckIcon})`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: '#10C200',
        boxShadow: 'inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
        opacity: 1,
      }
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25,
    backgroundColor: '#F4F4F4',
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url(${CrossIcon})`,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#366EFF',
    boxShadow: 'inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
    opacity: 1,
  },
}));
