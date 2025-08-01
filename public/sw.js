// Service Worker básico para evitar errores 404
self.addEventListener('install', function(event) {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activado');
  event.waitUntil(self.clients.claim());
});

// Estrategia básica de cache para recursos estáticos
self.addEventListener('fetch', function(event) {
  // Solo cachear GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Devolver desde cache si existe, sino hacer fetch
        return response || fetch(event.request);
      })
  );
});
