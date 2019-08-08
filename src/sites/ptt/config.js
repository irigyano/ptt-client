const config = {
  name: 'PTT',
  url: 'wss://ws.ptt.cc/bbs',
  charset: 'utf8',
  origin: 'https://www.ptt.cc',
  protocol: 'websocket',
  timeout: 60,
  blobSize: 1024,
  preventIdle: true,
  terminal: {
    columns: 80,
    rows: 24,
  },
};

export default config;
