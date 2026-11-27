
import {
  precacheAndRoute,
  cleanupOutdatedCaches,
} from 'workbox-precaching'

import {
  setDefaultHandler,
  registerRoute,
} from 'workbox-routing'

import { offlineFallback } from 'workbox-recipes'
import { NetworkOnly, CacheFirst } from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

// Cache the files generated during the production build
precacheAndRoute(self.__WB_MANIFEST)

// Clean up outdated cached files
cleanupOutdatedCaches()

// Use the network when a resource isn't cached
setDefaultHandler(new NetworkOnly())

// Display the custom page when an uncached page
// cannot be loaded because the user is offline
offlineFallback({
  pageFallback: '/offline.html',
})

// Cache previously requested portfolio images
registerRoute(
  /\.(?:png|jpg|jpeg|svg|webp|avif)$/i,
  new CacheFirst({
    cacheName: 'portfolio-images',

    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),

      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
)

// Allow the user to activate an update when they choose
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
