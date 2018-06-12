const colorPallette = {
  black: '#000000',
  gray75: '#2e2e2c',
  gray60: '#666666',
  gray50: '#7f7f7f',
  gray40: '#999999',
  gray30: '#b2b2b2',
  gray20: '#cccccc',
  gray10: '#e5e5e5',
  gray5: '#ebebea',
  white: '#fefefe',
  yellow: '#f3df49',
  red: '#eb5558',
  green: '#9ee79a',
};

const theme = {
  colors: {
    background: colorPallette.gray5,
    body: colorPallette.gray75,
    border: colorPallette.gray5,
    lighter: colorPallette.gray10,
    black: colorPallette.black,
    white: colorPallette.white,
    brand: colorPallette.red,
    yellow: colorPallette.yellow,
    green: colorPallette.green,
  },
  fonts: {
    sansSerif: `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif`,
    serif: `Georgia, 'Times New Roman', Times, serif`,
    monospace: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace,
      monospace`,
  },
  emSizes: {
    fontSizes: {
      h1: 2.441,
      h2: 1.953,
      h3: 1.563,
      h4: 1.25,
    },
    containerPadding: 1.5,
  },
  pxSizes: {
    breakpoints: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
    widths: {
      md: 720,
      lg: 960,
      xl: 1140,
    },
    heights: {
      header: 70,
    },
  },
};

export default theme;
