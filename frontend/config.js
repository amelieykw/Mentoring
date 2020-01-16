/* eslint-disable no-restricted-globals */
const WS_URL = {
  PRICES: `${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.host}/prices`,
};

const URL = {
  PRICES: '/prices',
};

const DEFAULT_DATA = JSON.stringify({ labels: [], datasets: [{ label: '', data: [] }] });

export { WS_URL, DEFAULT_DATA, URL };
