const colors = require('windicss/colors');
const typography = require('windicss/plugin/typography');

export default {
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
};
