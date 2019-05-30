/* eslint-disable prefer-destructuring */
export { default as GlobalStyle } from './GlobalStyle';

// Colors

const baseColors = {
  white: '#fff',
  lightgray: '#fafafa'
};

const colors = {
  border: '#ebeced',
  text: '#67717A',
  background: baseColors.lightgray,
  primary: baseColors.white,
  secondary: '#24292E',
  gray: '#eee',
  lightgray: baseColors.lightgray
};

// Breakpoints
const breakpoints = ['40em', '52em', '64em', '80em'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

// Font Sizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72];

fontSizes.body = fontSizes[2];
fontSizes.display = fontSizes[5];

// Space
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export default {
  breakpoints,
  fontSizes,
  colors,
  space,
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25
  },
  shadows: {
    sm: '0 0 4px rgba(0, 0, 0, .125)',
    lg: '0 0 24px rgba(0, 0, 0, .125)'
  },
  colorStyles: {
    warning: {
      color: 'black',
      backgroundColor: 'orange'
    },
    error: {
      color: 'white',
      backgroundColor: 'red'
    }
  },
  buttons: {
    primary: {
      color: baseColors.text,
      backgroundColor: colors.primary
    },
    secondary: {
      color: baseColors.white,
      backgroundColor: colors.secondary
    },
    outline: {
      color: colors.text,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
  }
};
