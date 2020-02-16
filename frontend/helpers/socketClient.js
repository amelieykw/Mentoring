import { WS_URL } from '../config';

function socketClient(postMessageFunc) {
  console.log(WS_URL.PRICES);
  const ws = new WebSocket(WS_URL.PRICES);

  ws.onopen = () => {
    console.log('socket on connection');
  };

  ws.onclose = () => {
    console.log('socket close connection');
  };

  ws.onmessage = (event) => {
    postMessageFunc(JSON.parse(event.data));
  };

  ws.onerror = (error) => {
    console.log(error);
  };

  return ws;
}
export default socketClient;
