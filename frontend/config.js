const WS_URL = {
  PRICES: `ws://${process.env.BASE_URL || window.location.host}/prices`,
};

const URL = {
  PRICES: '/prices',
};

const DEFAULT_DATA = JSON.stringify({ labels: [], datasets: [{ label: '', data: [] }] });

export { WS_URL, DEFAULT_DATA, URL };
