import colors from 'vuetify/lib/util/colors'

let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('awroraDarkMode') || false
}

const palette = {
  rose: {
    primary: colors.pink.base, // primary main
    primarylight: colors.pink.lighten4, // primary light
    primarydark: colors.pink.darken3, // primary dark
    secondary: colors.orange.base, // secondary main
    secondarylight: colors.orange.lighten4, // secondary light
    secondarydark: colors.deepOrange.darken4, // secondary dark
    accent: colors.cyan.base, // accent main
    accentlight: colors.cyan.lighten4, // accent light
    accentdark: colors.cyan.darken4, // accent dark
    anchor: colors.cyan.base, // link
  },
}

export const theme = {
  ...palette.rose,
}

export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme,
      },
      dark: {
        ...theme,
      },
    },
    options: {
      customProperties: true,
    },
  },
}
