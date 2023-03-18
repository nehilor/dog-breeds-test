import { createTheme } from '@mui/material/styles';
import { common, lightGreen } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: common.white,
    },
    secondary: {
      main: lightGreen[600],
    },
  },
  spacing: 10,
});

export default theme;
