'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "bbe5209d6c886737f66227185d21e4e2",
"index.html": "403d8b20520c3b8b200886c711fe1499",
"/": "403d8b20520c3b8b200886c711fe1499",
"version.json": "fdb7f5bc2269dfd26307cd61de5c217b",
"manifest.json": "8c93406610504f77032ac6d599bfc463",
"assets/NOTICES": "81715b095dbc3e8d4d4d2b90a3ca836d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/settlements/cave-town.png": "3f61558990b9e8d679628017562f1f3a",
"assets/assets/images/maps/map.png": "addb8b93b662801d30f0114aa5f22113",
"assets/assets/images/combat/fg/41_49/enemy1.png": "2f06ece6c60d32d4c18cbc87b4e97031",
"assets/assets/images/combat/fg/41_49/enemy3.png": "7dd6a158380e84ffcf1ec53341ad3df1",
"assets/assets/images/combat/fg/41_49/enemy2.png": "29070c2cd46a2967d407547b8e0d1757",
"assets/assets/images/combat/fg/50/enemy.png": "3c475ce429cfbfcbc9d6ee4370d4efd4",
"assets/assets/images/combat/fg/20/enemy.png": "c53bf65301a6fb4e0a4cbffaf5d8726a",
"assets/assets/images/combat/fg/30/enemy.png": "370bf57d3f51ea93e8561d0185457726",
"assets/assets/images/combat/fg/40/enemy.png": "67f4ead6b291896ef167445aa56e9dca",
"assets/assets/images/combat/fg/10/enemy.png": "59372ea874cfe2c044188955345154d6",
"assets/assets/images/combat/fg/21_29/enemy1.png": "3d5a59ddde508facccb4943269034cbf",
"assets/assets/images/combat/fg/21_29/enemy3.png": "48f0bbbc2104cf7ba8854d896fb13867",
"assets/assets/images/combat/fg/21_29/enemy2.png": "2ffe9964dc9f10dc922161c29fd69edb",
"assets/assets/images/combat/fg/31_39/enemy1.png": "8c434010cbcde925775a7848806f7b20",
"assets/assets/images/combat/fg/31_39/enemy3.png": "8e405bc183ee72a4ac2c2b1c4f9a18dd",
"assets/assets/images/combat/fg/31_39/enemy2.png": "3997e65d6746ca8ab08f050d91458bdf",
"assets/assets/images/combat/fg/11_19/enemy1.png": "d6bd4309328c3a02b2425478f5aa087c",
"assets/assets/images/combat/fg/11_19/enemy3.png": "8c0b9a9cd81d0228b676c7893c401fa5",
"assets/assets/images/combat/fg/11_19/enemy2.png": "9b2ad7d7f1f0623a224ea2164816a574",
"assets/assets/images/combat/fg/1_9/enemy1.png": "ee343c9d0b054c251a90e92e4e42858e",
"assets/assets/images/combat/fg/1_9/enemy3.png": "8f4aca94721b30fa724e0f1769ccb5d1",
"assets/assets/images/combat/fg/1_9/enemy2.png": "f8a6a85ae56dd26c6e5cb15c19d1f8ea",
"assets/assets/images/combat/bg/cemetery.png": "d9ad1d1dd83aa76492f1c2c34d42addc",
"assets/assets/images/storytell/king.png": "73bdff37b5aaafc028bcf35796f9084e",
"assets/assets/images/storytell/doctor.png": "52cd4533fc985cc18e2c1e272e6217bb",
"assets/assets/images/storytell/butcher.png": "ccb8722a4c8b529000aee7930b05a4be",
"assets/assets/images/storytell/saint-anna.png": "a6d697ab478d54787fe304243c472e1b",
"assets/assets/images/storytell/nightfield.png": "37e8b4f6d9f2b28b1836e3785ce8a8a3",
"assets/assets/images/storytell/knight.png": "45e610c56aa5ffa127afa75ca174fcc4",
"assets/assets/images_v2/character/bag.png": "1c60c90ff6b664212551841c303bb970",
"assets/assets/images_v2/character/swords.png": "f8f7ac0124abcb72e23a4e0b69b201d1",
"assets/assets/images_v2/character/guy.png": "757a44c00c68d99810d02639bc5d47b0",
"assets/assets/images_v2/character/map.png": "a1622f42e6443ff6762d51fb41933984",
"assets/assets/images_v2/character/defense.png": "a5bad6273a40f44a9edc794fb22d90ea",
"assets/assets/images_v2/character/void.png": "398c47fd6889a6a7c2cc4f572ae74b88",
"assets/assets/images_v2/character/something.png": "527f0f456648bdfc2e986485f615855c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "58f2ac7c282b39a09a4f1366591bfa91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
