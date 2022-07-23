import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#1ddf64',
        },
        secondary: {
            main: '#181818',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;