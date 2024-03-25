var cacheName = 'Ta Pago+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/img/logoAba.svg',

        './style/geral.css',

        './style/capa.css',

        './scripts/scriptSenha.js',

        'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',

        './assets/img/socialMediaGoogle.svg',
        './assets/img/socialMediaFacebbok.svg ',
        './assets/img/socialMediaApple.svg',
    
        './assets/img/circle5.svg',
     

        './assets/icon/29.png',
        './assets/icon/40.png',
        './assets/icon/57.png',
        './assets/icon/58.png',
        './assets/icon/60.png',
        './assets/icon/80.png',
        './assets/icon/87.png',
        './assets/icon/114.png',
        './assets/icon/120.png',
        './assets/icon/180.png',
        './assets/icon/1024.png',

      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});


self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});
