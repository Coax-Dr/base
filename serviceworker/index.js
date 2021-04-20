if ('serviceWorker' in navigator) {
  console.log('支持');
  navigator.serviceWorker.register('./img').then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}