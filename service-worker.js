if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const f=e=>a(e,i),l={module:{uri:i},exports:t,require:f};s[i]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(d(...e),t)))}}define(["./workbox-53bdbe38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"LX Music"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.08515132.js",revision:"9cf27f018e1f932d1892a8c44594a226"},{url:"assets/404.html.d5b7cc41.js",revision:"bc941158641a03483d45c598836b5820"},{url:"assets/antivirus-software.html.254534c0.js",revision:"6de6b6cb9c8cc0f6c11cf354e23fc505"},{url:"assets/antivirus-software.html.55e0ae54.js",revision:"b1a8eb90e398c9a244fc25e6dcce4a13"},{url:"assets/antivirus-software.html.968d1b77.js",revision:"039fb7ca96e25730f7ab395962226e8e"},{url:"assets/antivirus-software.html.98b841e8.js",revision:"fc44cad6ac7bdc4db53b57527f81a6d6"},{url:"assets/antivirus-software.html.a92d9766.js",revision:"9acd5a0f35ea9a5d8623e6b6d70d21c5"},{url:"assets/antivirus-software.html.fae18f52.js",revision:"fdc20f5c5d984550abc20a37eb56dc85"},{url:"assets/app.37a8fbe2.js",revision:"b2638f5e56e16b19f8af22a72933c3f3"},{url:"assets/auto.264f6c8c.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/background-play.html.4ae80395.js",revision:"92e2c2bf4c0eee217b1251f873b96975"},{url:"assets/background-play.html.87358495.js",revision:"40604c2ea25bc4be1a08c9561fdbd7a3"},{url:"assets/backup.html.0d7dd96c.js",revision:"8137818fd26ffbe499b315802428bde9"},{url:"assets/backup.html.2b7f4779.js",revision:"aa2fc3e20e187cfc6fa79c2edad1b569"},{url:"assets/backup.html.564805a3.js",revision:"9228b81ae98123cf8846fca173103127"},{url:"assets/backup.html.5f27ce9f.js",revision:"bf628538426b9d1629ae013a44530bfd"},{url:"assets/backup.html.a102705e.js",revision:"aa2fc3e20e187cfc6fa79c2edad1b569"},{url:"assets/backup.html.ebf0887c.js",revision:"8b5b8ab310aedf12c154f289f0d2a179"},{url:"assets/cannot-connect-internet.html.6117538c.js",revision:"5386a599c57c57302fb7e0a96f828140"},{url:"assets/cannot-connect-internet.html.72a46f9f.js",revision:"2e2ebd532c68709d0ccd6b3fe64d25d8"},{url:"assets/cannot-connect-internet.html.988f0f79.js",revision:"830c809df72ab1ee29db78813aa3a37b"},{url:"assets/cannot-connect-internet.html.cfb6b5bf.js",revision:"2e2ebd532c68709d0ccd6b3fe64d25d8"},{url:"assets/cannot-download.html.04393257.js",revision:"286bd5108de8d9c57c388a5082fb52ba"},{url:"assets/cannot-download.html.2e3349b4.js",revision:"fce9f6ae43311caed2cd6d53e1257a9b"},{url:"assets/cannot-download.html.5b1486ba.js",revision:"d6e1ae2cbf904ff5ea3391577af658f2"},{url:"assets/cannot-download.html.dd750a4e.js",revision:"345d15e95a22bef334b312bca5ae81b6"},{url:"assets/cannot-play.html.458854ff.js",revision:"ef66ade8fb47f40f59ac2590b1fb6972"},{url:"assets/cannot-play.html.5eb33545.js",revision:"a920e4942b1a8a4907c09992d4450972"},{url:"assets/cannot-play.html.c96781d0.js",revision:"d52418b2b7abe495dd221aba184f7531"},{url:"assets/cannot-play.html.df86d4de.js",revision:"114ae44e5efc9651d1925263cbaa4a4f"},{url:"assets/cannot-update.html.4294b8aa.js",revision:"67671f786b1e46502a5b4cbf821cb175"},{url:"assets/cannot-update.html.96ade012.js",revision:"8ad2dc86c290e82b5709f2e5c9fa893a"},{url:"assets/change-list-position.html.07d4179e.js",revision:"51422de6372f4403223300bb591711dd"},{url:"assets/change-list-position.html.1aa22f06.js",revision:"c24ae690f205ad619c70f6e9f5a88698"},{url:"assets/change-list-position.html.8aa49735.js",revision:"51422de6372f4403223300bb591711dd"},{url:"assets/change-list-position.html.f3d437a6.js",revision:"96db1f694a697fc1303ec3691fa5e697"},{url:"assets/changLog.html.671fef9b.js",revision:"ce4aafbefd6fb191d919340b01a60b10"},{url:"assets/changLog.html.6ea920fa.js",revision:"cd29413bf9c7a8db151abca7f0fe9643"},{url:"assets/custom-source.html.d03d8c48.js",revision:"872e4f4a5eafecc25ba7e50ac4bbbee2"},{url:"assets/custom-source.html.d2c1af7a.js",revision:"3e885548bc52e5ed3ec7408aadeb1d74"},{url:"assets/data-path.html.43102be7.js",revision:"d21aa5e492efeced172967b6a44e51e6"},{url:"assets/data-path.html.7129925c.js",revision:"20db0247d06ef0ed61fa4b3d745884a1"},{url:"assets/data-path.html.8b2f6f78.js",revision:"a9d403c68f95fdae60be3e6116c9776f"},{url:"assets/data-path.html.8f02e5fb.js",revision:"ec50f8ed0e7f427444d08c4929e1f554"},{url:"assets/db-info.html.a2c51983.js",revision:"6da748f1e895fade799f8a9dedf3d56a"},{url:"assets/db-info.html.ec0ee156.js",revision:"b9f0d373643be8bba33a84bb4bd38c5c"},{url:"assets/desktop-lyric.html.062a4024.js",revision:"e822f3328b4a57307af7f9c910c0ffd5"},{url:"assets/desktop-lyric.html.4faf6f60.js",revision:"9fa3df2f8903d83b3f9ee626c4c82869"},{url:"assets/desktop-lyric.html.7b9061ad.js",revision:"27dfec62d24d773bb014312bbbd00cd2"},{url:"assets/desktop-lyric.html.9d613d48.js",revision:"3a75b931c3d0710d435dfa59327ba718"},{url:"assets/desktop-lyric.html.c0cb6701.js",revision:"7d616c242c2158b4784dc1a5c468e7e2"},{url:"assets/desktop-lyric.html.eb9c32f2.js",revision:"9fa3df2f8903d83b3f9ee626c4c82869"},{url:"assets/flowchart.parse.ee90d7e0.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/headphones-turn-off-unexpectedly.html.176d0ca8.js",revision:"a9a7c0cb708eeb7cdf45db052dace9be"},{url:"assets/headphones-turn-off-unexpectedly.html.4051fe04.js",revision:"a9a7c0cb708eeb7cdf45db052dace9be"},{url:"assets/headphones-turn-off-unexpectedly.html.638cb919.js",revision:"ad6f1759db1bf15a3012a6113fec5a0d"},{url:"assets/headphones-turn-off-unexpectedly.html.cca960eb.js",revision:"c795f660b798690f20932944b1a76350"},{url:"assets/highlight.esm.d982e650.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/hotkey.html.65cea6a6.js",revision:"3e75457696c1a4909c1f2778372aa90c"},{url:"assets/hotkey.html.e9ef8307.js",revision:"73620b308c3d65b368099ea636885ddd"},{url:"assets/index.cac02f97.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.04b0fa2a.js",revision:"b158f7e9fc60b65f55a8be8ab3756c80"},{url:"assets/index.html.05a74017.js",revision:"86c1f05625c23fa9d86e598971b3089c"},{url:"assets/index.html.2253b867.js",revision:"ad0943724290b9f7de5d1e9afa82f4c3"},{url:"assets/index.html.2a08e5e6.js",revision:"22cbc6df63686b15023d8c925db40273"},{url:"assets/index.html.2a79babf.js",revision:"5b8567e3a3ef4ebf8a647c4f61651fcc"},{url:"assets/index.html.2b2f356e.js",revision:"d370c2ed147981096f3be4aa49856e9f"},{url:"assets/index.html.33e47b4a.js",revision:"a2f7ee812a5bec249d7faf5957424007"},{url:"assets/index.html.52950685.js",revision:"0df72a0d4790e8f003aae780843a8879"},{url:"assets/index.html.7ee889ac.js",revision:"a9313f2f50968d748e0f71720ab5fef9"},{url:"assets/index.html.891515ac.js",revision:"a0707a0e7e7d2cb3f3a839a103431ae7"},{url:"assets/index.html.917dd815.js",revision:"cf3d235dcb35ad812bc82f3909f71ab9"},{url:"assets/index.html.b9787f9d.js",revision:"718494962fba9cdb945adfdbf07253c2"},{url:"assets/index.html.c9043d57.js",revision:"1f3a888e3070b08f5af3934eedda6683"},{url:"assets/index.html.d5e80a4a.js",revision:"eb9abc1c3ce5a4f813763e8460c8a417"},{url:"assets/index.html.d9e4e9b2.js",revision:"1918d8e1533a0a5b412140e546d09e82"},{url:"assets/index.html.fdc8b597.js",revision:"6656862be9f40b10f61b3fee76c2110f"},{url:"assets/install-failed.html.25967aa2.js",revision:"f4a9540b2b1283afedde1aecf096511e"},{url:"assets/install-failed.html.6748c2b5.js",revision:"31538b274ae738f73665d6acdab621ac"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/license.html.3e32cb47.js",revision:"dcc8a2f57af07fc8fe06259a0fac425e"},{url:"assets/license.html.4c92d0e1.js",revision:"bf7e99ed24ffc8053652a8a064aeb2fe"},{url:"assets/license.html.750724df.js",revision:"81e24c2d99b0a05e822bbbadb7d85bec"},{url:"assets/license.html.fb68fb15.js",revision:"d1100856f2b744ca4de8685fb29e4c0e"},{url:"assets/linux.html.167ace82.js",revision:"426d0d166305cf38946a60b4dcdb4a04"},{url:"assets/linux.html.1db67e3c.js",revision:"6b5db715b295b3ea537ae2bce174581f"},{url:"assets/list-multiple-selection.html.617a16a5.js",revision:"998d35504663ba5206dfec93353d7293"},{url:"assets/list-multiple-selection.html.8d42f177.js",revision:"c9944f648f5db866eacde419b4f886a9"},{url:"assets/list-multiple-selection.html.904495ba.js",revision:"6054cdb0b72dbd3a3554cc1683cec9ca"},{url:"assets/list-multiple-selection.html.c51bf0d5.js",revision:"94b6ebff6142cd3506a6831bd32ec5cc"},{url:"assets/list-multiple-selection.html.c8d71289.js",revision:"94b6ebff6142cd3506a6831bd32ec5cc"},{url:"assets/list-multiple-selection.html.d4937232.js",revision:"e203891e95503092e200a9e5de536dbe"},{url:"assets/list-play-all.html.55a797de.js",revision:"ac89170a7463802c03f9a8cf04bdae67"},{url:"assets/list-play-all.html.9cf0256a.js",revision:"038a87ea0d4081a8817cb3bcd7ef4ca5"},{url:"assets/list-play-all.html.9f764258.js",revision:"254818d08774645754e493a1815629f2"},{url:"assets/list-play-all.html.c9db34b5.js",revision:"9dd1adcd7231d9ae240044110cb32e91"},{url:"assets/list-play-all.html.e2a0f018.js",revision:"ac89170a7463802c03f9a8cf04bdae67"},{url:"assets/list-play-all.html.e96c15aa.js",revision:"bbc0c15b78593de5abb549383b4e7c50"},{url:"assets/localMusic.html.a0fcf612.js",revision:"c6422fbdbac46016bf1411f929f0f079"},{url:"assets/localMusic.html.b440abd5.js",revision:"145a93d875adf1867ee29ccdd0e08438"},{url:"assets/markdown.esm.832a189d.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.a3f84b6f.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.e3b5d21d.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.3c361cb7.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/open-songlist.html.19e543f0.js",revision:"662372436a2383e2a255eec0a461807f"},{url:"assets/open-songlist.html.62a26ee9.js",revision:"f7f23c2f1c508391e7fc65e87ad27fb1"},{url:"assets/open-songlist.html.98779bd0.js",revision:"05adc1a360c7d1df2f80f109775d0c06"},{url:"assets/open-songlist.html.bfae3b54.js",revision:"09227c91c703f9bdea9aaededeed722b"},{url:"assets/open-songlist.html.ce1a53c5.js",revision:"e9b60614b045c444dd21cf6bacc690af"},{url:"assets/open-songlist.html.d048877a.js",revision:"5fcc6210648314f3bbb9d93b273b1199"},{url:"assets/photoswipe.esm.382b1873.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/playlist.html.2d1648e6.js",revision:"804a5216f91b5d0cfb979e5816c692be"},{url:"assets/playlist.html.57a3a375.js",revision:"be4a300a76aa4ec48a6b0ec523bca0aa"},{url:"assets/playlist.html.6f3e96d9.js",revision:"be4a300a76aa4ec48a6b0ec523bca0aa"},{url:"assets/playlist.html.c1c61c31.js",revision:"4bf24a196eb7977b733259b379bb6cf4"},{url:"assets/playlist.html.d1d35a32.js",revision:"5cc04e9fe3e322838bd85fd697a1e803"},{url:"assets/playlist.html.fc1b7dc5.js",revision:"96c82af6fd698450a06b68348531dbee"},{url:"assets/reveal.esm.b96f05d8.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/revise-dns-host.html.07414666.js",revision:"9f3c294a50c378c664c66c4c9a8f3dab"},{url:"assets/revise-dns-host.html.45062e18.js",revision:"f9fc4bc91dc0894a2c19f7327cfe6678"},{url:"assets/revise-dns-host.html.5d93a411.js",revision:"ed9fd099d167090cbab5cada4734b169"},{url:"assets/revise-dns-host.html.daea8fa5.js",revision:"5ca62811f3810e18d6eb685f3a69c0e3"},{url:"assets/run-params.html.098b6a87.js",revision:"78d76875b8ed2975622aff0371e33c81"},{url:"assets/run-params.html.9f51649c.js",revision:"fdf421b588c91558bb9881faeb0067bc"},{url:"assets/scheme-url.html.495a0164.js",revision:"97a4322f27c4130bd838843f3267801d"},{url:"assets/scheme-url.html.53c9c059.js",revision:"a26244fa0858fb767fd52b7fa1389238"},{url:"assets/search.esm.80da4a02.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.3fdd5903.js",revision:"371db441541314d2ae3a1b13388f178b"},{url:"assets/slides.html.6567e7fc.js",revision:"991e94ee7630f945b323e9bfa085d86b"},{url:"assets/songlist-update.html.2b60222c.js",revision:"cd5b9ba45f67dadfda8244bc6be0d85d"},{url:"assets/songlist-update.html.a24556eb.js",revision:"77e8548dcfcf381b65cec7cab485f975"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/statusbar-lyric.html.123e5c22.js",revision:"652b807dfa42f184dd80475c1bdfc295"},{url:"assets/statusbar-lyric.html.e113c433.js",revision:"2964e160c72f5b1521fcb9de460a9774"},{url:"assets/style.408e0fb4.css",revision:"745bdc48f1807f5ddd2712538d9545c4"},{url:"assets/sync.html.16b88a7b.js",revision:"b4161576c48ee55be27b9f3665fd7216"},{url:"assets/sync.html.40f4d781.js",revision:"60f77af54387e84f7bd75fcac2b81636"},{url:"assets/sync.html.4669a9c2.js",revision:"0703c06d007ee8cf5485550cfe62a001"},{url:"assets/sync.html.61733153.js",revision:"124ae72c94ac7bbb34314331a58a6c98"},{url:"assets/sync.html.ad1b150d.js",revision:"9cad0c355c3b371c1065cb0f10de9a38"},{url:"assets/sync.html.e5926973.js",revision:"e42e774e3ecf71d0acad32adb387ce1b"},{url:"assets/update.html.44740c16.js",revision:"aa9cd2bdfb29d66e10e8119a32955e57"},{url:"assets/update.html.afad9db1.js",revision:"b0813492d5cd77a596ad8d35d757bc9b"},{url:"assets/use-source.html.0571c681.js",revision:"7cd22c46a979bd66810c3193ff93b434"},{url:"assets/use-source.html.0700d173.js",revision:"535844f45b83e63e88dd3f017601b447"},{url:"assets/use-source.html.19234c1d.js",revision:"bcb889a763ed979ac21eda827841d264"},{url:"assets/use-source.html.5d4bb0d9.js",revision:"ed9e0eb31707d4b31b9d7e57875adf2e"},{url:"assets/use-source.html.edfbd49c.js",revision:"53b05ed89b5980b11ece2f14dab74d50"},{url:"assets/use-source.html.f1bcc7c5.js",revision:"8179655d30926a06a76290cabb8c0457"},{url:"assets/velocity-text.html.60e946b1.js",revision:"9853a0e01f62321421813795aa139195"},{url:"assets/velocity-text.html.842b2dec.js",revision:"a74a1d120fc82bc97471a81f25699200"},{url:"assets/velocity-text.html.b84559e6.js",revision:"2f2afa1189ea9607e5a02c66ee387315"},{url:"assets/velocity-text.html.c784f741.js",revision:"6172cc8f442899a9b39aeff2fa1b8e32"},{url:"assets/vue-repl.bffc1578.js",revision:"b06ff26352482b3a162554d2867720d3"},{url:"assets/VuePlayground.f0fbf193.js",revision:"a60c3e5266f3faaa5345abced374b522"},{url:"assets/win10-11.html.81ba0e4f.js",revision:"0ac40cea2dc16a062a8b918f76919757"},{url:"assets/win10-11.html.d47e80f5.js",revision:"a13c3959658330ba4afb3c9423944598"},{url:"assets/win7.html.815b5d06.js",revision:"392abc97dd7e939b7774b0d285851e7f"},{url:"assets/win7.html.84630415.js",revision:"4d3f9ed0ec004adf31d839e63edebeac"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"687ba740ce8489aa1e20ae806681d71f"},{url:"desktop/document/data-path.html",revision:"32af0a17d3b376800bd4a74f05054794"},{url:"desktop/document/diy-source/custom-source.html",revision:"04a51b6cc4b26742302797b1a53f76e5"},{url:"desktop/document/diy-source/use-source.html",revision:"d0e1330fa12c6a87e28b39def9a06cb5"},{url:"desktop/document/hotkey.html",revision:"10ec0527bd8fa44f64052684d241115c"},{url:"desktop/document/index.html",revision:"fcca62faa848fab266989c8e0f6b8bd3"},{url:"desktop/document/install/cannot-update.html",revision:"44c76c6b8620f2fd6e48c275fc9c5e03"},{url:"desktop/document/install/install-failed.html",revision:"074b0e63d59107c3d6f001e2cf2e41cf"},{url:"desktop/document/license.html",revision:"5f7482b58c72f2d2185398fe94f89985"},{url:"desktop/document/list/change-list-position.html",revision:"d677316cc06d9e37a3fc1fbbc59ed4ce"},{url:"desktop/document/list/list-multiple-selection.html",revision:"bb688c6c7f497d8c3ea7efe737faa9c4"},{url:"desktop/document/list/list-play-all.html",revision:"f7b343e880bd3de25013cf76098e68f1"},{url:"desktop/document/list/open-songlist.html",revision:"b4ff8561ca96313292750074287eb497"},{url:"desktop/document/list/playlist.html",revision:"2c128a42244dad20a51b498e201bf4ba"},{url:"desktop/document/lyric/desktop-lyric.html",revision:"ecc93583ace58e2c8809178f2e82284d"},{url:"desktop/document/lyric/velocity-text.html",revision:"4608382c8475741837339be841f99ceb"},{url:"desktop/document/other/antivirus-software.html",revision:"7e50637c7209d6c0992d4aebe1f06731"},{url:"desktop/document/other/cannot-connect-internet.html",revision:"489cae60c04b36924e6d3c7f93abbffc"},{url:"desktop/document/other/headphones-turn-off-unexpectedly.html",revision:"8c41a0aaa4c9377e2f77fe1b4119f5e4"},{url:"desktop/document/play-download/cannot-download.html",revision:"f59b85bca06daa1048eb4806f68669c4"},{url:"desktop/document/play-download/cannot-play.html",revision:"07a95c27b6f8d40ce455f45fccb13010"},{url:"desktop/document/play-download/revise-dns-host.html",revision:"d36798750d2836421bf88c2309957ee6"},{url:"desktop/document/run-params.html",revision:"c3685eb4e41b34648dad32f7196870bf"},{url:"desktop/document/scheme-url.html",revision:"e2b3e0648076a54dda75429b3683e8c7"},{url:"desktop/document/screen-abnormal/linux.html",revision:"1d132dd3203b5839033fcbfecb5e4102"},{url:"desktop/document/screen-abnormal/win10-11.html",revision:"eb9f1e1d05d7d3c63a1e146c3527dc32"},{url:"desktop/document/screen-abnormal/win7.html",revision:"635c18ceac6b40f8b20513fe5d20647b"},{url:"desktop/document/sync-backup/backup.html",revision:"6e6b48924f77e5b800998b7fb6f3dc9f"},{url:"desktop/document/sync-backup/sync.html",revision:"cdf7040196dd0654524e9752da9935ea"},{url:"desktop/document/use-source.html",revision:"8eeabeb3ad3aab18bae291c34102421f"},{url:"desktop/document/v2/changLog.html",revision:"72322675cfcfdbb2f09118263909271b"},{url:"desktop/document/v2/db-info.html",revision:"825372912ef2c21d3fd20858545fa2ff"},{url:"desktop/document/v2/index.html",revision:"7f201cdeab8ede8535928d90e1635697"},{url:"desktop/document/v2/list/change-list-position.html",revision:"9e788200dc19d6fb744ba40b08e04da4"},{url:"desktop/document/v2/list/list-multiple-selection.html",revision:"1a5cfda2d7185b6bada2c402d44f65e6"},{url:"desktop/document/v2/list/list-play-all.html",revision:"0fe9a9f250ffbfffdf3b36a9a2e99cf8"},{url:"desktop/document/v2/list/open-songlist.html",revision:"aa68e65d9628ca9f578e2f25a4fe8e78"},{url:"desktop/document/v2/list/playlist.html",revision:"b7fdc28f9e2e2aaeaa2e8d9e6f809eb0"},{url:"desktop/document/v2/localMusic.html",revision:"36ccfa65c3caddd3db4424e03d0b9ea7"},{url:"desktop/document/v2/lyric/desktop-lyric.html",revision:"5a07af8aad7acbe57524db32876b3671"},{url:"desktop/document/v2/lyric/velocity-text.html",revision:"ff73273472474596993b0fe20c8ccccb"},{url:"desktop/document/v2/other/antivirus-software.html",revision:"5349db2f0344689a07c2442b0fc90110"},{url:"desktop/document/v2/other/cannot-connect-internet.html",revision:"16506d486b6dd1e70dbfd7966cf2cb94"},{url:"desktop/document/v2/other/headphones-turn-off-unexpectedly.html",revision:"f72736290b2d854b2d6b012a27bbd773"},{url:"desktop/document/v2/sync-backup/backup.html",revision:"1747f0b294b4d50562118972b82ce734"},{url:"desktop/document/v2/sync-backup/sync.html",revision:"2cfd95d3c4bdc60f3a40c3563ec5d0f4"},{url:"desktop/index.html",revision:"4d8c4d67bcb6bf0e31080de1fb395ae5"},{url:"download/index.html",revision:"80607414cc632ac654f3350bcce37817"},{url:"index.html",revision:"35c6a8df5f1d53bb1f7892c8c338ba62"},{url:"mobile/document/data-path.html",revision:"fdec2f63eb45fb46a3a7745a2f56f57f"},{url:"mobile/document/index.html",revision:"5b465e9e2162a2858fc63357a7eaf24a"},{url:"mobile/document/license.html",revision:"4f4c92b4561f2d85d2dc100570a45928"},{url:"mobile/document/list-songlist/list-multiple-selection.html",revision:"200389d5334868879976348ced2af73e"},{url:"mobile/document/list-songlist/list-play-all.html",revision:"c84367c31bf52156df477f96484c3202"},{url:"mobile/document/list-songlist/open-songlist.html",revision:"ec3491c58cf7c57acf21d87855333788"},{url:"mobile/document/list-songlist/playlist.html",revision:"6f6b336459f49f51af78ee0bc5cc8c7f"},{url:"mobile/document/list-songlist/songlist-update.html",revision:"aad4ddf1d34722aeffa6d7bdf5f2e455"},{url:"mobile/document/other/antivirus-software.html",revision:"87fe850784f3bc830bf5190f68cbb47d"},{url:"mobile/document/other/desktop-lyric.html",revision:"399c2982c9b5db8efb72a527d077dd9b"},{url:"mobile/document/play-download/background-play.html",revision:"5661ab0faf0c51e0f9aafa2ee2e0c1f1"},{url:"mobile/document/play-download/cannot-download.html",revision:"56520eefdae577f153752bb5aea355da"},{url:"mobile/document/play-download/cannot-play.html",revision:"4cf55fedd09afd831ed839ef31b86f3a"},{url:"mobile/document/play-download/revise-dns-host.html",revision:"d184ad2f25d821035c2f4b9a3517a85d"},{url:"mobile/document/statusbar-lyric.html",revision:"e283f368bb06c804355614438dfd2b4a"},{url:"mobile/document/sync-backup/backup.html",revision:"d32ecd971a5507d583b225db75592f5c"},{url:"mobile/document/sync-backup/sync.html",revision:"739fa54fe464c15355da853f823a9b27"},{url:"mobile/document/update.html",revision:"5591ab9d2efa8f98d2f1ea9732270c6d"},{url:"mobile/document/use-source.html",revision:"d6c774502b977e8911f5a157bb3b6eee"},{url:"mobile/index.html",revision:"38229d47133bfedef75739b8de1f86eb"},{url:"report/index.html",revision:"84cbe30ab0c1aaa3fc95c3a167c2dab0"},{url:"slides.html",revision:"49465f0a43e783a6c4e2990f44785ab0"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"logo.png",revision:"ed74535cbc7dabb74a569b7cc0476b06"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
