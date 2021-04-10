; ((doc, location, storage) => {
  const oInput = doc.querySelector('#login');
  const oBtn = doc.querySelector('#loginBtn');

  const init = () => {
    bindEvent();
  }

  /**
   * 事件绑定
  */
  const bindEvent = () => {
    oBtn.addEventListener('click', oBtnBindClickEvent, false);
  }

  /**
   * 登陆事件
  */
  const oBtnBindClickEvent = () => {
    // 如果输入为空
    if (!oInput.value) {
      return;
    }

    storage.setItem("userName", oInput.value);
    location.href = '/index.html';
  }
  init();
})(document, location, localStorage);