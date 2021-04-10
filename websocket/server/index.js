const Ws = require('ws');

; ((Ws) => {
  const server = new Ws.Server({ port: 8000 });

  const init = () => {
    bindEvent();
  }

  const bindEvent = () => {
    server.on('open', handleOpen);
    server.on('close', handleClose);
    server.on('error', handleError);
    server.on('connection', handleConnection);
  };

  const handleOpen = () => {
    console.log('websocket2 open');
  };

  const handleClose = () => {
    console.log('websocket close')
  };

  const handleError = () => {
    console.log('websocket error');
  };

  const handleConnection = (ws) => {
    console.log('websocket connection');
    ws.on('message', handleMessage);
  };

  const handleMessage = (msg) => {
    console.log(msg);
    server.clients.forEach((c) => {
      c.send(msg);
    })
  };

  init();
})(Ws);