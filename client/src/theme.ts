export const tokens = {
  grey: {
    100: "#f0f0f3",
    200: "#e1e2e7",
    300: "#d1d3da",
    400: "#c2c5ce",
    500: "#b3b6c2",
    600: "#8f929b",
    700: "#6b6d74",
    800: "#48494e",
    900: "#242427",
  },
  primary: {
    // light purple
    100: "#f0e9f5",
    200: "#e1d3eb",
    300: "#d1bde1",
    400: "#c2a7d7",
    500: "#b391cd",
    600: "#8f74a3",
    700: "#6b5779",
    800: "#483a4f",
    900: "#241d25",
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple8884d8
    500: "#12efc8",
  },
  background: {
    light: "#ebebf0",
    main: "#1f2026",
  },
};

// mui theme settings
export const DarkThemeSettings = {
  mode: 'dark',
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};

export const LightThemeSettings = {
  mode: 'light',
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.light,
      paper: tokens.background.main,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[800],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[700],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[600],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[500],
    },
  },
};