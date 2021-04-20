
if (navigator.onLine) {
  window.addEventListener('online', function (e) {
    console.log('在线', e.type);
  })

  window.addEventListener('offline', function (e) {
    console.log('离线', e.type);
  })
}