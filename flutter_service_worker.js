'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "988afc01390b59bbd117ad6698084626",
"assets/AssetManifest.bin.json": "39a9184ed8bddb424eb4b5f99e869651",
"assets/AssetManifest.json": "2c2e3e4e2848dfed71df1c2fbee2bc64",
"assets/assets/%25D0%25BA%25D0%25BD%25D0%25BE%25D0%25BF%25D0%25BA%25D0%25B0/%25D0%25B0%25D0%25BA%25D1%2581%25D0%25B5%25D1%2581%25D1%2583%25D0%25B0%25D1%2580%25D1%258B.png": "aefd91a2c885e97be679c975fcd8aac0",
"assets/assets/%25D0%25BA%25D0%25BD%25D0%25BE%25D0%25BF%25D0%25BA%25D0%25B0/%25D0%25B1%25D1%2583.png": "aa14a390a1fbe3e755c85c26e8f55c0c",
"assets/assets/%25D0%25BA%25D0%25BD%25D0%25BE%25D0%25BF%25D0%25BA%25D0%25B0/%25D0%25BD%25D0%25BE%25D1%2583%25D1%2582%25D0%25B1%25D1%2583%25D0%25BA%25D0%25B8.png": "c555f550145d903bbf92ced3b9eab957",
"assets/assets/%25D0%25BA%25D0%25BD%25D0%25BE%25D0%25BF%25D0%25BA%25D0%25B0/%25D0%25BF%25D0%25B5%25D1%2580%25D0%25B5%25D0%25B4%2520%25D0%25B7%25D0%25B0%25D0%25BA%25D0%25B0%25D0%25B7.png": "abe5c8d3bd612bd739d71e0a96aebf84",
"assets/assets/%25D0%25BA%25D0%25BD%25D0%25BE%25D0%25BF%25D0%25BA%25D0%25B0/%25D1%2581%25D0%25BC%25D0%25B0%25D1%2580%25D1%2582%25D1%2584%25D0%25BE%25D0%25BD%25D1%258B.png": "e76ec195907fe98d0a2168ce448043e3",
"assets/assets/icon/accaunt.svg": "f01e61e509478ce428cc991946e17a75",
"assets/assets/icon/cart.svg": "674b4a8940efafb0281efd427112122c",
"assets/assets/icon/cartout.svg": "191959775b17c549705ebecb8d7b0b90",
"assets/assets/icon/carttext.svg": "9a77f0700b097f1475cedfa42e34d8a3",
"assets/assets/icon/chat.svg": "5a57a5dc4965ed618e05e8754cc3f471",
"assets/assets/icon/chat1.svg": "89e74c6a10399c4d5b421caf0be400bb",
"assets/assets/icon/dark.svg": "b7c67dc8309ee029e24531154cba9b4f",
"assets/assets/icon/home.svg": "3dd6e861c48f37a55ef3f0310406c496",
"assets/assets/icon/home1.svg": "8e36e6c894a41f71dce445d87bcbd1a9",
"assets/assets/icon/light.svg": "f856d08ef3af15c5436c08733259c2fb",
"assets/assets/icon/local.svg": "2f3aa20cb8095b6268637270b2fc8bfa",
"assets/assets/icon/logoxbagr.svg": "e9f72587539f81066096c521b2eb211e",
"assets/assets/icon/mobi%2520logo.svg": "dbaa080ce94e2ea7e05ad915cd12d744",
"assets/assets/icon/mobi%2520white.svg": "5a7f69d08000bb8e1eeaeb0d0277f438",
"assets/assets/icon/search.svg": "0d2a385808799c6bb3fd089eb7965678",
"assets/assets/icon/search1.svg": "ca4387861579f7bb17bf76414b5b216a",
"assets/assets/icon/search2.svg": "33c07296d50aa66d96237e573763c9d1",
"assets/assets/icon/up/cartoll%2520delete.svg": "c8335594bebcb9307cdb884c935f0fb1",
"assets/assets/icon/up/chat.svg": "89e74c6a10399c4d5b421caf0be400bb",
"assets/assets/icon/up/dark%2520light.svg": "00bdc1c8644ba56f799086c1fc7df58f",
"assets/assets/icon/up/dark.svg": "127bc84b879b934875880d40dd8bf78d",
"assets/assets/icon/up/filter.svg": "4bf6a29d41ee869e8d0967ff40b2aeef",
"assets/assets/icon/up/katalog.svg": "fd69dc9cb6b3ca7c4cbb046c8cf431ae",
"assets/assets/icon/up/search.svg": "e8d2628a834ae2c1ba3f0720ab70ee48",
"assets/assets/image/m.png": "2ab88e1cb22c7d87bd814aca56471c1e",
"assets/assets/image/mobi1.png": "658ff64f7ccef1f444e1f1ee55ed6203",
"assets/assets/image/mobilogo.png": "8854fb47557f8c350461dfdad0653b4c",
"assets/assets/image/mobilogo1.png": "ad22d0ff343812df437669807322c439",
"assets/assets/product/63a052fce949ec8a415b213ad03077e8.png": "6ba457a42ff3a6693a57dd939efe117f",
"assets/assets/product/c37d80ea.webp": "c5d3316ca2b773e05f9b2fee03598f07",
"assets/assets/product/c6fe396f3506c4e84d6dbd494ced3f76.jpg": "a0c1a74a55364fb0ca9dc7311547196e",
"assets/assets/product/headset_pulse_elite_wireless_black_71.webp": "b869b49b41712b3b471026199624c1a1",
"assets/assets/product/iphone-15-pro-max.webp": "feee5b40fc69429a68904b9563285732",
"assets/assets/product/Zephyrus-G16-PR-6-1.png": "ad348bfa0ea368bf39c4e4ba03e159e4",
"assets/assets/slider/1.png": "e85143d32a8901975438fb014a13cf7e",
"assets/assets/slider/2.png": "00b88d198a4932087aefda4a7aea349b",
"assets/assets/slider/3.png": "5377c0f5fe064ca9f79becc72475836d",
"assets/assets/slider/4.png": "f13a397baec5d598d3ebc0292976224c",
"assets/assets/slider/5.png": "0b25b14676760c7ea38f9f15c1a54002",
"assets/assets/slider/6.png": "beb0d9abd082de73672793dcae30e994",
"assets/assets/slider/Frame%2520145.png": "0d48000631c649ca5d9b67661a09e86c",
"assets/assets/slider/olim.jpg": "f03238b7c0bfbae60b97c043d3236ab8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "0a590c7a6c1b3a79e0f2e32ffb299c2f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "758a063b89f29c137c8ceadfc2f7c123",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6a40ade64f2beb017c509b51c616af93",
"icons/Icon-192.png": "68c118f7e94ba68c670b0dfb618cfd86",
"icons/Icon-512.png": "450b1f67ece34f88aa7b72581b1127ca",
"icons/Icon-maskable-192.png": "68c118f7e94ba68c670b0dfb618cfd86",
"icons/Icon-maskable-512.png": "450b1f67ece34f88aa7b72581b1127ca",
"index.html": "e96a80642ff626fb471f709ddfc67c8d",
"/": "e96a80642ff626fb471f709ddfc67c8d",
"main.dart.js": "b5554472e73b98b5e552e93e0c9ed753",
"manifest.json": "b39977896557d1a88b82f421d2d9d460",
"version.json": "6f0e82304218b4df19755ec756fab725"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
