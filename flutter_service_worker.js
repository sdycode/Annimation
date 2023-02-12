'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2d8484153e666d8b41eb6605ff9b744",
".git/config": "20720487517f08c0e7e257996c186d1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b45634ae9066580b07af5d9eb73a19b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "40ae4972b45be430a46b431c53669c1b",
".git/logs/refs/heads/master": "40ae4972b45be430a46b431c53669c1b",
".git/logs/refs/remotes/origin/master": "d7f50f00eb4704b8e3c4840e40510883",
".git/objects/03/c94baf95a0459360abedc907662c71d8fce20f": "1dfa1756bee6757c8bfe2225d3586062",
".git/objects/06/565fd00b17ce5e93179ef540a5c263ce519d23": "f594dfdae6fc86c95b7502768ba75ae3",
".git/objects/0d/f53eaaf5c41ab63f36613377e6b21c5517e17c": "af207d6614ab49c7f2e2e0f7f3cce329",
".git/objects/0e/cdd882fee9f830a03a8f9a91f46896d3dda0e5": "9ad8fc1e1c8c25cab1f87ac2cf71ebe2",
".git/objects/11/410ef6d5672cb1e79742a3e6d81235f1c3c0c1": "bccacd3324cfc592335d2dcbfe0e80ff",
".git/objects/12/192457dae2d2fffceb873584dd835bd826fe3b": "bede10a9cb85d83daf81932d1b96b8ad",
".git/objects/12/d9deb94661b615f4028d2c4f33c62d26664dd1": "7a62c69eadd204abb8aa62358f94612d",
".git/objects/13/0c2a60cb7a146a99db1294c4bb65560a403964": "d5abca77eade7ba255bb1e965c204fd9",
".git/objects/13/3eea3a94e0db82dd4c54080d480a6f19073b24": "bb55d7e77043d524b162641bc93c69bc",
".git/objects/15/3aa153b7655c4d6a62229ef7a9cb34b998e55c": "f9ac1b105320ce81f274e627c4276eb8",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/21/9005208cded11ba279d65f9da1b3598ee3990e": "1cc2aad14ed6d583e5486f9ea8e8d5c4",
".git/objects/23/4bcea28aeb1a4bcebedc50df52441f10d2cfa3": "9c69e39de987f2ce7c19e736e37bb33c",
".git/objects/24/16752050304bd9adcabc28effe81dd8cad163b": "527a6c524400ac1aa1da19fd84a55568",
".git/objects/24/49c158e48ee023b59ba05331a35a3711ce00eb": "f78220f62f8ed578f9639db3f67ab7be",
".git/objects/26/05ddd654c1d4f97f069ee451b9772d6e8494bf": "a6d0696165b12b5d2329711437398f89",
".git/objects/26/18c5424699ffd9cc81243980c39415da10e9fc": "d4850dee176e31a8d16cfaea39ed462a",
".git/objects/27/96cf7f2aba7b6309188a2aa58365dd87d35fc6": "83f6104d7888cc37608cf74ad9a11ccd",
".git/objects/28/139e45a4270bbd39d94451d4158de4a00589eb": "e1201574b31a2f547759ecece8df7cf6",
".git/objects/2b/052195fe08dcc84690e1c6cb6feba5bfff91fa": "ebb40aae991b12665dab3ccfd9b2e7c9",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/30/5f1ba1d8f4f8e7380d0f0ef6e0eac46a43e39f": "fe97c9ad3948f32adcd0e35c621b61cf",
".git/objects/30/cac04847e56b5ed0ab76015cec9f664ac9dd3c": "b169712ef6cf9bf8903c68fe587c925e",
".git/objects/33/5a010ed377a76696ed7117314f04d80fb6bad9": "36386787ff4f84ab33621d8f41db0ada",
".git/objects/35/9a1c017035d72b6109bfec715e41704e6dd85d": "8718affea4e5943df5d5eac83ec4b552",
".git/objects/3e/20fd823d5722bc56530a11f485d664bfbd793a": "c0b76a9c6bd2cd009edde6092ed3d8b0",
".git/objects/3e/f750f742236c70cb22d4cdefc5437211fe6753": "a0e8c87206b28f84d059e6de11127622",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/81c94939220d659cd33026c2f6b934bd4e2034": "4d70ee6fb6540d5edfb23b6d0f7ed109",
".git/objects/43/a714b4e989367a374fc9d14c9682564e514e4e": "cdfa15671b0f02e6cee138753bbba35d",
".git/objects/43/fb6c7429ba24c7a23b5a286ba4ee5f9b895230": "03d492bee6f211767494dd2da3b1a3d5",
".git/objects/45/b7e1b330c964d2ce6eecdd3c0c9bf755626a79": "d0c83587a4acce67653f933a16cebf2d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/6906d129b4943628f5c2fe9b7e776719a38779": "2d80f7877d6e28799c11240479d727c6",
".git/objects/4d/384d0c21cd0000446171a276c45858ca6547f0": "4fd2fee2a09eed8b5ecff42df84a7d03",
".git/objects/4f/6570d338060e1cfb71a48b98e2ca7799d847ec": "ea8a1498c056c6c74a9e72af49f42bbe",
".git/objects/4f/d92f714fd707fd0246aa7af314836b43d31ab6": "34117ce6263494db7f22746fb2a519a9",
".git/objects/50/8d4d083f339ca804c551e476508abcbecc53ee": "217154118961bdd2727ff6ca322d194e",
".git/objects/51/94e93f4f30da0c254bf938c28cb801938ea3f8": "14b9ced3f3af0ad2c96940f288f51e7c",
".git/objects/52/f769a89a63895e244de9fe4f53c1b971037f5b": "d76f6e70e92e6836226641b8fb7e3969",
".git/objects/53/a0f5d968c3e218bd99c2b4851cb00479292ca1": "a5b99b57d22d80947d4eaafd2942f9b9",
".git/objects/54/e9aaa8e564c56896b9cccdeebde562307b3bdc": "8225ec0519c05dc189255c6e22f4f75a",
".git/objects/56/9ac70de3979b1fa794a6211bdf556cb609f8e7": "ab6141569f23f9c87cd31f14d5f66fb0",
".git/objects/56/f76c2a236970ddeed6c4fbc1fa89f309783bac": "ed10aff509ef8b3355f30c4baf40c33e",
".git/objects/59/076bf577a5e3b078389f1603c73d863a061f15": "cf8dc1496a08cdc72f6f9dbcb5d2ced8",
".git/objects/5c/159799c3aa40373116b05f1a67230bf3311fcc": "54d1647bdef86016bd60fab659a2175e",
".git/objects/61/173c0d56d381104bc2a4841c8c978c6817146a": "572c8ce5c5d2bafab312af6319b4a59a",
".git/objects/61/dc0e4b78f45ecfc1916f6ca5e8f2c320bd483d": "443787625634a0e8cc742f1f614c3523",
".git/objects/62/4cfb1a0df17eadc961f96013aa12ae9a897a00": "224b4638942e275bb6dde4bbe9d83b07",
".git/objects/6b/7fae2a369bfc5394444a630437b31fda8f3b39": "4c3ab2d712b53718890e73fc69e82fbc",
".git/objects/6b/d0e837034ab04552f202729c68fba34c7c82a3": "8798f85fa5bfd6e0da5a48937b8ddae8",
".git/objects/6d/2336f8c9212a356f8bf1724aaaffc48cde6e4f": "9681441d9e02f22e9be9272f74d78b03",
".git/objects/6d/6b06cd1e917a914a921227c5861cdbfc261316": "d90c4ca4dd934b314e9a9ce4ed42dd3d",
".git/objects/6f/7cfcdfdb835869f5ef77d9add6be594cd42ee4": "9436668a54c3f3cbb6034f284690206a",
".git/objects/78/af1db9f744d5e366dabf443316c50373fd03c1": "b5d502ed461b3532a991219aa3441825",
".git/objects/79/5bf374a220dbf805d819217790a1a4584771c8": "47c32787a0cc3ebb7bfb82bc62616526",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/df9a4bc8f632eae43558cb4db77c94e4c75349": "08e479b6925f4c8e805a646159310bee",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/1ee4de4e42d7977f0412df0c829c864d8a5c41": "57fc67bc585ac1ae24b175fbc87da123",
".git/objects/84/fdc91c15f153ce52fa853c66d9e966af0403ef": "f0cfae09f563c80bb83ae297f325b62c",
".git/objects/87/1773c052102318287409468fae9233f815da8f": "7425fa8ccc2012ddab79c48073c1e4ca",
".git/objects/88/7a5040df58de0fee5c2d6c2e899526c9607091": "c1e2d694b82bd1446a3468dba5380f70",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/6bafd821d0a17dd7ae3165e3ffdfe2bc4842bd": "e9be686636400128f3a26a4fa6102da6",
".git/objects/95/5829d989f7cd18539521e5a646a1d970ee4a52": "1ceb7452c7ac8b06d424ecc2dbf13907",
".git/objects/97/34a09d9a307179e8516c81656305e15e43c887": "a5421fca0aba019954714291e2601f3f",
".git/objects/97/4b8ce610e21daa0a45010eae1f3f73d2b353b1": "fdedfc5ad4fa4cb7d4ab63ecce72e592",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9b/018e613f5c13194adf981121c14a8d0fc1f17e": "d4771c82265c18d6a5b29f82f4928df1",
".git/objects/9f/287b7c9782f299f5ebfc110720b91d679c323b": "1bdbccc720b61d20b946fa0bdf2d31a5",
".git/objects/a0/3fe3f50dca1f83c0fb9501c3c262f1cf079d8c": "75c10e0abd163076e25cd55f0407562a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/9ace96375d4ebf5a471973a2b5b1da99414d1d": "75115775d9df5d8f2e20b3c3a3f2ee7b",
".git/objects/a3/7ac1805c9f2e8b68b5a2d65768d8de6b85f193": "669c117ca78eb5a915d3cb74f8925201",
".git/objects/a7/e0ad9196c393657d2a9a721aadd2ecb55a0868": "7695834d47616a64573a5e7d56002bd8",
".git/objects/a8/ee4f109c37bf4a9af5c86b1a45fd4d98756d85": "db054ecf760a0d73b48f4e2e2a22da89",
".git/objects/ac/74fca9d51df1debc40e0d67766aa8f140eb334": "e0d1c3a72ab0f79d398923c71e2e1b20",
".git/objects/ae/e3e22af7b53836812f8d83e0edeff787e2fdef": "2ad3483614844602336743d3c610eb4f",
".git/objects/af/99e26be4d011579288c43134601678ae771fc7": "a100c52fc43cb83d57f7e6cf4419c2a0",
".git/objects/af/dc053e2a021cb33f5fd492b6311436f0ab1a5e": "89ddc4ed947a5d3ca1ace470f235dabc",
".git/objects/b2/760728b1dde260f8428c7dc8d0540aa1ff7921": "ed6acd892d586d2ae5ec54accfc6219f",
".git/objects/b2/9cb9cb443abb8ad6954c8e293183281cbaa89f": "22eed5933a03bbb35a18bd0485b66a03",
".git/objects/b5/b14cbbe824146ea9897c8cd978078b455a7a05": "f91a937fa45a683623d00f27d84a40ee",
".git/objects/b5/da838c9a15665cebb842335ceeb5015948ce96": "477cf351d6cb69bafa1fb69239e36efb",
".git/objects/b7/521a0de59bfa7dbd13fe87e5e1f840bc53bf42": "671ec0888ff1d70ccac665597cba1716",
".git/objects/b8/9fc93b91bc52850367c4d3dab8eb36105d7aa7": "0edb432fa14b3769e46fe57076a0ebfb",
".git/objects/b8/b1fd853a50c32537415f6dac091303d1dbc29e": "e589de84155332b361304941f3d1d1a0",
".git/objects/b9/3b400d621b41a52e3371af681d6b6872835519": "3724172814d9b5381b5f8c0824aeaaf6",
".git/objects/cb/c21ecaffd02f2786cb0e2f62eadd26eba096d5": "b81e93a968d090e878256e00bba4e00e",
".git/objects/cb/c8935ce7f97c70080f26b7df152c83f170bc46": "855b022c0442c1969956e994d64d0439",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/61d544fc6063ffb4c22336c1c8baad190d1b39": "12729de060d2a1f755fdf8a1e6aaff1f",
".git/objects/cf/c6c3a4d5b963cf11d5d60a91d80e022f897f68": "8c01356bdb5287b0a37b9b9f9103eb8b",
".git/objects/d2/30c6d2b8fc9056e2f9625742bc6d24d23d8379": "dacd8bea3813ea67a059368cc55d42b2",
".git/objects/d5/183ecc10dd4a5feb9fdd3dc31d92e77d573fb0": "5ea9515a45482263f85219d13b825181",
".git/objects/d7/e599a1595a6ec77f3d02d6f227e84353aec774": "c1195c8e07fe64de7679c1492cce5ea5",
".git/objects/dc/7a89889aea81f4de2a8024b287ac2316a5b29b": "e48fee2a028280621c0cc13ae01ac3fc",
".git/objects/dd/e8f76c12c3e78cdba77b1d238491d9d15fd001": "d6623a699fdb662a8f0e090daeec3b3b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/ffa30157c90895b45310ba4210675b389d02f0": "139ce0f4978c848ee50960ec26a1d64f",
".git/objects/e1/07da8e4e7a259a740efe6a1e0614a85fbd914e": "b70586af58230a4058bcadb6d4bef0ef",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/fd123af7fb5728800a5d8ba450bb96a960c603": "9ecdcbb93af8e0ee1375827be8156888",
".git/objects/eb/bf3ea18dd8cc4f2110027643197cac409ac086": "43e77e618efeb7886715017a113ac6ad",
".git/objects/ec/a145454c013352b6a011687134bc06c4c9a328": "338df1e774acb098ece0cfb3e283f375",
".git/objects/f0/36e1b2033c02f98e44ff74d0507380c8ef21e3": "dba3e51e15d6f7746f9bf7f4226d6d84",
".git/objects/fb/f31e37addfc54b410ad52721ea2413394789de": "74d518d700fcdb93c4cff80015be81c4",
".git/objects/ff/6706d8a02c82dbbf6a02f0f5fbc17675099dd3": "57cb2622cf9dca629a28cea9152e20f3",
".git/refs/heads/master": "ab36ff1731eea165aec44c018fa66052",
".git/refs/remotes/origin/master": "ab36ff1731eea165aec44c018fa66052",
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
"index.html": "a0f8f5aa15fe967faf1d9bd50624b418",
"/": "a0f8f5aa15fe967faf1d9bd50624b418",
"logo.png": "6b09e18e578c45830a87810682a88dc1",
"main.dart.js": "15c4604d68e0000ac17bb6890b47aefc",
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
