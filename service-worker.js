var APP_PREFIX = 'ApplicationName_'     
var VERSION = 'version_01'           
var CACHE_NAME = APP_PREFIX + VERSION
// var URLS = [                        
//   '/ytdl/public/help/index.html',                 
//   '/ytdl/index.html',
//   '/ytdl/public/src/css/style.css',
//   '/ytdl/public/src/js/app.js',
//   '/ytdl/public/src/js/material.min.js',
// ]

self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { 
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {      
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }

    
     
    })
  )
})

// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
     
      
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
    
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
