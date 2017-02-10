// Constants
const backgroundColor = 'rgba(49, 48, 87)';
const foregroundColor = '#7274b0';

// Colors
const RED = '#fd7ab2';
const GREEN = '#78fbe4';
const YELLOW = '#f6d47d';
const BLUE = '#6f99ff';
const MAGENTA = '#b27af8';
const LIGHT_GRAY = '#7274b0';
const DARK_GRAY = '#212337'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: BLUE,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: BLUE,
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = YELLOW;
const borderColor = backgroundColor;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: rgba(49, 48, 87, 1) !important;
      }
      .splitpane_divider {
        background-color(49, 48, 87, 1) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid ${BLUE};
      }
    `
  })
}
