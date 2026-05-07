// ================================================================
//  I18N.JS  —  All UI text in 3 languages
//  You can edit the text strings here if you want to change wording
// ================================================================
const T = {
  'zh-TW': {
    navHome:'首頁', navUnits:'偶像團體', navArtists:'畫師牆', navAbout:'關於', navDisclaimer:'版權聲明',
    eyebrow:'✦ Ensemble Stars! Fan Gallery ✦',
    heroTitle:'璀璨星辰', heroSub:'偶像二創畫廊',
    heroDesc:'歡迎來到由咸魚精心整理的 Ensemble Stars! 同人美術作品集。這裡收錄了來自世界各地繪師創作的美麗作品，所有作品均已標注原創者，並連結原始發布頁面。',
    search:'搜索角色、繪師、偶像團體…', chipAll:'全部',
    recent:'近期新增', picks:'✦ 咸魚推薦',
    ctaSubmit:'推薦一幅作品', ctaRequest:'請求更多角色作品', ctaBili:'B站：下辈子当咸鱼',
    unitsTitle:'偶像團體', unitsDesc:'點擊任意一個團體，查看成員及相關同人美術作品。', artCount:'幅作品',
    artistsTitle:'畫師牆', artistsDesc:'感謝所有允許收錄作品的創作者。點擊名字即可前往其主頁。',
    aboutTitle:'關於本站',
    aboutContent:`
      <p>本站是一個以整理及展示 <strong style="color:var(--champagne)">Ensemble Stars!</strong> 同人美術為目的的非商業愛好者網站，由學生愛好者「咸魚」獨立維護。</p>
      <p>我們致力於在尊重原創者版權的前提下，為 ES 粉絲提供一個美觀、整潔的作品瀏覽體驗。每幅作品均附有原作者名稱及原始連結。</p>
      <p>所有收錄作品皆在加入前確認過原作者的轉載規定，僅收錄明確允許或未明確禁止轉載的作品。若您希望撤下作品，請透過 Bilibili 私信聯絡咸魚，將立即下架。</p>`,
    contactLabel:'聯絡 / 投稿 / 版權問題：', biliLabel:'B站：下辈子当咸鱼',
    disclaimerTitle:'版權聲明',
    disclaimerContent:`
      <div class="disclaimer-section"><h3>📌 版權歸屬</h3><p>本站展示的所有同人美術作品版權屬於原創作者。本站僅作整理展示用途，所有作品均標注原作者及來源平台，並提供原始連結。</p></div>
      <div class="disclaimer-section"><h3>⚠️ CP / 成人內容</h3><p>部分作品可能含有 CP（配對）或限制級內容，已標注提示。瀏覽此類作品前請確認您已達到合法年齡。</p></div>
      <div class="disclaimer-section"><h3>🔍 未知畫師</h3><p>部分作品因源自 Pinterest 等二次轉載平台暫時無法追溯原作者，標注為「畫師：不明」。如您知悉原作者歡迎告知。</p></div>
      <div class="disclaimer-section"><h3>📩 下架申請</h3><p>若您是原創者並希望撤下作品，請透過 Bilibili 私信聯絡：<strong style="color:var(--champagne)">下辈子当咸鱼</strong>，將立即處理，無需說明理由。</p></div>
      <div class="disclaimer-section"><h3>🎮 遊戲版權</h3><p>Ensemble Stars! 相關角色及世界觀屬 Happy Elements K.K. 所有，本站與其無官方關聯。</p></div>`,
    unknown:'畫師：不明',
    footerText:'本站為非商業性質的同人愛好者網站，所有作品版權歸原創者所有。',
    footerBili:'B站：下辈子当咸鱼', footerContact:'聯繫站長申請下架',
    footerCopy:'© 2025 EnsembleFans · 站點更新通知請關注B站動態',
  },
  'zh-CN': {
    navHome:'首页', navUnits:'偶像团体', navArtists:'画师墙', navAbout:'关于', navDisclaimer:'版权声明',
    eyebrow:'✦ Ensemble Stars! Fan Gallery ✦',
    heroTitle:'璀璨星辰', heroSub:'偶像同人画廊',
    heroDesc:'欢迎来到由咸鱼整理的 Ensemble Stars! 同人美术作品集。收录了来自世界各地绘师创作的精美作品，每幅作品均标注原创者并链接到原始发布页面。',
    search:'搜索角色、绘师、偶像团体…', chipAll:'全部',
    recent:'最近新增', picks:'✦ 咸鱼推荐',
    ctaSubmit:'推荐一幅作品', ctaRequest:'请求更多角色作品', ctaBili:'B站：下辈子当咸鱼',
    unitsTitle:'偶像团体', unitsDesc:'点击任意团体，查看成员及相关同人美术作品。', artCount:'幅作品',
    artistsTitle:'画师墙', artistsDesc:'感谢所有允许收录作品的创作者。点击名字即可前往其主页。',
    aboutTitle:'关于本站',
    aboutContent:`
      <p>本站是一个以整理及展示 <strong style="color:var(--champagne)">Ensemble Stars!</strong> 同人美术为目的的非商业爱好者网站，由学生爱好者「咸鱼」独立维护。</p>
      <p>我们致力于在尊重原创者版权的前提下，为 ES 粉丝提供一个美观、整洁的作品浏览体验。每幅作品均附有原作者名称及原始链接。</p>
      <p>所有收录作品皆在加入前确认过原作者的转载规定，仅收录允许或未明确禁止转载的作品。若您希望撤下作品，请通过 Bilibili 私信联系咸鱼。</p>`,
    contactLabel:'联络 / 投稿 / 版权问题：', biliLabel:'B站：下辈子当咸鱼',
    disclaimerTitle:'版权声明',
    disclaimerContent:`
      <div class="disclaimer-section"><h3>📌 版权归属</h3><p>本站展示的所有同人美术作品版权属于原创作者。本站仅作整理展示用途，所有作品均标注原作者及来源平台，并提供原始链接。</p></div>
      <div class="disclaimer-section"><h3>⚠️ CP / 成人内容</h3><p>部分作品可能含有 CP 或限制级内容，已标注提示。浏览此类作品前请确认您已达到合法年龄。</p></div>
      <div class="disclaimer-section"><h3>🔍 未知画师</h3><p>部分作品因源自 Pinterest 等二次转载平台暂无法追溯原作者，标注为「画师：不明」。如您知悉原作者欢迎告知。</p></div>
      <div class="disclaimer-section"><h3>📩 下架申请</h3><p>如需撤下作品，请通过 Bilibili 私信联系：<strong style="color:var(--champagne)">下辈子当咸鱼</strong>，将立即处理。</p></div>
      <div class="disclaimer-section"><h3>🎮 游戏版权</h3><p>Ensemble Stars! 相关角色和世界观属 Happy Elements K.K. 所有，本站与其无官方关联。</p></div>`,
    unknown:'画师：不明',
    footerText:'本站为非商业性质的同人爱好者网站，所有作品版权归原创者所有。',
    footerBili:'B站：下辈子当咸鱼', footerContact:'联系站长申请下架',
    footerCopy:'© 2025 EnsembleFans · 站点更新通知请关注B站动态',
  },
  'en': {
    navHome:'Home', navUnits:'Units', navArtists:'Artist Wall', navAbout:'About', navDisclaimer:'Disclaimer',
    eyebrow:'✦ Ensemble Stars! Fan Gallery ✦',
    heroTitle:'Shining Stars', heroSub:'Fan Art Gallery',
    heroDesc:'A curated collection of Ensemble Stars! fan artworks, maintained by Xianyu (咸魚). Every piece credits the original artist and links to its source. Built out of love for ES — non-commercial.',
    search:'Search characters, artists, units…', chipAll:'All',
    recent:'Recently Added', picks:"✦ Curator's Picks",
    ctaSubmit:'Recommend an artwork', ctaRequest:'Request a character', ctaBili:'Bilibili: 下辈子当咸鱼',
    unitsTitle:'Idol Units', unitsDesc:'Click any unit to browse members and fan artworks.', artCount:'artworks',
    artistsTitle:'Artist Wall', artistsDesc:'A tribute to every credited artist featured here. Click a name to visit their profile.',
    aboutTitle:'About This Site',
    aboutContent:`
      <p>EnsembleFans is a non-commercial fan gallery dedicated to <strong style="color:var(--champagne)">Ensemble Stars!</strong>, maintained by a student fan who goes by Xianyu (咸魚).</p>
      <p>Our goal is to showcase beautiful fan artworks while fully crediting original creators. Every artwork links back to its source, and we only feature works from artists who permit sharing.</p>
      <p>If you are an artist who would like your work removed, please reach out on Bilibili — it will be taken down immediately, no questions asked.</p>`,
    contactLabel:'Contact / Submit / Copyright:', biliLabel:'Bilibili: 下辈子当咸鱼 (Xianyu)',
    disclaimerTitle:'Disclaimer & Copyright',
    disclaimerContent:`
      <div class="disclaimer-section"><h3>📌 Copyright</h3><p>All fan artworks displayed on this site belong to their original creators. This site is for organization and viewing only. Every piece credits the artist and links to the original post.</p></div>
      <div class="disclaimer-section"><h3>⚠️ CP / Mature Content</h3><p>Some artworks may contain shipping (CP) or mature themes, which are labeled accordingly. Please ensure you are of legal age before viewing such content.</p></div>
      <div class="disclaimer-section"><h3>🔍 Unknown Artists</h3><p>Some pieces were sourced from re-sharing platforms like Pinterest without clear attribution. These are labeled "Artist: Unknown" and the curator will attempt to trace the original source.</p></div>
      <div class="disclaimer-section"><h3>📩 Takedown Requests</h3><p>If you are the original creator and wish to have your work removed, please message on Bilibili: <strong style="color:var(--champagne)">下辈子当咸鱼</strong>. Removal will be immediate, no questions asked.</p></div>
      <div class="disclaimer-section"><h3>🎮 Game IP</h3><p>Ensemble Stars! characters and story belong to Happy Elements K.K. This site has no affiliation with Happy Elements.</p></div>`,
    unknown:'Artist: Unknown',
    footerText:'A non-commercial fan gallery. All artworks belong to their respective creators.',
    footerBili:'Bilibili: 下辈子当咸鱼', footerContact:'Request removal',
    footerCopy:'© 2025 EnsembleFans · Site updates posted on Bilibili',
  }
};
