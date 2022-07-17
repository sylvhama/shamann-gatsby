const base = {
  color: {
    lightBlue: '#B3E5FC',
    blue: '#03A9F4',
  },
  font: { mono: 'monospace' },
  breakpoint: '640px',
};

const darkColors = {
  background: '#212121',
  text: '#f1f1f1',
};

const lightColors = {
  background: '#f1f1f1',
  text: '#212121',
};

export default function theme(isDark) {
  return {
    modeColors: isDark ? darkColors : lightColors,
    ...base,
  };
}
