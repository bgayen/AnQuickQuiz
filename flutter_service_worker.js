'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c47b3b6e1beb88802a721cb0d8e38d8e",
".git/config": "d8c2c8dfaf86e2491b7b28575f4dfcd9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "56511467186701e294e969dc9395c7d9",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa9cbdc030d575c7ba5438ba9b6aae08",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00a305e1b6f2e3404e3f7cc9c5b4b095",
".git/logs/refs/heads/br-QuickQuiz": "00a305e1b6f2e3404e3f7cc9c5b4b095",
".git/logs/refs/remotes/origin/br-QuickQuiz": "70a8b3906643df9a4bfce5e0b842ba67",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/09/4247680e8b58470224c1dd6dfdf258749a97f4": "86c40a224478c385c1c78cf0efaf6509",
".git/objects/0f/288afbeafe247b5365c57c92eb4fe627c2f803": "4f09195a169c5e5a6caf52aede988296",
".git/objects/19/efe27925a7d2f1b3fc9147fdee7a5c51c64d96": "f83624b5220b12db3759571e8eebb47b",
".git/objects/20/84a652bf51147c38aca9acc892ff82f3e4548a": "5693016e06db33bbb9abdf98c3c50b85",
".git/objects/21/e9d798e97fa668c9292edbe5142c296849fd03": "0261e2f27be42996602631a983b02e29",
".git/objects/24/b298fb480788314375dc87b9bf542c54e3215e": "f640932f43dbfb3e1cd0a09e3b0ba7d2",
".git/objects/25/f03e6ab93fd8778e807f388bab77b8944b2c46": "84b610c765b33c2ac9cf904e1690e84d",
".git/objects/2e/89927aaf532304fc783ba3bc5c1f9cd85062a5": "74a6eea12df70c14ffff77b59ab7295d",
".git/objects/32/60b22982edbeb58876f48955da57e43c247e08": "f7d739d5427fc5af914c493f7a4f6d86",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/e1d7a44e5a121f5ca5d0966305985828e7006a": "39f8d43a216e8efb0494996498f397bf",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/78fdf902bf6ee3eea8a70e160864bc31cf6823": "162500917ba57afbab01695c3a74dcca",
".git/objects/3f/f1143d52b5a7b0e9afd27c1af8927f30ecd64a": "dcce194860c1c42fb5dc84d3c8ab333c",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/45/9949a4cd3fb0330b25088b7a21946e9372ad2f": "822fb7c10e1c0c534ee883b8e66297a5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/dcfb1c6f36b2cf4115633442fd1abca2bf0469": "9b5e6b3b60131a55dbe034411d033db8",
".git/objects/53/5a8efb05f9bce4e71da2f222a1e5554df904f2": "37800960ca16af82eee935fb3f76ba63",
".git/objects/55/ed42c734abea0dbebd0b7875bbde02d26b1d8d": "60c6597db2bced98fbe01437c809cd9b",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/788f312202e5b0d5dab805e1df0f8ccbc3c998": "25a156d889c1bfa78ea796b737f2aefb",
".git/objects/59/759f8a2dcd22db6689ed273fcbd6fd4a518b79": "339648e2074d3f9298444b051505df3e",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5a/9550f44ec169aa1c23714f7c54b1f054024469": "3e732067fd275f64488b1a0cb4e25a35",
".git/objects/5c/a59c30ea2ff6196d438e9d8204ef5e210a5924": "9978e9991020b7ac8274d935068de52e",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6a/9c0f4f9339ee9dc2aa11de88a54a97aafa0cd1": "eb06910272c1bb768476f1a24d9a2a4b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/e4ad4395d7c6e2cccea8b8601775a1acae1fcc": "ab895fac8deb35e71970a5cba01325de",
".git/objects/74/db0732049a7e194d5efeb2d5b712b422cfd012": "4bbe8bbb725a6c2ed3854e26a6c4d14c",
".git/objects/88/c04ebc9fb56992a5ce6faedc359d91ad52d49d": "e48d874ff0e6359049eb085b0171edf4",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8d/68ba49c6df7d9a90a41bc91c052418c1a23d49": "542da25b977790bb13e1123550c3bd13",
".git/objects/90/a356db5d430266ff8877d94e5cc805ae0de0a7": "3e43e87a9a91eca3913bf06ce695d3b9",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/a36887812e5ec9bbf25ba675ad1232129b8e98": "f0ac5093b1ca3beadca8226ccc79b43f",
".git/objects/9b/aced1c94565fd9895784559398f3d851d072a0": "24ec1a277a8c745a4dfcb939dd3b6972",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/a39552b375a1f5e1a3040189302661505d7dae": "0c7a51c6d8da99a740e9d25549862ef1",
".git/objects/a7/55a23e195941b6fe9058a7a8d09fd69fa9e56e": "59a82a4c746952e94a4dcbb445a7dbd6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/8abba8b07175b199044ad8c717d928e9501157": "b22aa5c80e33481e4786423f37b57393",
".git/objects/ae/d0d42614ad9fba4e5b1863b487873333c29cc5": "e4d7cbbcfaf66d95c81ce4515fe74885",
".git/objects/b6/3b4f895228ad38c418a7be4868729c01d2fbf0": "3ba71592d0428bc1973b39df405ffaf6",
".git/objects/b6/668ad9abaa8697644c64f98444f7149d4672f7": "47d5ac594ebf73d703de6755a7a2c3e7",
".git/objects/bd/0b1bbe642d6e21f6897d5e4e67b1dc4e4139c6": "e50ff06ff0c0aed9861776a5a754e273",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d3/1b88a4e4003aa6addc925a6f1a7c47be3778a2": "b9bf45f0883b586aaa497b0ff0a12b90",
".git/objects/d3/8ae7d0aad9d4238f40c555defbdf2505ccd8a2": "82684cfd09db80f03692000e354fa41a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a156a20eefb0404e88c2cd5726897fb5dec1fc": "7b4a18b04de73213d0d25b3e6d4207f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/94a0958b71c2c5bd4e8f919ef97bdacec0c1a4": "7bd776eee5569a9b4f6c4d95f622206e",
".git/objects/e0/36bd393bf116b39fb901db7b072211d3efb2c3": "aca1c9109923c77b98683f3225be3ec2",
".git/objects/e0/b3c30c5a3eb3707dbbc26c6d9158bfacd7b7c8": "517a72aaff9333f0e987389a4e219c96",
".git/objects/e2/dada1de98406cf1fc643971959bdd5bcd31b86": "c66308eebc107c6b8257712c70b9cb32",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a3fd6dfc7a423a80f64ba43cb939130bf64f4f": "1f94bc7e6ca5e74b4bcab5c01b55f627",
".git/objects/ee/9d6f6fa5ba1109d76df46e6bba52ae40655e04": "0d1e25afaa29ea6d6a995b2894cb3afa",
".git/objects/ef/0e8b52af3d19d5f2179ef723d4cbf83a4e46fc": "2920cc8869beb199c4a5afd25a81f980",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/880c1933c5636160913b12c5e8d1b0f8f02944": "749ee278ce2904c0647cd0d8d692a243",
".git/objects/f2/ebe86217b7dd5fb92c47ed086215a260b10eff": "45d61e6a247e288306b08c7e9252d97c",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/201869a07156a57ec04e8961cc46f1f0657686": "2c2ea2e76a63851ff55f35350c69ad0c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/7a4f9cc1ed183fe14b5c57dd8d95259ea3ae36": "f033997e40db64743b864aaf118200fe",
".git/objects/fc/3b6b4f8075a9632f9e9528847fb6996c48af21": "c544e43f794595a1ce62706204060b32",
".git/refs/heads/br-QuickQuiz": "5cddf6a2d0fe6c20b9a6592c529fc59b",
".git/refs/remotes/origin/br-QuickQuiz": "5cddf6a2d0fe6c20b9a6592c529fc59b",
"assets/AssetManifest.bin": "b2703b18604dd9a6ee4fe44fb195939f",
"assets/AssetManifest.bin.json": "7819e469023846335bf05fd0243228ed",
"assets/AssetManifest.json": "c58203834de9cb5470d441053c616f6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/images/CTSlogo.png": "70c6332ca7d55520944ea81a66269641",
"assets/images/mslogo.png": "de7ba8212a945d2fee3c006fe54e4be5",
"assets/images/Picture2.jpg": "3e5d1e37ae3809cac1b52d019a443c34",
"assets/NOTICES": "f81b1e275d4708db2fd6f013035e02ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "96918ec82b3585ec59e7e18a883e5820",
"favicon.png": "f3a8a028e4dedeb1120d6945b2805ff1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"Flutterweb.zip": "208b29e5ba68535aa657eed7a7e04f37",
"flutter_bootstrap.js": "c9564452a0ce99d3eacd142773fc9e98",
"icons/apple-touch-icon.png": "0b5b73a2141a57343cc341a32662faca",
"icons/favicon.ico": "96918ec82b3585ec59e7e18a883e5820",
"icons/icon-192-maskable.png": "c3ceec94d30946d6874fa179d32d1d7c",
"icons/Icon-192.png": "0ace8c11504733afea2e46876c67072a",
"icons/icon-512-maskable.png": "912f5c37b24ce60e14e5cf35d9150527",
"icons/Icon-512.png": "f3a8a028e4dedeb1120d6945b2805ff1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27b4481c0d43edeaf180e6c8ac7103e8",
"/": "27b4481c0d43edeaf180e6c8ac7103e8",
"main.dart.js": "df54aca01c9a340e7db79bc63f44d296",
"manifest.json": "8aa623095a9e8a9178427613873983bd",
"version.json": "f8aec86dc6b47921c4032e9a998a5697"};
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
