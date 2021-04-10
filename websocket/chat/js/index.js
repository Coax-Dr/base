; ((doc, WebSocket, storage, location) => {
  const ws = new WebSocket('ws:localhost:8000');
  const oMessageList = doc.querySelector('#messageList');
  const oInput = doc.querySelector('#enter');
  const oSendBtn = doc.querySelector('#send');
  let userName = '';
  const init = () => {
    bindEvent();
  }
  const bindEvent = () => {
    oSendBtn.addEventListener('click', bindSendMessage, false);
    ws.addEventListener('open', handleOpen, false);
    ws.addEventListener('close', handleClose, false);
    ws.addEventListener('error', handleError, false);
    ws.addEventListener('message', handleMessage, false);
  }


  const bindSendMessage = () => {
    const msg = oInput.value;
    if (!msg.trim().length) {
      return;
    };

    ws.send(JSON.stringify({
      user: userName,
      dateTime: new Date().getTime(),
      message: msg
    }))
  };

  // 绑定open函数
  const handleOpen = (e) => {
    console.log('websocket open', e);
    userName = storage.getItem("userName");
    if (!userName) {
      location.href = 'entry.html';
      return;
    };
  }

  // 绑定close函数
  const handleClose = (e) => {
    console.log('websocket close', e);
  }

  // 绑定错误处理函数
  const handleError = (e) => {
    console.log('websocket error', e);
  }

  // 绑定message函数
  const handleMessage = (e) => {
    console.log('websocket message', e);
    const data = JSON.parse(e.data);
    const listItem = doc.createElement('div');
    listItem.innerHTML = `
    <div>${data.user}</div>
    <h1>${data.message}</h1>
    <div>${data.dateTime}</div>
    `
    oMessageList.appendChild(listItem);
  }

  init();
})(document, WebSocket, localStorage, location);