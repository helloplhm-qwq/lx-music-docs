if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const f=e=>a(e,i),l={module:{uri:i},exports:t,require:f};s[i]=Promise.all(d.map((e=>l[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-53bdbe38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"LX Music"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.08515132.js",revision:"9cf27f018e1f932d1892a8c44594a226"},{url:"assets/404.html.9d99e36c.js",revision:"6fdd9b45dfb56a1fdb79cb57cc499450"},{url:"assets/antivirus-software.html.11afa8a6.js",revision:"ffb56e2186299c6e8eeb209220ef62f5"},{url:"assets/antivirus-software.html.46d37251.js",revision:"363598b2d0dbbbfe534af88913fe79ef"},{url:"assets/antivirus-software.html.9d19764c.js",revision:"633ae956a862ed2982df82c14ca9a5f3"},{url:"assets/antivirus-software.html.c029655b.js",revision:"8f63a8c06260243c510e64649809cc85"},{url:"assets/antivirus-software.html.d5082955.js",revision:"3aadb30e348079a22f18def81fcd39cf"},{url:"assets/antivirus-software.html.dd9cb6b0.js",revision:"ffb56e2186299c6e8eeb209220ef62f5"},{url:"assets/app.05b6a5da.js",revision:"4639549321b2c815f61e3f0aa5bf5b2f"},{url:"assets/auto.264f6c8c.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/background-play.html.0faf75cc.js",revision:"044217e361baec2ad5f3eb4d756c1fe2"},{url:"assets/background-play.html.8db2dd83.js",revision:"47d2fc66de084e83ad505410fb144b5b"},{url:"assets/backup.html.4e65ef47.js",revision:"c376344297e8e069a9e820d7789250a0"},{url:"assets/backup.html.5f2b980c.js",revision:"fc75162cdb0ae252d35338414af3daed"},{url:"assets/backup.html.8d16d821.js",revision:"d937d968d8d48c957066213e11d56d26"},{url:"assets/backup.html.c10d0172.js",revision:"b6500ee02c35c17c5e44acbbb9f78645"},{url:"assets/backup.html.c3de389b.js",revision:"ad27b978663bcc6586eb38ee76ef3ecf"},{url:"assets/backup.html.db40e4a8.js",revision:"c376344297e8e069a9e820d7789250a0"},{url:"assets/cannot-connect-internet.html.1745ece6.js",revision:"72bc3164aa95273dcff4c30861567d43"},{url:"assets/cannot-connect-internet.html.1df5cb08.js",revision:"401c5b97980576f5608b901db22192cf"},{url:"assets/cannot-connect-internet.html.78f47ba5.js",revision:"72bc3164aa95273dcff4c30861567d43"},{url:"assets/cannot-connect-internet.html.958cc4d2.js",revision:"746521f1247cc23f5105ac2f5d7a6ef5"},{url:"assets/cannot-download.html.3805354a.js",revision:"0afa24b9cc5ce9c025bc26c874cad90b"},{url:"assets/cannot-download.html.3d72075c.js",revision:"a91a07d5f4ccbb412d60942f9fcb1ccb"},{url:"assets/cannot-download.html.4ad743b2.js",revision:"14ebcc3e99a3239a34900bac6e3b1250"},{url:"assets/cannot-download.html.9aed73fb.js",revision:"2342e5f894b3441cfd689f580e43c9cc"},{url:"assets/cannot-play.html.51650009.js",revision:"9d21d6b956cea46aa9f752d4ca1225fe"},{url:"assets/cannot-play.html.6a85cdb2.js",revision:"964aa6677fed82c47817b3dc86958b5b"},{url:"assets/cannot-play.html.939b87bd.js",revision:"65636fc71c5000757f167b8035bc4e13"},{url:"assets/cannot-play.html.d33942ca.js",revision:"b4814dee797532b5e51faeb71c6c6b97"},{url:"assets/cannot-update.html.30119591.js",revision:"0e4702cfd4f617f22ad51fbd870be091"},{url:"assets/cannot-update.html.9816f2f4.js",revision:"267af20838a36f2280da61326234811e"},{url:"assets/change-list-position.html.5bae141b.js",revision:"f8b08f84a922064819e360fdc3f85587"},{url:"assets/change-list-position.html.760e472d.js",revision:"19ed3f42ae2f8c740959ad656f9e026a"},{url:"assets/change-list-position.html.8084806d.js",revision:"7e8d6b4a9f91d8f0c98aa83bfd9b234d"},{url:"assets/change-list-position.html.9a747f1f.js",revision:"19ed3f42ae2f8c740959ad656f9e026a"},{url:"assets/changLog.html.71ff29cb.js",revision:"c0146547acee0cd5ed197db64866b0d5"},{url:"assets/changLog.html.8b2d11d0.js",revision:"4499a5275e8bf880efc1885aaf0c3de1"},{url:"assets/custom-source.html.17e11950.js",revision:"f59f20131371e22447e2d9f5379255da"},{url:"assets/custom-source.html.666942f7.js",revision:"fe2f95f444c4f9e56db4eb1509566754"},{url:"assets/data-path.html.06deb610.js",revision:"b21427c79a64abc07f87b543677abf99"},{url:"assets/data-path.html.44e26112.js",revision:"943d122823c1be699238ebbf59edba56"},{url:"assets/data-path.html.ce0507bb.js",revision:"8c70ad4c739e581f72863930922207a1"},{url:"assets/data-path.html.f22b64d7.js",revision:"3ad675e16f64704de2222ec899e8e3c7"},{url:"assets/desktop-lyric.html.105e12bf.js",revision:"d0219498e22ddf7d7fa0d4f385bb71bd"},{url:"assets/desktop-lyric.html.1761a27e.js",revision:"00196ff4039ef787db25c6536f4a46a2"},{url:"assets/desktop-lyric.html.96e4587a.js",revision:"6161a8e534d0d0a767aff32d7ab6516b"},{url:"assets/desktop-lyric.html.bd41745c.js",revision:"d0219498e22ddf7d7fa0d4f385bb71bd"},{url:"assets/desktop-lyric.html.c02f01b2.js",revision:"d182ee86173305c0503541bdafa0b53e"},{url:"assets/desktop-lyric.html.db620408.js",revision:"d3608dfee1d3b2853683a198ba29135f"},{url:"assets/flowchart.parse.ee90d7e0.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/headphones-turn-off-unexpectedly.html.2cd63825.js",revision:"d8336c92f79cc9762caa5d809e392394"},{url:"assets/headphones-turn-off-unexpectedly.html.3a3b539b.js",revision:"f9e0302b87d4153c090a2908977a15f5"},{url:"assets/headphones-turn-off-unexpectedly.html.cfaa6cf3.js",revision:"f9e0302b87d4153c090a2908977a15f5"},{url:"assets/headphones-turn-off-unexpectedly.html.f76677f3.js",revision:"90320273582e96ac63a8362f04489918"},{url:"assets/highlight.esm.d982e650.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/hotkey.html.b47119cd.js",revision:"648217208ad053c38aba59519e74beb6"},{url:"assets/hotkey.html.dfa0ca73.js",revision:"bd0b0bdff5c0935e9ea27de6c4f17e65"},{url:"assets/index.cac02f97.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.084f0591.js",revision:"e4097dac5fd363eecb6c311bf6243823"},{url:"assets/index.html.328e1089.js",revision:"73bec661502127957dd09ff64fcfd31a"},{url:"assets/index.html.532b006a.js",revision:"26c1e027b48eecc591ee6844f63ab990"},{url:"assets/index.html.54a9240b.js",revision:"c48e1d0f9464a7983ad0eb0d428824de"},{url:"assets/index.html.5e317a9e.js",revision:"bccf5cfb0bfdadf1fa20ba378edbe02f"},{url:"assets/index.html.96c750ef.js",revision:"feb7b40164ce8d415a402a2d1480e8bf"},{url:"assets/index.html.99332648.js",revision:"eda330e715d3a94b9c14c33bc1a5a104"},{url:"assets/index.html.9d5c416d.js",revision:"bd89176455b07d63a399e0d6a1b2bf25"},{url:"assets/index.html.a6e6f133.js",revision:"e5d8e39abd094ddab7272f8c543edbd6"},{url:"assets/index.html.d30aa32c.js",revision:"a5e71db2173110aee3df18b3ec5e0f58"},{url:"assets/index.html.e43f69a4.js",revision:"5a28e637271c97f37b8f96d2c6132ce0"},{url:"assets/index.html.e922beb3.js",revision:"0a8c4bbce0d8ed03031d745c3017fb75"},{url:"assets/install-failed.html.265e1bb2.js",revision:"954212f2602303e3d34a5512974b2f25"},{url:"assets/install-failed.html.45d29cbc.js",revision:"78a5b149da457969a5f4a268d69045ed"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/license.html.16dc0324.js",revision:"41aa471df983f872ccf121c9bd338ff7"},{url:"assets/license.html.b28d7519.js",revision:"2175a09cc9c568528a775bf08f751fd7"},{url:"assets/license.html.b3ceeed7.js",revision:"a62a9050841a61ed8b704f392ebfe826"},{url:"assets/license.html.d3be5469.js",revision:"4e5ebd7840f657baf90bc4ff5159823e"},{url:"assets/linux.html.7ebd6438.js",revision:"7ca5baf793799f30a995aa21755773c4"},{url:"assets/linux.html.803e62a1.js",revision:"39c047c0def57b84dbfe00981f7b14ef"},{url:"assets/list-multiple-selection.html.116909aa.js",revision:"fe40c6b18457a61d5c9e5f8c7aeb85fb"},{url:"assets/list-multiple-selection.html.23440348.js",revision:"1c1cf64ec13791fc9463fbd3a158f115"},{url:"assets/list-multiple-selection.html.3bd355c2.js",revision:"7c67f2da3476a01fb8d2b178e6126d71"},{url:"assets/list-multiple-selection.html.5026ffd9.js",revision:"14e0dc7c181800d7c24d0c9c051e8370"},{url:"assets/list-multiple-selection.html.8585b9e7.js",revision:"1e17b2f40e81b2a98a82269bd0969564"},{url:"assets/list-multiple-selection.html.e884cd32.js",revision:"fe40c6b18457a61d5c9e5f8c7aeb85fb"},{url:"assets/list-play-all.html.533d4796.js",revision:"08450382f10f4aeb4e0d610a2d61bd0d"},{url:"assets/list-play-all.html.6dd671c2.js",revision:"6828b4900ae45f2ebdd813029451e1da"},{url:"assets/list-play-all.html.aa2a8497.js",revision:"ca9671d4028709f735ba02e899bf7ab3"},{url:"assets/list-play-all.html.b3454b68.js",revision:"6828b4900ae45f2ebdd813029451e1da"},{url:"assets/list-play-all.html.de86ee0c.js",revision:"ee0c749338bb6e08d5b0bc5fc09ebec3"},{url:"assets/list-play-all.html.efb43d55.js",revision:"6e7e1d6ec5bb98dcf125b9e6f71471bd"},{url:"assets/localMusic.html.72b895f7.js",revision:"bffd92d5a958e1e72bbc572d35795f45"},{url:"assets/localMusic.html.75dfc5fd.js",revision:"0cc2445f5241afcc943dbd9de127808f"},{url:"assets/markdown.esm.832a189d.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.a3f84b6f.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.e3b5d21d.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.3c361cb7.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/open-songlist.html.1806b677.js",revision:"1bc1d476276a2d16a589d3f1bc7cc8ff"},{url:"assets/open-songlist.html.64e8dd9b.js",revision:"1bc1d476276a2d16a589d3f1bc7cc8ff"},{url:"assets/open-songlist.html.90768fd0.js",revision:"bda7f6ff80663148fab605a156ee76ed"},{url:"assets/open-songlist.html.9a4e9f5c.js",revision:"01fd466e4bcb85d129d724f4c64405eb"},{url:"assets/open-songlist.html.a9e9f8e8.js",revision:"945334b47c151281dad949cf9b969d76"},{url:"assets/open-songlist.html.db92cdc8.js",revision:"f75c622878faed213cf7c991e8f857e0"},{url:"assets/photoswipe.esm.382b1873.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/playlist.html.02d8bca9.js",revision:"9231f83bae11708d3f65f0efb762abb7"},{url:"assets/playlist.html.1ebe1c6c.js",revision:"9231f83bae11708d3f65f0efb762abb7"},{url:"assets/playlist.html.5186d85c.js",revision:"aca6fdcd49cc9d8e1b67ee8cd78e67ff"},{url:"assets/playlist.html.6d91d06c.js",revision:"39324fc7ae5c72bd1689fbb0bf3d7045"},{url:"assets/playlist.html.a8d4e18e.js",revision:"6431a71b7c41aaa55950eb078984bedf"},{url:"assets/playlist.html.c2cf05aa.js",revision:"fef1a1daae2516c9a0ce03658f1246bb"},{url:"assets/reveal.esm.b96f05d8.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/revise-dns-host.html.2048701e.js",revision:"543d2e490f2b9d95b5bfd00629babe58"},{url:"assets/revise-dns-host.html.4d7be486.js",revision:"8d5bb01ba2b4c3d66a71d1d9ad5af929"},{url:"assets/revise-dns-host.html.63804d06.js",revision:"0f1ec65b16ed2576b192e1c7f89146ac"},{url:"assets/revise-dns-host.html.9b420620.js",revision:"bb87c18df42d2fdcd1951771bd0bb956"},{url:"assets/run-params.html.5190a92f.js",revision:"3acf3294124601d0aef17a0861dac1b3"},{url:"assets/run-params.html.78b15b66.js",revision:"e35d211a3927d880d87bc07fa005c0e0"},{url:"assets/scheme-url.html.3de457dc.js",revision:"4e8f034b44fa4e31c15667c5bd922836"},{url:"assets/scheme-url.html.f026e747.js",revision:"ba1f36e3c8ae49594c769aa48dc1b2f6"},{url:"assets/search.esm.80da4a02.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.6567e7fc.js",revision:"991e94ee7630f945b323e9bfa085d86b"},{url:"assets/slides.html.b8dbb0be.js",revision:"1093ba4d74fc47a0b06f7b6cd75fc40c"},{url:"assets/songlist-update.html.8796ed5f.js",revision:"f3ada7bbec5b1cb7937c2f06d1d17b13"},{url:"assets/songlist-update.html.c9bfc26b.js",revision:"467db282ec9c42b9c3852699a7c0a6ab"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/statusbar-lyric.html.967b0e0d.js",revision:"ee89bd13e780e2cdf62861e0b1597676"},{url:"assets/statusbar-lyric.html.f6ac5fea.js",revision:"466347b59479213eb2c5b0f1cdf231dc"},{url:"assets/style.327409fc.css",revision:"0197a3185ffe19408a922cbfd3264dfd"},{url:"assets/sync.html.5c5afa3b.js",revision:"62d4a055a3250c516748046cf5fd0965"},{url:"assets/sync.html.66107e48.js",revision:"0deda57e4f13e0eae5680b133e213999"},{url:"assets/sync.html.70b8242e.js",revision:"2d9ec36efd3502794fd4ef8dc4988434"},{url:"assets/sync.html.9dc80b1c.js",revision:"9c9053f0cf1440fee2f83d54ab6d3a2a"},{url:"assets/sync.html.a82407be.js",revision:"0714a1d5c39202b382dac14b16624e7e"},{url:"assets/sync.html.f08e7b13.js",revision:"85d7193f71daf587e9d6c40b058b8095"},{url:"assets/update.html.7c1614b7.js",revision:"9c7ac3d398a97d30c72c1c0921ee4e1b"},{url:"assets/update.html.f46f885d.js",revision:"8f781101684b43e4901682d4c1389588"},{url:"assets/use-source.html.0d3c2afb.js",revision:"07a898da83d049560470fc6936635936"},{url:"assets/use-source.html.15b1aa91.js",revision:"62916ff32fc04b0013981e50abb66746"},{url:"assets/use-source.html.1ee447b3.js",revision:"6bf8f93117b96ed24eae9159520486ef"},{url:"assets/use-source.html.48b24782.js",revision:"46cb9737e76e25377c1314735ce49a3f"},{url:"assets/use-source.html.a7cb8fa2.js",revision:"f3009b594c452219930242b680e79c67"},{url:"assets/use-source.html.bae2ce32.js",revision:"7190255645d0e7836d7bae4c3d79903e"},{url:"assets/velocity-text.html.94ecbc09.js",revision:"6dd98808ca3a67e885bda3626e09e229"},{url:"assets/velocity-text.html.97c14926.js",revision:"5f341b3490bffb9d854d5be188f0ae36"},{url:"assets/velocity-text.html.c9f90e52.js",revision:"5a160bb32ad6729c1d1c60aafa46c518"},{url:"assets/velocity-text.html.f118ad0e.js",revision:"5f341b3490bffb9d854d5be188f0ae36"},{url:"assets/vue-repl.b00a8eff.js",revision:"8b3319b9648a6ab8f1902110e44e5d6b"},{url:"assets/VuePlayground.a640e377.js",revision:"94693f2ee7878be015654700ce3b7a76"},{url:"assets/win10-11.html.912c64b4.js",revision:"e5c8cbf9a95e9336d472c41244f3e939"},{url:"assets/win10-11.html.ee72e02d.js",revision:"6a2adc54f41ca3714b3f40a27290854d"},{url:"assets/win7.html.c7e43209.js",revision:"04e41f4b449ec56e02f3485dc0efd7f6"},{url:"assets/win7.html.e369ecd6.js",revision:"1c9560f971e36e1e1c1e448452c11740"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"a2806dd8d191dadc685ef66ca7eeb05f"},{url:"document/desktop/data-path.html",revision:"6976b898c5d4781ae00c24d76fd2471c"},{url:"document/desktop/diy-source/custom-source.html",revision:"27357c31fbf5fd485f0f7f68ec817cf2"},{url:"document/desktop/diy-source/use-source.html",revision:"cce92423329a9b353d252ca43a197e5f"},{url:"document/desktop/hotkey.html",revision:"be035925a5405d31a1e02f91a3e617eb"},{url:"document/desktop/index.html",revision:"e025bececb765ac4795e328b26fb7d92"},{url:"document/desktop/install/cannot-update.html",revision:"a1dde42f96c935e5cea64089cb8ad76d"},{url:"document/desktop/install/install-failed.html",revision:"75e936f059db811462ccffd0e58e3c93"},{url:"document/desktop/license.html",revision:"345320cf9a0f049cd11787108a9a28f3"},{url:"document/desktop/play-download/cannot-download.html",revision:"5d19e3d435b377f9055ce241fae6a998"},{url:"document/desktop/play-download/cannot-play.html",revision:"25543fd2c69dfb7a4c5db53370c1ee6b"},{url:"document/desktop/play-download/revise-dns-host.html",revision:"ad7fcc0b031e6f7dbc27e71fd602469f"},{url:"document/desktop/run-params.html",revision:"083038f3bf7ca1679bdbea0d40e89998"},{url:"document/desktop/scheme-url.html",revision:"b3e4e034a773eee679aa1d93b037d02c"},{url:"document/desktop/screen-abnormal/linux.html",revision:"3b7dff47d9b64a841ce0f395943c59c6"},{url:"document/desktop/screen-abnormal/win10-11.html",revision:"e8f6ece32a47e52ffdf249310c8989ed"},{url:"document/desktop/screen-abnormal/win7.html",revision:"fc97d2c03406e1c5c1ddbbbeea8b06da"},{url:"document/desktop/use-source.html",revision:"7353aa51e9492431d55916250cc912fd"},{url:"document/desktop/v1/list/change-list-position.html",revision:"fae63cfa49f39db0dba6b7ceb18990b6"},{url:"document/desktop/v1/list/list-multiple-selection.html",revision:"bf426317c65df9cd1385ba4c4f75fbb2"},{url:"document/desktop/v1/list/list-play-all.html",revision:"6325474dfab5440af7e97d6bc05e1759"},{url:"document/desktop/v1/list/open-songlist.html",revision:"9d454474953582fb354eddd771030494"},{url:"document/desktop/v1/list/playlist.html",revision:"b87ca74c1b6dad705016a5c79f0efc35"},{url:"document/desktop/v1/lyric/desktop-lyric.html",revision:"735830d044114951217cae95060d30a2"},{url:"document/desktop/v1/lyric/velocity-text.html",revision:"021068d47af057eedfafd6cd6f45f736"},{url:"document/desktop/v1/other/antivirus-software.html",revision:"736eb3b48a5f747952e9905db65b9089"},{url:"document/desktop/v1/other/cannot-connect-internet.html",revision:"a32a5222039eaaf5c62a4cb030f41017"},{url:"document/desktop/v1/other/headphones-turn-off-unexpectedly.html",revision:"e39efbc53d0016f86e3c40e91d49f10c"},{url:"document/desktop/v1/sync-backup/backup.html",revision:"e0da3b48f28dc54e979e419f98db0c3c"},{url:"document/desktop/v1/sync-backup/sync.html",revision:"e3b63ad5f5d26e2b1857522340e94c6b"},{url:"document/desktop/v2/changLog.html",revision:"33c7dc17f75fea1c5d2d8af5742dbc46"},{url:"document/desktop/v2/list/change-list-position.html",revision:"611e5c4f96a87a17f25163befd4d8fb6"},{url:"document/desktop/v2/list/list-multiple-selection.html",revision:"dc5969bb7dc199477bee08a37c9f370e"},{url:"document/desktop/v2/list/list-play-all.html",revision:"dba4e6e2c49968b28d30b816f6a225e9"},{url:"document/desktop/v2/list/open-songlist.html",revision:"a89d755767aeec0b9e25121f6afaf5c7"},{url:"document/desktop/v2/list/playlist.html",revision:"7c97720e2d2120bcad4b9b730c3de512"},{url:"document/desktop/v2/localMusic.html",revision:"3fd651005e5d569c20d74e023d85a932"},{url:"document/desktop/v2/lyric/desktop-lyric.html",revision:"51d4008fb95baed66191dc23a35f4aa3"},{url:"document/desktop/v2/lyric/velocity-text.html",revision:"5de5d24b6e0c35f46ed6e565c627419c"},{url:"document/desktop/v2/other/antivirus-software.html",revision:"d0f4f577fff4cd8388f3788816fee37b"},{url:"document/desktop/v2/other/cannot-connect-internet.html",revision:"941126641de1536d154288cec4c0d646"},{url:"document/desktop/v2/other/headphones-turn-off-unexpectedly.html",revision:"015530645bcfb8cd9b831dde92a69435"},{url:"document/desktop/v2/sync-backup/backup.html",revision:"c10dc9e419d49b3f5fee7fa17b4fbe14"},{url:"document/desktop/v2/sync-backup/sync.html",revision:"eaea5fe981e0acc4dca545b3a3cd7a42"},{url:"document/index.html",revision:"cf9f1d81ec738f7b8ae961256368ae1a"},{url:"document/mobile/data-path.html",revision:"6083ac556b5a417236a2d4177bc52aed"},{url:"document/mobile/index.html",revision:"d0b565cb294e62e3fdcf6076c116f408"},{url:"document/mobile/license.html",revision:"b761f029ff45c7309eb65178ea35532c"},{url:"document/mobile/list-songlist/list-multiple-selection.html",revision:"87232e654db76e006a60525e52267cd6"},{url:"document/mobile/list-songlist/list-play-all.html",revision:"066fc5d70ce07e7c7391062206868e14"},{url:"document/mobile/list-songlist/open-songlist.html",revision:"e63ddd9795bca37bd5cc58bc376479dd"},{url:"document/mobile/list-songlist/playlist.html",revision:"b4efcf8d975f82187b20cd8e84f718e2"},{url:"document/mobile/list-songlist/songlist-update.html",revision:"058f3ea7c12a6c9c44e83e11305cc6a1"},{url:"document/mobile/other/antivirus-software.html",revision:"6551fa86549ba6dd6422d32c0a01540d"},{url:"document/mobile/other/desktop-lyric.html",revision:"cd955d76c93a78bc1a4cb9c44e77fa62"},{url:"document/mobile/play-download/background-play.html",revision:"927cf88362a736b7ed07baa41a6ad80e"},{url:"document/mobile/play-download/cannot-download.html",revision:"6ce901b25cb57eb720ff8faad8a21962"},{url:"document/mobile/play-download/cannot-play.html",revision:"ad324b145e444401af5f674826cdb75d"},{url:"document/mobile/play-download/revise-dns-host.html",revision:"c442637d1c889d4ae6784bfb249cc517"},{url:"document/mobile/statusbar-lyric.html",revision:"921e8baf9e9f757b61d23325abcca845"},{url:"document/mobile/sync-backup/backup.html",revision:"a375198d7472e866eb2094e3d74df197"},{url:"document/mobile/sync-backup/sync.html",revision:"e4f1b90e28d5a2bb51ae7141f49d42ac"},{url:"document/mobile/update.html",revision:"ce2a29f3048d309b4607be6976a3be45"},{url:"document/mobile/use-source.html",revision:"ab8043ae32d6704c8e0aa4361202551a"},{url:"download/index.html",revision:"7a10d429ba63ff0a5753a6c548941319"},{url:"index.html",revision:"d2c3c1ee25612592a6ae60175d07b57a"},{url:"report/index.html",revision:"ae8173afbedbce3002fda9e41d998ef8"},{url:"slides.html",revision:"1c1f1ec5d2e3455267f8dacb7e407832"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"logo.png",revision:"ed74535cbc7dabb74a569b7cc0476b06"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
