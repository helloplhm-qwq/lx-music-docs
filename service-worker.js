if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let f={};const t=e=>a(e,i),r={module:{uri:i},exports:f,require:t};s[i]=Promise.all(d.map((e=>r[e]||t(e)))).then((e=>(c(...e),f)))}}define(["./workbox-53bdbe38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"LX Music"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.08515132.js",revision:"9cf27f018e1f932d1892a8c44594a226"},{url:"assets/404.html.096a21df.js",revision:"33fe3dca556f4c76d66fa468cfefb353"},{url:"assets/antivirus-software.html.74c1b652.js",revision:"3ca2f7f373145704dd747883ed7039f0"},{url:"assets/antivirus-software.html.ad3937d1.js",revision:"8f199b47791d8ad2f50b442875029c1b"},{url:"assets/antivirus-software.html.ca93ffb5.js",revision:"fb02c59c806b59079ebcb3d2c43d672f"},{url:"assets/antivirus-software.html.d5082955.js",revision:"3aadb30e348079a22f18def81fcd39cf"},{url:"assets/app.80710013.js",revision:"e2f362fce4ca24b35f7261597f3aa2f6"},{url:"assets/auto.264f6c8c.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/background-play.html.203a66a0.js",revision:"d7f2f98fb3fdab7dde0f1a6511ed925e"},{url:"assets/background-play.html.8db2dd83.js",revision:"47d2fc66de084e83ad505410fb144b5b"},{url:"assets/backup.html.0afc41e8.js",revision:"da02d1b309c6f6becd81737b3190851a"},{url:"assets/backup.html.51bfbad7.js",revision:"250736218c9dfca12cf1017bad0333ec"},{url:"assets/backup.html.5624b383.js",revision:"38a159a9957d122ae9c738fd3a3a9f22"},{url:"assets/backup.html.5f2b980c.js",revision:"fc75162cdb0ae252d35338414af3daed"},{url:"assets/cannot-connect-internet.html.73069717.js",revision:"e3083243ff9cf8481879ee0f835c280f"},{url:"assets/cannot-connect-internet.html.e6a163c8.js",revision:"f1edc5fe58022c0f19b8db5fecb00985"},{url:"assets/cannot-download.html.3d72075c.js",revision:"a91a07d5f4ccbb412d60942f9fcb1ccb"},{url:"assets/cannot-download.html.d229dfb6.js",revision:"652b18e21fe70b8d3c5df15a6c39b947"},{url:"assets/cannot-download.html.f3643b73.js",revision:"079923927167f898b846871fb0d3c5ef"},{url:"assets/cannot-download.html.fac24514.js",revision:"db1bfd133837b2609762ec1d2ac76230"},{url:"assets/cannot-play.html.2ac36cb4.js",revision:"8fa472c078f2fc190c9ca6a6670b318a"},{url:"assets/cannot-play.html.bfad7105.js",revision:"070640adb5bfe2c3aa04d9e06359d6d7"},{url:"assets/cannot-play.html.c8ee3a5d.js",revision:"3fc069c45992e847746d5cc8d1fd11e6"},{url:"assets/cannot-play.html.d33942ca.js",revision:"b4814dee797532b5e51faeb71c6c6b97"},{url:"assets/cannot-update.html.3579e3cb.js",revision:"dc08aef53883adefc55408ef3a4c52ce"},{url:"assets/cannot-update.html.a2d93034.js",revision:"039defcf4b17888f4b21aa182282cdea"},{url:"assets/change-list-position.html.07a02030.js",revision:"19e7da10a7e1a40d6aac7e63f36af65a"},{url:"assets/change-list-position.html.c393d3a2.js",revision:"abec87924cb404061b991ceebcd05575"},{url:"assets/custom-source.html.1629c2d6.js",revision:"d0973469cf8b66bd3d3ce931e5dc622c"},{url:"assets/custom-source.html.e6688242.js",revision:"8d30539fa13ac1c0c70deca36f55c70f"},{url:"assets/data-path.html.738c8caa.js",revision:"a7392037dcd7a3b7f2359bd33c570ad1"},{url:"assets/data-path.html.8749b4d8.js",revision:"f185f5c3b88c38b93bcb9b2be8ae61af"},{url:"assets/data-path.html.ba14c6ee.js",revision:"7c657873c019afa6e2fb8b58d1cdfa4b"},{url:"assets/data-path.html.c78bb3b0.js",revision:"7db6267f003216e032f59915a3b73b22"},{url:"assets/desktop-lyric.html.0908eead.js",revision:"3d0e61cd09c5d318f8001e8dc8d9f427"},{url:"assets/desktop-lyric.html.96e4587a.js",revision:"6161a8e534d0d0a767aff32d7ab6516b"},{url:"assets/desktop-lyric.html.99d14575.js",revision:"1ee5399730d75db0e66b21608fe6940d"},{url:"assets/desktop-lyric.html.d7b36d89.js",revision:"cd1cf25a9834c53c7a4a58f95810a3ab"},{url:"assets/flowchart.parse.ee90d7e0.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/headphones-turn-off-unexpectedly.html.14b9fa8c.js",revision:"8e31308984060cf82e9ad936389c123c"},{url:"assets/headphones-turn-off-unexpectedly.html.ca32e735.js",revision:"e49f3e8f1455c6e67dc4e648845aaa60"},{url:"assets/highlight.esm.d982e650.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/hotkey.html.2ac49234.js",revision:"d21fcc7940b75f0a0050e094cbddc5d4"},{url:"assets/hotkey.html.b549c1ce.js",revision:"2e116fd5f3f08db3e69cac5fc8015746"},{url:"assets/index.cac02f97.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.17699523.js",revision:"5effc2f10bc2a119ae21b2e017282601"},{url:"assets/index.html.38e69361.js",revision:"cbbb8024e2c887d93e2c4c9a19ff577a"},{url:"assets/index.html.436db486.js",revision:"a136bb61d5fdc25fd61ac433c51ff323"},{url:"assets/index.html.67a6d932.js",revision:"8a3d7e1e87701b6126b1ee58008be3b5"},{url:"assets/index.html.7387770b.js",revision:"c0deefc7e08e8fcf8e1d9b00d31c9e98"},{url:"assets/index.html.74033d9e.js",revision:"14d51be3ee229f27f081a8dbe56eb1b5"},{url:"assets/index.html.82d14a31.js",revision:"80c46b6951317c8f40d62e466291849c"},{url:"assets/index.html.848471ac.js",revision:"163c633cd642f2d506a6c537b321d1b0"},{url:"assets/index.html.9055c38d.js",revision:"5f538f0d70fe6f342788a3f25d254bc4"},{url:"assets/index.html.91525ea3.js",revision:"4e395cafff9e9c0e93d6975c77a95539"},{url:"assets/index.html.a8d7b843.js",revision:"f7d3d1a86bd91a5cc073d467d73fd568"},{url:"assets/index.html.a9ef8c6a.js",revision:"1f53b31b862520218f3ea3c2a782db1c"},{url:"assets/index.html.ba20f2a7.js",revision:"d55ba91328541c6883731320440a588e"},{url:"assets/index.html.caef21a5.js",revision:"f3b3fb76828a4b63d61ad2d36690a3cc"},{url:"assets/index.html.d00e326b.js",revision:"bbf42c1f3623e270aede3eefaa196468"},{url:"assets/index.html.d8113f23.js",revision:"e693c8c19578c232d79e73c7078b68ba"},{url:"assets/index.html.f789ac1f.js",revision:"342062ac0ec23af39e295773836c1ff8"},{url:"assets/index.html.fe470c43.js",revision:"0f42029246fa0d0fd8a0c45501045709"},{url:"assets/install-failed.html.4d217c03.js",revision:"769eaa8213b6a9643e4049569ca795b4"},{url:"assets/install-failed.html.eedf4028.js",revision:"76b6902b855f3692f13b70dda963c106"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/license.html.0433f7d9.js",revision:"f4a902b8cd7d031fc3166754864b1461"},{url:"assets/license.html.348d8d4b.js",revision:"d2df26193c8e102d361280052053a502"},{url:"assets/license.html.7b3fa452.js",revision:"3d680ad156342250f73470b1797e029d"},{url:"assets/license.html.f2289f79.js",revision:"ddf8eb718a51859e10a8ce52ad5da48f"},{url:"assets/linux.html.7ebd6438.js",revision:"7ca5baf793799f30a995aa21755773c4"},{url:"assets/linux.html.fa580b7f.js",revision:"cdb24db700d29c61f1adf24753526356"},{url:"assets/list-multiple-selection.html.3bd355c2.js",revision:"7c67f2da3476a01fb8d2b178e6126d71"},{url:"assets/list-multiple-selection.html.5f3a8377.js",revision:"c694604f9e6fde21b48aeeed42a8abcf"},{url:"assets/list-multiple-selection.html.e7a3edbc.js",revision:"5e86bdf8e3c311477f6c3cdfe91857d6"},{url:"assets/list-multiple-selection.html.f92bd296.js",revision:"9c9331fff58f7322d5b234cea8da2d3f"},{url:"assets/list-play-all.html.58fad0e5.js",revision:"63e900fab406facd32b988e23f6ba051"},{url:"assets/list-play-all.html.d6d59fce.js",revision:"c38b455f3e441145b456a7c7bc5e2555"},{url:"assets/list-play-all.html.de86ee0c.js",revision:"ee0c749338bb6e08d5b0bc5fc09ebec3"},{url:"assets/list-play-all.html.f6e99770.js",revision:"50eddac25de65c44f22e41d7b628de35"},{url:"assets/markdown.esm.832a189d.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.a3f84b6f.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.e3b5d21d.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.3c361cb7.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/open-songlist.html.0b8f45bd.js",revision:"f12398b97d999914979465f6c83a7862"},{url:"assets/open-songlist.html.649b5e18.js",revision:"bf9a48a6d579b0b028855210772ea469"},{url:"assets/open-songlist.html.a407c7fd.js",revision:"d0cf788aecf5ddc95225748ce56b00cf"},{url:"assets/open-songlist.html.a9e9f8e8.js",revision:"945334b47c151281dad949cf9b969d76"},{url:"assets/package.html.4914e19b.js",revision:"0976e0bf8f5a5a1b763d94568358cd2e"},{url:"assets/package.html.d41fa56b.js",revision:"d5139621f50189b0e39286756867d72a"},{url:"assets/package.html.da642dcd.js",revision:"b490a94cd7d3cf2167b8fbf6ab5a064b"},{url:"assets/package.html.ec4f01a7.js",revision:"db8803ae296c9d67ee9e90b2a722884f"},{url:"assets/photoswipe.esm.382b1873.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/playlist.html.5186d85c.js",revision:"aca6fdcd49cc9d8e1b67ee8cd78e67ff"},{url:"assets/playlist.html.65987779.js",revision:"a5de00633a13e5bfb892cc57d649a202"},{url:"assets/playlist.html.8a3ca185.js",revision:"3d4dcadd3d91a7ffb5a2e978d1b8b193"},{url:"assets/playlist.html.9ac9f29b.js",revision:"904f32ebc2951bc56602877c81b6c4bb"},{url:"assets/reveal.esm.b96f05d8.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/revise-dns-host.html.1db918cf.js",revision:"1a78b52633cfa417c97c0b0524c1b94d"},{url:"assets/revise-dns-host.html.2048701e.js",revision:"543d2e490f2b9d95b5bfd00629babe58"},{url:"assets/revise-dns-host.html.63804d06.js",revision:"0f1ec65b16ed2576b192e1c7f89146ac"},{url:"assets/revise-dns-host.html.b63637a7.js",revision:"c8ba14281afefb3d635441778f289008"},{url:"assets/run-params.html.4e6d61e0.js",revision:"3c00529df8e313f7aa54da0b8e7d53a3"},{url:"assets/run-params.html.aa8fea0f.js",revision:"81b3955e2c901ee0e4d742cbd8c60901"},{url:"assets/scheme-url.html.1d8cd90d.js",revision:"e2ad3275fc1298a3e767357ce4041557"},{url:"assets/scheme-url.html.320d16f0.js",revision:"4b7e965584e07aa1b6c0bc10ecd0d7f0"},{url:"assets/search.esm.80da4a02.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.6567e7fc.js",revision:"991e94ee7630f945b323e9bfa085d86b"},{url:"assets/slides.html.d91b3891.js",revision:"864947f01cc658bffe520017845b81c5"},{url:"assets/songlist-update.html.8796ed5f.js",revision:"f3ada7bbec5b1cb7937c2f06d1d17b13"},{url:"assets/songlist-update.html.adf9d6f1.js",revision:"36328da4ed39056dc6313ae6869c1385"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/statusbar-lyric.html.03030802.js",revision:"8f92f463d8a6ad4d75ada31ad9593b70"},{url:"assets/statusbar-lyric.html.2031c87f.js",revision:"81e710a7baeb80d8e71de6cb48fc8d84"},{url:"assets/style.e788d231.css",revision:"4095ba577207182100d5be2d783cd2c1"},{url:"assets/sync.html.821b0d99.js",revision:"5618b6ff9a55c22c7fac49e688c412d4"},{url:"assets/sync.html.9dc80b1c.js",revision:"9c9053f0cf1440fee2f83d54ab6d3a2a"},{url:"assets/sync.html.a841c5bd.js",revision:"efac6d22ead206470db0b95bf27922cc"},{url:"assets/sync.html.d4d632cb.js",revision:"df2809e3012bdc705f55f127a32c60b3"},{url:"assets/update.html.1eb430f1.js",revision:"54f92a481fed0423cc091a784aa30250"},{url:"assets/update.html.dc99f737.js",revision:"2de66fa357889dac22ae9023ba0880dc"},{url:"assets/use-source.html.263956bd.js",revision:"6251a9b81ce2d4a4cb85eff40d7971e8"},{url:"assets/use-source.html.5ae779f7.js",revision:"f760616b9f2c2bd82951d92e77c772a8"},{url:"assets/use-source.html.737a3691.js",revision:"4c20b135db5c567e473f0dd881cc0c94"},{url:"assets/use-source.html.8d1da9fa.js",revision:"1d5d4f44f2eafbb6d7508786bc1998cd"},{url:"assets/use-source.html.d9ea5cf7.js",revision:"f6cb89011a6b032ef566540d3581d443"},{url:"assets/use-source.html.f83eee32.js",revision:"380cba93962e69b07f4ec6c757b1752a"},{url:"assets/velocity-text.html.57af7313.js",revision:"5150c8842e61f93c904b8cab306daa5d"},{url:"assets/velocity-text.html.b906549d.js",revision:"376115b34b6cfb471b1bd95682748dbe"},{url:"assets/vue-repl.d8bd181b.js",revision:"b0e187efd0e5c2c0b5b3e0b73c975895"},{url:"assets/VuePlayground.7220b724.js",revision:"090bb019df329c894c5dbfcd6340af2e"},{url:"assets/win10-11.html.8d3e3cb8.js",revision:"a12405d8d9d0de36aead78bcb5629952"},{url:"assets/win10-11.html.fe8d318f.js",revision:"c1dbf64244f21959cafb4a5a80b6238d"},{url:"assets/win7.html.67b699bd.js",revision:"b07dca598078234200b8a3f7ef235699"},{url:"assets/win7.html.f576d380.js",revision:"437b6e9d6c89b785dd06a594714b9518"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"e1d55b78b99fef5c7f6badbded93be09"},{url:"document/desktop/data-path.html",revision:"40b2ca5c1890d65985577a882a77da9d"},{url:"document/desktop/diy-source/custom-source.html",revision:"2a15a86d7859c829a890b33bfa898102"},{url:"document/desktop/diy-source/use-source.html",revision:"fc2af43628249a1ddb4c802a6d1c16a5"},{url:"document/desktop/hotkey.html",revision:"3e733e99221fc632430e297e878987f8"},{url:"document/desktop/index.html",revision:"5ff0a36e5e8469cf6d6592d901853bcf"},{url:"document/desktop/install/cannot-update.html",revision:"bc7f58d5e568e6b5aea0626be7fe33bc"},{url:"document/desktop/install/install-failed.html",revision:"1a0e76951a9e76fdc32e9fcd0e6a5c73"},{url:"document/desktop/install/package.html",revision:"f77251ad24a18d6af2fa6fb5803b09c1"},{url:"document/desktop/license.html",revision:"a49dd46b329bde5e68c9c7a31aba89e6"},{url:"document/desktop/play-download/cannot-download.html",revision:"7050a51b533b8294265ffcb0a2d93f52"},{url:"document/desktop/play-download/cannot-play.html",revision:"4e13c2ba4f1b7220f0dabaab88127f66"},{url:"document/desktop/play-download/revise-dns-host.html",revision:"ed945262e60be7a33080ecb248b5944e"},{url:"document/desktop/run-params.html",revision:"dc81fefd14b4703b59e39e52c7fb881e"},{url:"document/desktop/scheme-url.html",revision:"eec4d297aacaee427973262d82f52789"},{url:"document/desktop/screen-abnormal/linux.html",revision:"8004e349d6bc67eccf3742cea804f8e9"},{url:"document/desktop/screen-abnormal/win10-11.html",revision:"374a0cbd34decd91790b0f06bc7cc8c5"},{url:"document/desktop/screen-abnormal/win7.html",revision:"087534e800451b160b51b70abd72a434"},{url:"document/desktop/use-source.html",revision:"d1f23ebe6b9cdbe4f11ebf46ed9795d3"},{url:"document/desktop/v1/index.html",revision:"e1bcc304091d24221170367bf2165f2f"},{url:"document/desktop/v1/list/change-list-position.html",revision:"4535069c4d81f828152b4918566d1aa7"},{url:"document/desktop/v1/list/list-multiple-selection.html",revision:"fad2eee8ff9f336f7b9fdc2f1d9df4c3"},{url:"document/desktop/v1/list/list-play-all.html",revision:"1a63232f9853d7be5c29562c45164497"},{url:"document/desktop/v1/list/open-songlist.html",revision:"acbab49f08d08c22ba7d9d2e0d778959"},{url:"document/desktop/v1/list/playlist.html",revision:"57433755ffe935be766fc4a8e3f921a0"},{url:"document/desktop/v1/lyric/desktop-lyric.html",revision:"9ee7f9312670d6b9d5349884b1802e4c"},{url:"document/desktop/v1/lyric/velocity-text.html",revision:"16f0bf5819fe6171131e7c43ab4c4330"},{url:"document/desktop/v1/other/antivirus-software.html",revision:"746e9b04008d32d6e548f98f25e3fc91"},{url:"document/desktop/v1/other/cannot-connect-internet.html",revision:"78ff9d7e4669a4ebb8efb100a1ca82cc"},{url:"document/desktop/v1/other/headphones-turn-off-unexpectedly.html",revision:"b5efda9d8139ed286f888d16341f3810"},{url:"document/desktop/v1/sync-backup/backup.html",revision:"a250918f134c7a096ab458c84efa6ef5"},{url:"document/desktop/v1/sync-backup/sync.html",revision:"805619bf8e3d0e927ecd4b622cc421fc"},{url:"document/desktop/v2/index.html",revision:"45f764b83f091b2a04ddf01c7ea222df"},{url:"document/index.html",revision:"ba381c1e6412bd5fb6b411eadf094861"},{url:"document/mobile/data-path.html",revision:"cbc63e750a645116764b908aa288d9ea"},{url:"document/mobile/index.html",revision:"1c7d1ae480fd8e071629e3ac589db8e4"},{url:"document/mobile/license.html",revision:"14c95838ef00474b76f5c43bb83b71ba"},{url:"document/mobile/list-songlist/list-multiple-selection.html",revision:"5d416a0c57551020642744edcadc51aa"},{url:"document/mobile/list-songlist/list-play-all.html",revision:"32eb7260545e7d412a8b9f4aeb4b1a01"},{url:"document/mobile/list-songlist/open-songlist.html",revision:"1d5f686265fc0e4e6a494f9b2113c965"},{url:"document/mobile/list-songlist/playlist.html",revision:"08db13e0c96ae337f3e0030b8dfb02e0"},{url:"document/mobile/list-songlist/songlist-update.html",revision:"657586da8e38fa9bcc7d6300dc375e6b"},{url:"document/mobile/other/antivirus-software.html",revision:"b4f0526cb680e3b8149462b217b4d56f"},{url:"document/mobile/other/desktop-lyric.html",revision:"300dcb6ec15d316af8327c6987d85eba"},{url:"document/mobile/play-download/background-play.html",revision:"abe421de88093679f58e7c1761ca8f6c"},{url:"document/mobile/play-download/cannot-download.html",revision:"3594d4da7a12f3fac63e0f36bd39d024"},{url:"document/mobile/play-download/cannot-play.html",revision:"a71761a75c0067c7bb90d27db04b37b9"},{url:"document/mobile/play-download/revise-dns-host.html",revision:"2190554032a28f1acf4104214d81ace4"},{url:"document/mobile/statusbar-lyric.html",revision:"8b84cf130e38090e4f9b1d81359b0375"},{url:"document/mobile/sync-backup/backup.html",revision:"d3d95ce472a419fb42598b625ee120d9"},{url:"document/mobile/sync-backup/sync.html",revision:"a614b6e84fced302d1f6d7b4f40eae3a"},{url:"document/mobile/update.html",revision:"4d911e75667c5080bf053791e32c2d96"},{url:"document/mobile/use-source.html",revision:"8c7352561361f7a45251ddb6c1917713"},{url:"download/index.html",revision:"ccc37a89a279d7541ec4953740e28613"},{url:"download/package.html",revision:"d61a6684af7aca00c4ff8802ccd799c1"},{url:"index.html",revision:"a2b0f6da7eac13528e2d0bcf064be87c"},{url:"report/index.html",revision:"f043558b4ed76de6ccc4b1c9bf556b4f"},{url:"slides.html",revision:"a2c99659c519542122b7794713a57eb3"},{url:"todos/index.html",revision:"d641364ca4c9b3d5f9c6b02ed1b9903e"},{url:"assets/img1.cd801f2f.png",revision:"4cba5ed28dc55feb14e247a2b60d36bb"},{url:"assets/img2.c0794e23.png",revision:"244902fa533b2828f5ebbcadbeeff423"},{url:"assets/img3.328628d6.png",revision:"758a6e3a4ece617f59b34a448ba8c27a"},{url:"assets/img4.bc8d4d8d.png",revision:"68cfb91816fedd0ea33b7fe2250f633e"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"logo.png",revision:"ed74535cbc7dabb74a569b7cc0476b06"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
