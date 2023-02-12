'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "17b2cf444618286d948ad36347cc2947",
"assets/assets/app_icons/addwithpaste.png": "f87e8355b66a50583f6ba21dbcaa3a61",
"assets/assets/app_icons/addwithpaste2.png": "2b44a6d8b840f56dd75f1a9e7ddefaf9",
"assets/assets/app_icons/animation.gif": "3c61734e7bd00a017ff3b8f3c01d7e96",
"assets/assets/app_icons/bullet.png": "10d200ad5e892b5de4aa4baa087f0d2c",
"assets/assets/app_icons/curly.png": "d146f21425819cfa3e86e05a62e0f364",
"assets/assets/app_icons/demovideo1thumb.png": "ffba4a93fe7455b4a9dea52dc8990c70",
"assets/assets/app_icons/filter.png": "9074e65aae7a83cb965e2e920196250f",
"assets/assets/app_icons/flutter3dp.png": "bbe200a8fb8cedc951688ae345855fe2",
"assets/assets/app_icons/flutterlogo.png": "25945cf1d0cf7d508e02cb8c00eaeda6",
"assets/assets/app_icons/git.png": "4f71e21c699d933c41010a40f2ea3fea",
"assets/assets/app_icons/google.png": "0eb8078198b32ac9d48f60dc38d16bc3",
"assets/assets/app_icons/gradient.png": "a2e66b804bc2e6d9f2f72de16428e480",
"assets/assets/app_icons/gradientAnim.gif": "8eaafbc16c56e3724d09de01e98e3697",
"assets/assets/app_icons/linkedin.png": "9449e52f97bb9b80a2e560d6339805f5",
"assets/assets/app_icons/loading.gif": "f842e82a10bab3222ee88c3b16a5dfb5",
"assets/assets/app_icons/loadinganimnobg.gif": "236d689f90e506cb19eedae4af39d6f5",
"assets/assets/app_icons/man1.webp": "a83469ba50fa748e675a778c0fd8c37b",
"assets/assets/app_icons/menu.png": "348605d24aa688bac0f7fd381b326648",
"assets/assets/app_icons/nature.jpg": "7164eb969b59913277ab196795886f86",
"assets/assets/app_icons/notes.png": "b638a4773e56aa0fdf3e3db9aa933fbe",
"assets/assets/app_icons/paint.png": "b8d57b50ce9385c8cd6b3dc3a0f2807e",
"assets/assets/app_icons/paste1.png": "69c8986ff8043fd948cf62f4d1842433",
"assets/assets/app_icons/playstore.png": "fd53fc3ed492c70d4db90920da79f7d3",
"assets/assets/app_icons/share.png": "3c51e619ef54c9a858463713d135865c",
"assets/assets/app_icons/signout.png": "5e7897e17163218d5e6c4403dcd67720",
"assets/assets/app_icons/starr.png": "c3d53b19c9875d47459f6a83da459aaf",
"assets/assets/app_icons/theme.png": "2497f2d0bec1243f435fb3cea439417d",
"assets/assets/app_icons/webapp.png": "0293c74f9fc9bd0dc64da0ed598fd0de",
"assets/assets/app_icons/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/assets/custom_icons/circle.png": "52e4508f54075f4e98dd10d20c810e48",
"assets/assets/custom_icons/closeshape.png": "bba23413e25fc3aa0e6fbf4784574758",
"assets/assets/custom_icons/dots.png": "c93af59d3fe8fe6f52cd18f1c8586971",
"assets/assets/custom_icons/lineclosed.png": "567d1a79f62a357f7612dd070d1fd800",
"assets/assets/custom_icons/lines.png": "3a8f74fdfaf06c9a689f4e6e56f1425f",
"assets/assets/custom_icons/linesThick.png": "3dfdf6b32f6d8ac0fd19552dc4f90d0e",
"assets/assets/custom_icons/polyCurve.png": "87a412fd9ab36367abb6e35a8905c006",
"assets/assets/custom_icons/polygon.png": "9b22667bc9cc80d65666794e9650ba27",
"assets/assets/custom_icons/rect.png": "222a4b97352e33d2beb58219766c5326",
"assets/assets/custom_icons/triangle.png": "84835dab44c89058b9682e114401afe0",
"assets/assets/icons/export.png": "53eb46dbfdf8fa06aea016385b59fe18",
"assets/assets/icons/file.png": "340dff2cfcdad09e41994dc4913f3a5e",
"assets/assets/icons/files.png": "d442a59ef40fdfe86cdba3a0c0a54b16",
"assets/assets/icons/newfile.png": "ab9bd06f3b423ed18993c8eaa28bf826",
"assets/assets/icons/openfile.png": "31a6ce3697d2d02c2b669a9ae8e1d981",
"assets/assets/icons/pan.png": "a219f48efde11344f32feceede563347",
"assets/assets/icons/save.png": "35a163a812178b8ece17bddebbef96b5",
"assets/assets/icons/saveas.png": "5ae1e977df25b7de91e7ad0ef6683739",
"assets/assets/icons/translate.png": "ae17b023ed09334f8fe3b1374b395cc5",
"assets/assets/icons/translate_arrow.png": "b1ca9bdab309012ecc1fac03e72ea67a",
"assets/assets/icons/translate_arrow_transp.png": "9ee674374edfad8ddce2fb1b271b4390",
"assets/assets/icons/youtube.png": "48e0b02dd613c829619a6369b6530548",
"assets/assets/library/circlebounce.json": "31d469deeba6731a8232deea78f6d9d0",
"assets/assets/library/circlebounce2.json": "858c1404b730bb87d2309818e2f0784d",
"assets/assets/library/circlebounce3.json": "00918878d81b6a4aff3e16ea27847218",
"assets/assets/library/HomeMenu.json": "8aed7fb047f1ab333db4f0b76fbf21d9",
"assets/assets/library/MultiPolygon.json": "7a2cda420ae7f8afa3dec05664cc079f",
"assets/assets/library/PlayPause.json": "5a81296ef4616a3f4e329068e0a6dd74",
"assets/assets/library/PlayPause1.json": "325643a3604fb8ce1f0eb2173808eab9",
"assets/assets/library/Squares.json": "dd7c933b93bbfedae30778a9df75ff43",
"assets/assets/logos/annim.gif": "77ecce4b999fd8e29e27f4aa80242bac",
"assets/assets/logos/annim2.gif": "14e655c9edfeb44a30d4219c6ca347f2",
"assets/assets/logos/annim3.gif": "eaa9d5ef569a607872f6ce1d5068d8b2",
"assets/assets/logos/annim4.gif": "66663d1d934027498806f2c7a2c31b86",
"assets/assets/logos/annim5.gif": "3d6cbaf34441f490fd0d3c69e33e836f",
"assets/assets/logos/annim6.gif": "d46454b6222ea8b560ad639dcaa2125c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "474b02729e386775d89095d72a60557f",
"assets/packages/annimation/assets/anim.json": "a69ce06e4a6296022a46a0b4d725cdeb",
"assets/packages/annimation/assets/anim2.json": "d3148c0b04d63da0cd35a85b11dc7d52",
"assets/packages/annimation/assets/anim3.json": "8f2565a580e2782df545fdc38220228c",
"assets/packages/annimation/assets/anim4.json": "e7bc4aa6ae6e155b3be1fdbe1d244da2",
"assets/packages/annimation/assets/anim5.json": "886751d1db793758c22fdec1a4046b56",
"assets/packages/annimation/assets/anim6.json": "33e2405a2e8bf21c4acc96c38a4ef551",
"assets/packages/annimation/assets/anim7.json": "f70c8cd1b08e2523d83e634c18af9cb9",
"assets/packages/annimation/assets/anim8.json": "027f95c451779f388aead093c222a9b8",
"assets/packages/annimation/assets/circlebounce.json": "31d469deeba6731a8232deea78f6d9d0",
"assets/packages/annimation/assets/circlebounce2.json": "858c1404b730bb87d2309818e2f0784d",
"assets/packages/annimation/assets/circlebounce3.json": "00918878d81b6a4aff3e16ea27847218",
"assets/packages/annimation/assets/HomeMenu.json": "8aed7fb047f1ab333db4f0b76fbf21d9",
"assets/packages/annimation/assets/MultiPolygon.json": "7a2cda420ae7f8afa3dec05664cc079f",
"assets/packages/annimation/assets/PlayPause.json": "5a81296ef4616a3f4e329068e0a6dd74",
"assets/packages/annimation/assets/PlayPause1.json": "325643a3604fb8ce1f0eb2173808eab9",
"assets/packages/annimation/assets/Segments.json": "dd7c933b93bbfedae30778a9df75ff43",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "b3e27c0d08da98c43257e56014beffb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "6b09e18e578c45830a87810682a88dc1",
"icons/android-chrome-512x512.png": "d6c4383175b62da5c0c9e16a1344d2bf",
"icons/apple-touch-icon.png": "f62ece6f84d9b2daea77e82daea83b8c",
"index.html": "8a277f3ad7299bc87dc78ceda2bb7144",
"/": "8a277f3ad7299bc87dc78ceda2bb7144",
"logo.png": "6b09e18e578c45830a87810682a88dc1",
"main.dart.js": "a8df6efcc180f7aee1cf5357d984d6e7",
"manifest.json": "c2ca1d0b41fba01c53bebbd61c54bb82",
"version.json": "e9355d85fb93ca3b2d6b18f05c9b1525"
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
