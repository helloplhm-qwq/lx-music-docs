if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let t={};const f=e=>a(e,d),l={module:{uri:d},exports:t,require:f};s[d]=Promise.all(c.map((e=>l[e]||f(e)))).then((e=>(i(...e),t)))}}define(["./workbox-53bdbe38"],(function(e){"use strict";e.setCacheNameDetails({prefix:"LX Music"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.08515132.js",revision:"9cf27f018e1f932d1892a8c44594a226"},{url:"assets/404.html.feabe714.js",revision:"c6335f7d843e51b9d4ade3fcd6a54f85"},{url:"assets/antivirus-software.html.254534c0.js",revision:"6de6b6cb9c8cc0f6c11cf354e23fc505"},{url:"assets/antivirus-software.html.43836b33.js",revision:"69dcdd9f509f38d178f13cbfa592ca90"},{url:"assets/antivirus-software.html.54bea943.js",revision:"233fe03abf2931dfdb5f38bc412043c7"},{url:"assets/antivirus-software.html.55e0ae54.js",revision:"b1a8eb90e398c9a244fc25e6dcce4a13"},{url:"assets/antivirus-software.html.6b8ffd57.js",revision:"98b86a051ad1ec39fa0988ca73e55850"},{url:"assets/antivirus-software.html.968d1b77.js",revision:"039fb7ca96e25730f7ab395962226e8e"},{url:"assets/app.e827aad7.js",revision:"3949a71545e8f8388d4c25ff4f7f6007"},{url:"assets/auto.264f6c8c.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/background-play.html.6c767f19.js",revision:"3d0acbeb2cb34cefd9f4847333b7cca8"},{url:"assets/background-play.html.87358495.js",revision:"40604c2ea25bc4be1a08c9561fdbd7a3"},{url:"assets/backup.html.0d7dd96c.js",revision:"8137818fd26ffbe499b315802428bde9"},{url:"assets/backup.html.3f079e0e.js",revision:"741ab325eb1d1e12d7598459ee70f1d7"},{url:"assets/backup.html.564805a3.js",revision:"9228b81ae98123cf8846fca173103127"},{url:"assets/backup.html.5f27ce9f.js",revision:"bf628538426b9d1629ae013a44530bfd"},{url:"assets/backup.html.7edd5c74.js",revision:"741ab325eb1d1e12d7598459ee70f1d7"},{url:"assets/backup.html.90babe28.js",revision:"5c7e59cee0c9f56ca13da92e434ed2c2"},{url:"assets/cannot-connect-internet.html.6117538c.js",revision:"5386a599c57c57302fb7e0a96f828140"},{url:"assets/cannot-connect-internet.html.95546092.js",revision:"3654152cd17cef70cc492c3c89567c23"},{url:"assets/cannot-connect-internet.html.988f0f79.js",revision:"830c809df72ab1ee29db78813aa3a37b"},{url:"assets/cannot-connect-internet.html.e1e27a19.js",revision:"3654152cd17cef70cc492c3c89567c23"},{url:"assets/cannot-download.html.04393257.js",revision:"286bd5108de8d9c57c388a5082fb52ba"},{url:"assets/cannot-download.html.2612f5ca.js",revision:"7d8a571c2523f65085082d06ceaac834"},{url:"assets/cannot-download.html.5a37d855.js",revision:"3ebb919ca883afaf45dac2caaabbdcee"},{url:"assets/cannot-download.html.5b1486ba.js",revision:"d6e1ae2cbf904ff5ea3391577af658f2"},{url:"assets/cannot-play.html.1c71843a.js",revision:"8a274e4bef2d95f1d5c9a0d22bc88d11"},{url:"assets/cannot-play.html.458854ff.js",revision:"ef66ade8fb47f40f59ac2590b1fb6972"},{url:"assets/cannot-play.html.5eb33545.js",revision:"a920e4942b1a8a4907c09992d4450972"},{url:"assets/cannot-play.html.cab34616.js",revision:"3ac4657ef3209f6b73539632e83f62f8"},{url:"assets/cannot-update.html.057c8a6d.js",revision:"aa44357750f00740b43493bbb75ab514"},{url:"assets/cannot-update.html.96ade012.js",revision:"8ad2dc86c290e82b5709f2e5c9fa893a"},{url:"assets/change-list-position.html.1aa22f06.js",revision:"c24ae690f205ad619c70f6e9f5a88698"},{url:"assets/change-list-position.html.e34bcdb9.js",revision:"6df6219a56ca940718d5c626c18dc9d3"},{url:"assets/change-list-position.html.f27345d4.js",revision:"6df6219a56ca940718d5c626c18dc9d3"},{url:"assets/change-list-position.html.f3d437a6.js",revision:"96db1f694a697fc1303ec3691fa5e697"},{url:"assets/changLog.html.6ea920fa.js",revision:"cd29413bf9c7a8db151abca7f0fe9643"},{url:"assets/changLog.html.a76e374f.js",revision:"487a8308ad8a5bf2a206a6e81c165977"},{url:"assets/custom-source.html.2ea50e67.js",revision:"1f8041dc082cc50941378e6297fc213a"},{url:"assets/custom-source.html.d03d8c48.js",revision:"872e4f4a5eafecc25ba7e50ac4bbbee2"},{url:"assets/data-path.html.43102be7.js",revision:"d21aa5e492efeced172967b6a44e51e6"},{url:"assets/data-path.html.6085a08f.js",revision:"19bbd09fe42137645770500d456f03b1"},{url:"assets/data-path.html.72225b9f.js",revision:"d5581a92c7cff67affc609ba45a7e7ea"},{url:"assets/data-path.html.8b2f6f78.js",revision:"a9d403c68f95fdae60be3e6116c9776f"},{url:"assets/db-info.html.3273c91d.js",revision:"8200355616862b239822961418963ea9"},{url:"assets/db-info.html.ec0ee156.js",revision:"b9f0d373643be8bba33a84bb4bd38c5c"},{url:"assets/desktop-lyric.html.062a4024.js",revision:"e822f3328b4a57307af7f9c910c0ffd5"},{url:"assets/desktop-lyric.html.2d737f44.js",revision:"31c2b13c22a00ac77fc7e6fd2292165f"},{url:"assets/desktop-lyric.html.7b9061ad.js",revision:"27dfec62d24d773bb014312bbbd00cd2"},{url:"assets/desktop-lyric.html.abe29f52.js",revision:"a6573f8d7054ffa904fc39c00f793ce1"},{url:"assets/desktop-lyric.html.c0cb6701.js",revision:"7d616c242c2158b4784dc1a5c468e7e2"},{url:"assets/desktop-lyric.html.db0cf6bf.js",revision:"a6573f8d7054ffa904fc39c00f793ce1"},{url:"assets/flowchart.parse.ee90d7e0.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/headphones-turn-off-unexpectedly.html.32e1f23c.js",revision:"b9cb91f55f11c01c9c4f6ea6ea04b578"},{url:"assets/headphones-turn-off-unexpectedly.html.638cb919.js",revision:"ad6f1759db1bf15a3012a6113fec5a0d"},{url:"assets/headphones-turn-off-unexpectedly.html.87448ad2.js",revision:"b9cb91f55f11c01c9c4f6ea6ea04b578"},{url:"assets/headphones-turn-off-unexpectedly.html.cca960eb.js",revision:"c795f660b798690f20932944b1a76350"},{url:"assets/highlight.esm.d982e650.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/hotkey.html.e9ef8307.js",revision:"73620b308c3d65b368099ea636885ddd"},{url:"assets/hotkey.html.ed2bb0d3.js",revision:"55067425e1a4aeb48eabbcf10cc94e03"},{url:"assets/index.cac02f97.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.02ac4ca2.js",revision:"782c4cf6cde8a1caf24d3b3a0fd23e44"},{url:"assets/index.html.04b0fa2a.js",revision:"b158f7e9fc60b65f55a8be8ab3756c80"},{url:"assets/index.html.2a08e5e6.js",revision:"22cbc6df63686b15023d8c925db40273"},{url:"assets/index.html.2a79babf.js",revision:"5b8567e3a3ef4ebf8a647c4f61651fcc"},{url:"assets/index.html.2dce140c.js",revision:"243b2bf07e1502b115db8a48a95b4b4e"},{url:"assets/index.html.33e47b4a.js",revision:"a2f7ee812a5bec249d7faf5957424007"},{url:"assets/index.html.46477bd7.js",revision:"69e354c10f173487c133e458c7424851"},{url:"assets/index.html.4e951dc8.js",revision:"c99bcb984c9c32d7e8d0a2c0fb7f2d6c"},{url:"assets/index.html.561ce3b7.js",revision:"76dceb7950b4d0778042a4ee088ab1c3"},{url:"assets/index.html.9beb9a25.js",revision:"41bde78faa572501498a5de50d5caddd"},{url:"assets/index.html.a0e7967e.js",revision:"882d0c3b0e688ddb5f753c0d5a1b5451"},{url:"assets/index.html.a91b4796.js",revision:"8c9e649d23dfd6ed7140510ae7bb1776"},{url:"assets/index.html.aec17434.js",revision:"fd6d865573a57d37b635442cf1822c57"},{url:"assets/index.html.b9787f9d.js",revision:"718494962fba9cdb945adfdbf07253c2"},{url:"assets/index.html.c9043d57.js",revision:"1f3a888e3070b08f5af3934eedda6683"},{url:"assets/index.html.fdc8b597.js",revision:"6656862be9f40b10f61b3fee76c2110f"},{url:"assets/install-failed.html.6748c2b5.js",revision:"31538b274ae738f73665d6acdab621ac"},{url:"assets/install-failed.html.9b17603e.js",revision:"9e4e86edf3720244b9f4de51bea624a6"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/license.html.3876badf.js",revision:"e81ad6710b3ca18440e8fb18da2c8bd5"},{url:"assets/license.html.3e32cb47.js",revision:"dcc8a2f57af07fc8fe06259a0fac425e"},{url:"assets/license.html.406fc0e1.js",revision:"88ecb90768b04d9f7b5c9e72a7faac79"},{url:"assets/license.html.4c92d0e1.js",revision:"bf7e99ed24ffc8053652a8a064aeb2fe"},{url:"assets/linux.html.167ace82.js",revision:"426d0d166305cf38946a60b4dcdb4a04"},{url:"assets/linux.html.249b083a.js",revision:"ea644dabdcb1a60c975acd64ed60e3bd"},{url:"assets/list-multiple-selection.html.503d23fb.js",revision:"66d7137a9e1b1b85adcf9e37ebc63e86"},{url:"assets/list-multiple-selection.html.617a16a5.js",revision:"998d35504663ba5206dfec93353d7293"},{url:"assets/list-multiple-selection.html.71ff3b22.js",revision:"66d7137a9e1b1b85adcf9e37ebc63e86"},{url:"assets/list-multiple-selection.html.8d42f177.js",revision:"c9944f648f5db866eacde419b4f886a9"},{url:"assets/list-multiple-selection.html.904495ba.js",revision:"6054cdb0b72dbd3a3554cc1683cec9ca"},{url:"assets/list-multiple-selection.html.eae11c44.js",revision:"13bd90c8a9b3e4514e9e3e3a8d6729f7"},{url:"assets/list-play-all.html.8ba5375b.js",revision:"920b6b1b2abf7d0d5fc7a28e4c34b24b"},{url:"assets/list-play-all.html.9cf0256a.js",revision:"038a87ea0d4081a8817cb3bcd7ef4ca5"},{url:"assets/list-play-all.html.9f764258.js",revision:"254818d08774645754e493a1815629f2"},{url:"assets/list-play-all.html.c48a243a.js",revision:"6caec4e5265ef887585b8bc7d62c6a6d"},{url:"assets/list-play-all.html.c9db34b5.js",revision:"9dd1adcd7231d9ae240044110cb32e91"},{url:"assets/list-play-all.html.d78bac29.js",revision:"6caec4e5265ef887585b8bc7d62c6a6d"},{url:"assets/localMusic.html.a0fcf612.js",revision:"c6422fbdbac46016bf1411f929f0f079"},{url:"assets/localMusic.html.c8157096.js",revision:"1d57a8ce5e5b802428dd0bb02de3b686"},{url:"assets/markdown.esm.832a189d.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/math.esm.a3f84b6f.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.e3b5d21d.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.3c361cb7.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/open-songlist.html.19e543f0.js",revision:"662372436a2383e2a255eec0a461807f"},{url:"assets/open-songlist.html.4889cfd7.js",revision:"d2aa81fcbba0abe13a7c9948ea37a4bf"},{url:"assets/open-songlist.html.62a26ee9.js",revision:"f7f23c2f1c508391e7fc65e87ad27fb1"},{url:"assets/open-songlist.html.98779bd0.js",revision:"05adc1a360c7d1df2f80f109775d0c06"},{url:"assets/open-songlist.html.b9cadd12.js",revision:"047bfe1565856def40bcdc6984cbf74b"},{url:"assets/open-songlist.html.e37a3ca2.js",revision:"e6e4b7a05dfa1756e44fcb35e49b0ceb"},{url:"assets/photoswipe.esm.382b1873.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/playlist.html.2d1648e6.js",revision:"804a5216f91b5d0cfb979e5816c692be"},{url:"assets/playlist.html.953acd57.js",revision:"6f5617cdea21c7cfb18ba4a828459048"},{url:"assets/playlist.html.c1c61c31.js",revision:"4bf24a196eb7977b733259b379bb6cf4"},{url:"assets/playlist.html.eca4fa98.js",revision:"6f5617cdea21c7cfb18ba4a828459048"},{url:"assets/playlist.html.edd95b54.js",revision:"a1979c993f02cce9aaed8e7bfcc9ebc2"},{url:"assets/playlist.html.fc1b7dc5.js",revision:"96c82af6fd698450a06b68348531dbee"},{url:"assets/reveal.esm.b96f05d8.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/revise-dns-host.html.049581b9.js",revision:"e4d54595070f0eb86ec560434f251f30"},{url:"assets/revise-dns-host.html.45062e18.js",revision:"f9fc4bc91dc0894a2c19f7327cfe6678"},{url:"assets/revise-dns-host.html.5def24ab.js",revision:"1466627ef2322cdfe2bb5225aa667492"},{url:"assets/revise-dns-host.html.daea8fa5.js",revision:"5ca62811f3810e18d6eb685f3a69c0e3"},{url:"assets/run-params.html.098b6a87.js",revision:"78d76875b8ed2975622aff0371e33c81"},{url:"assets/run-params.html.f223b2eb.js",revision:"336059e4ea195c65a3369b8546d21fd4"},{url:"assets/scheme-url.html.53c9c059.js",revision:"a26244fa0858fb767fd52b7fa1389238"},{url:"assets/scheme-url.html.9236a0ef.js",revision:"9d634f8ad93a8a19dfd08504d8cef7fa"},{url:"assets/search.esm.80da4a02.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.63066ecd.js",revision:"c58b68d032c76e43a44b9522b847272b"},{url:"assets/slides.html.6567e7fc.js",revision:"991e94ee7630f945b323e9bfa085d86b"},{url:"assets/songlist-update.html.1a1daa3c.js",revision:"4087de5f4e85e14f3873e1a40d94612c"},{url:"assets/songlist-update.html.a24556eb.js",revision:"77e8548dcfcf381b65cec7cab485f975"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/statusbar-lyric.html.123e5c22.js",revision:"652b807dfa42f184dd80475c1bdfc295"},{url:"assets/statusbar-lyric.html.1a7bb411.js",revision:"beb139cea45091ff723388677c062cec"},{url:"assets/style.408e0fb4.css",revision:"745bdc48f1807f5ddd2712538d9545c4"},{url:"assets/sync.html.2c9b8fdc.js",revision:"d4f7b5e237b7d082f33fa80e48ab9b88"},{url:"assets/sync.html.3941651a.js",revision:"d53320d571d6a422c9b6c101ad287265"},{url:"assets/sync.html.40f4d781.js",revision:"60f77af54387e84f7bd75fcac2b81636"},{url:"assets/sync.html.79ea7d60.js",revision:"568f7147a6e4ee92454b1dbfb78e17bc"},{url:"assets/sync.html.ad1b150d.js",revision:"9cad0c355c3b371c1065cb0f10de9a38"},{url:"assets/sync.html.e5926973.js",revision:"e42e774e3ecf71d0acad32adb387ce1b"},{url:"assets/update.html.44740c16.js",revision:"aa9cd2bdfb29d66e10e8119a32955e57"},{url:"assets/update.html.45259cfa.js",revision:"ec65deff302b3d61f6549670021c6e6b"},{url:"assets/use-source.html.0571c681.js",revision:"7cd22c46a979bd66810c3193ff93b434"},{url:"assets/use-source.html.0700d173.js",revision:"535844f45b83e63e88dd3f017601b447"},{url:"assets/use-source.html.4c1fecfa.js",revision:"40c946b9f9d71a35820400664d9d13cf"},{url:"assets/use-source.html.5a0cbf65.js",revision:"b2171397c5becdda56a8507c872689e8"},{url:"assets/use-source.html.5d4bb0d9.js",revision:"ed9e0eb31707d4b31b9d7e57875adf2e"},{url:"assets/use-source.html.df7604ae.js",revision:"c03f08fe465ba81bc87d66bcf64db338"},{url:"assets/velocity-text.html.163f130a.js",revision:"de0678b784e06d9eabd50bceed2af835"},{url:"assets/velocity-text.html.60e946b1.js",revision:"9853a0e01f62321421813795aa139195"},{url:"assets/velocity-text.html.b84559e6.js",revision:"2f2afa1189ea9607e5a02c66ee387315"},{url:"assets/velocity-text.html.c3030864.js",revision:"df707a56a277c5254f2dbaeea21d8bc4"},{url:"assets/vue-repl.6db4fabc.js",revision:"f2b4d6b2b125275822d27cfc19c80058"},{url:"assets/VuePlayground.2fd8fce2.js",revision:"a0286478b04b66b885456890e9cabe48"},{url:"assets/win10-11.html.d47e80f5.js",revision:"a13c3959658330ba4afb3c9423944598"},{url:"assets/win10-11.html.d8b7af96.js",revision:"a6698b5e8461eebe00ec4d017df98458"},{url:"assets/win7.html.71c82cba.js",revision:"7a883b330401a1ec1d7ce3a4cc00e4ee"},{url:"assets/win7.html.815b5d06.js",revision:"392abc97dd7e939b7774b0d285851e7f"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"logo.svg",revision:"4e883c3afdbf780fe7c3b6a03f2a95e8"},{url:"404.html",revision:"c0e8dd5ed271eae4335db69674a521e7"},{url:"desktop/document/data-path.html",revision:"4b2ba92c486f8688a55d3dd50b72ef57"},{url:"desktop/document/diy-source/custom-source.html",revision:"89004877bcddab47740a15a5b6062d01"},{url:"desktop/document/diy-source/use-source.html",revision:"0360590fa261e654e0a93f5aa4bc3739"},{url:"desktop/document/hotkey.html",revision:"cb17c23c41b24a463014b921eaa4a68f"},{url:"desktop/document/index.html",revision:"aff7ebad673cae471a6fc669cdb33bbb"},{url:"desktop/document/install/cannot-update.html",revision:"4d895b8ccbdbb80fa163d009ea5d8c51"},{url:"desktop/document/install/install-failed.html",revision:"a8a41742513443ea21353cb681281bee"},{url:"desktop/document/license.html",revision:"d548342b8d0072752c66d6910e372f3c"},{url:"desktop/document/list/change-list-position.html",revision:"db2d9872e84a99625885730afc547783"},{url:"desktop/document/list/list-multiple-selection.html",revision:"f0bbbe64a0a1103c62569df9f691d5fb"},{url:"desktop/document/list/list-play-all.html",revision:"86c157f4e3771470fbb2d9d50beebe8a"},{url:"desktop/document/list/open-songlist.html",revision:"af2fa6217f94b471fe7d9ac6ba66978d"},{url:"desktop/document/list/playlist.html",revision:"917028326e11e1524ec6d8b2cf033737"},{url:"desktop/document/lyric/desktop-lyric.html",revision:"97da5df8fa5d1425212a6f545af53d97"},{url:"desktop/document/lyric/velocity-text.html",revision:"425f321b6634c3081f7729780f993ed8"},{url:"desktop/document/other/antivirus-software.html",revision:"71b7c16cd8220831cf8900c1d494a468"},{url:"desktop/document/other/cannot-connect-internet.html",revision:"7aab3799284e4e803504ec7ff22c223c"},{url:"desktop/document/other/headphones-turn-off-unexpectedly.html",revision:"13b814dd6e0643580c6b297e405de23a"},{url:"desktop/document/play-download/cannot-download.html",revision:"6b5ade8a252fc4f77bb266eb25c57826"},{url:"desktop/document/play-download/cannot-play.html",revision:"8a92c0614e6f450ecda843c2b757822e"},{url:"desktop/document/play-download/revise-dns-host.html",revision:"8b9f7eb5369ba44ab0a5a02c5170adbe"},{url:"desktop/document/run-params.html",revision:"8f2ff2a66e92604e5665ccdf61f1046a"},{url:"desktop/document/scheme-url.html",revision:"6a7ecd9ebd3c20847a982b34b2b171b1"},{url:"desktop/document/screen-abnormal/linux.html",revision:"970dff48ca5f0cbc9c2ea0285c964138"},{url:"desktop/document/screen-abnormal/win10-11.html",revision:"c8150cdc91d001eca000577d5c5dd25f"},{url:"desktop/document/screen-abnormal/win7.html",revision:"5e4e0205795d0a1ca2f510cfcce8f342"},{url:"desktop/document/sync-backup/backup.html",revision:"8f82794687c70ae0884d0fbc8a6e03f4"},{url:"desktop/document/sync-backup/sync.html",revision:"e21420f9e54e1a1f259fd2cee675466d"},{url:"desktop/document/use-source.html",revision:"2d643e2fd7daa39c13f4610e11026516"},{url:"desktop/document/v2/changLog.html",revision:"8afb872de4bda897bc0659d0d44e3af5"},{url:"desktop/document/v2/db-info.html",revision:"edf27f3c4796399bcb98accfbdd63f69"},{url:"desktop/document/v2/index.html",revision:"aaf32ee4efd52ed23e6761641dc1ff96"},{url:"desktop/document/v2/list/change-list-position.html",revision:"ef47fde17578f2b83cdd86766a124503"},{url:"desktop/document/v2/list/list-multiple-selection.html",revision:"d39ffa01e89b5fe1fb523909e3978364"},{url:"desktop/document/v2/list/list-play-all.html",revision:"39afe27f523e6ea555c34c123d0cad3a"},{url:"desktop/document/v2/list/open-songlist.html",revision:"4558a747a7ad4628ad910fda5f106c96"},{url:"desktop/document/v2/list/playlist.html",revision:"c94e74954ac2e2a0475c27edeea62839"},{url:"desktop/document/v2/localMusic.html",revision:"62814a5227ead24d12316211f4a0ca6e"},{url:"desktop/document/v2/lyric/desktop-lyric.html",revision:"b448a60e37faf01d81c06da29f320c78"},{url:"desktop/document/v2/lyric/velocity-text.html",revision:"378b5fbb16389fb38b7e35fa8b3a669f"},{url:"desktop/document/v2/other/antivirus-software.html",revision:"435df9123a67bd4ab4a624d3e8af8976"},{url:"desktop/document/v2/other/cannot-connect-internet.html",revision:"d71d85db4f552fc68d97e4bfdc807b59"},{url:"desktop/document/v2/other/headphones-turn-off-unexpectedly.html",revision:"7778911e7d405b6e264cc4294216ae8e"},{url:"desktop/document/v2/sync-backup/backup.html",revision:"33ae306d9a9467212e5afed2e147cc41"},{url:"desktop/document/v2/sync-backup/sync.html",revision:"7b5c362e2f31a47fdedf55459d42a78c"},{url:"desktop/index.html",revision:"dc2979a8ae67a33d1a3ea131d647f84f"},{url:"download/index.html",revision:"04ee06c50fd4f22211bd78ee63c62f87"},{url:"index.html",revision:"efb3e968cacbb49957869a027e5a0875"},{url:"mobile/document/data-path.html",revision:"e4282fd2da2bf0039709ac9500ffc134"},{url:"mobile/document/index.html",revision:"cfab51c20b9641eab8f5b478922c46eb"},{url:"mobile/document/license.html",revision:"056a16521a6b3356ceb18c342aa4f113"},{url:"mobile/document/list-songlist/list-multiple-selection.html",revision:"5b48802977ca8aeb9fe0349f39dd2480"},{url:"mobile/document/list-songlist/list-play-all.html",revision:"6fe635a1a9201bec15ed4b42d9cae34e"},{url:"mobile/document/list-songlist/open-songlist.html",revision:"252e2928a53eb6613af5eaf778ad9462"},{url:"mobile/document/list-songlist/playlist.html",revision:"40c64a109909f589bb18e21a43762ec5"},{url:"mobile/document/list-songlist/songlist-update.html",revision:"032facd8b020416cffc70e7ee0afb1d3"},{url:"mobile/document/other/antivirus-software.html",revision:"21e9365426504c7f36a8100dd7cbd7da"},{url:"mobile/document/other/desktop-lyric.html",revision:"82b87bf72b6b3ebdffc1e7aa7699bc52"},{url:"mobile/document/play-download/background-play.html",revision:"d5ec7b2f4e6281add857572c9bc6b787"},{url:"mobile/document/play-download/cannot-download.html",revision:"572b918750a4c6a0a03ae873bc80262a"},{url:"mobile/document/play-download/cannot-play.html",revision:"f2a28f37d25d3e409aa03b4cac5676c8"},{url:"mobile/document/play-download/revise-dns-host.html",revision:"be8721f67848111b48b92a334ad075cd"},{url:"mobile/document/statusbar-lyric.html",revision:"f5093010640413ce31785b79e162ee74"},{url:"mobile/document/sync-backup/backup.html",revision:"fa3344dd6832c622fe90a3df8f479a65"},{url:"mobile/document/sync-backup/sync.html",revision:"458814ed8c3293881b46ca7c6c14c29c"},{url:"mobile/document/update.html",revision:"043e632dc930b038f65606c44982787b"},{url:"mobile/document/use-source.html",revision:"cb9aed5fcac3c5bbbb6f4f0214f4a774"},{url:"mobile/index.html",revision:"9222058e6793d5f0cc196e6970ea0950"},{url:"report/index.html",revision:"9981e5c20c4bb7087a8b7bc104a8542c"},{url:"slides.html",revision:"1f6e096408a83a6674c0eb73dbc7bf6b"},{url:"icon/144.png",revision:"b7048c443faa325861e90511ef990514"},{url:"icon/152.png",revision:"19fa191b71a4cad4d33903d55c17db43"},{url:"logo.png",revision:"ed74535cbc7dabb74a569b7cc0476b06"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
