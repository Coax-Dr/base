; ((doc, location) => {
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
    // 如果输入错误
    if (oInput.value !== '123') {
      alert('登陆信息错误!!!');
      return;
    }

    alert('登陆成功!!!');
    location.href = '/index.html';
  }
  init();
})(document, location);