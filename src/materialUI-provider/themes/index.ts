import { createMuiTheme } from '@material-ui/core/styles';

// A theme with custom primary and secondary color.
// It's not what I want to use, but I need components that helps me to get things done faster so I had to used it.

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e30410',
      text: '#444444',
      background: 'f4f4f4',
    },
    secondary: {
      main: '#fffff',
    },
    typography: {
      fontSize: 10,
      htmlFontSize: 10,
      body2: 5,
      body1: 5,
    },
  },
} as any);
export type Theme = typeof theme;
export default theme;
