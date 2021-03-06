export const theme = {
  color: {
    background: '#F5F5F5',
    text: '#323232',
    link: '#131313',
    red: '#C83A3A',
    blue_100: '#51D3F5',
    blue_200: '#ACD9E6',
    blue_300: '#C7EBF5',
    blue_500: '#4093A8',
    blue_header: '#BCE0EA',
    blue_darker: '#367383',
    text_description: '#9F9F9F',
    white: '#F5F5F5',
  },

  font: {
    main: `"Roboto", sans-serif`,
    secondary: `"Roboto Slab", serif`,
  },
};

export function rem(size) {
  return `${size / 16}rem`;
}

export function flexCenter() {
  return `
    display: flex;
    align-items: center;
    justify-content: center;
  `;
}

export function colorShade(col, amt) {
  col = col.replace(/^#/, '');
  if (col.length === 3)
    col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [
    parseInt(r, 16) + amt,
    parseInt(g, 16) + amt,
    parseInt(b, 16) + amt,
  ];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
}

export function customScrollbar() {
  return `
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b8b8b8;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colorShade('#b8b8b8', -20)};
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 0px;
    box-shadow: inset 7px 10px 12px #f0f0f0;
  }`;
}

export function containerCenter() {
  return `
    width: 100%;
    max-width: 1200px;
    margin: 0px auto`;
}

export { GlobalStyle } from './globalStyle';
