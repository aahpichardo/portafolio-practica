//creamos una variable para el nombre del cache
const CACHE_NAME = 'v1_cache_portfolio_pwa';

const urlsToCache = [
    './',
    './styles/style.css',
    './scripts/script.js',
    './scripts/main.js',
    './assets/picture.jpg',
    './assets/icon-16x16.png',
    './assets/icon-32x32.png',
    './assets/icon-64x64.png',
    './assets/icon-96x96.png',
    './assets/icon-128x128.png',
    './assets/icon-144x144.png',
    './assets/icon-192x192.png', // Para pantalla de inicio
    './assets/icon-240x240.png',
    './assets/icon-256x256.png',
    './assets/icon-384x384.png',
    './assets/icon-512x512.png', // Para splash screen
    './assets/icon-1024x1024.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
        .catch(err => console.log('No se ha registrado el cache', err))
    );
});

//evento activar
self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
        .then(() => self.clients.claim())
    );
});

//evento fecth con el que se recuperan los recursos y si no esta en el cache los solicita
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                return res;
            }
            return fetch(e.request);
        })
    );
});
