// ================================================================
//  DATA.JS  —  Edit this file to add/remove artworks and artists
// ================================================================

// ── UNITS ──────────────────────────────────────────────────────
// Do not change unit names — they must match the 'unit' field in ARTWORKS
const UNITS = [
  { name:'Crazy:B',   color:'#ff6b9d', emblem:'🎲', members:['HiMERU','天城燐音','乙桐柊','氷鷹北斗'] },
  { name:'ALKALOID',  color:'#a78bfa', emblem:'⚗️',  members:['椎名丹希','碓冰弦','鳴上嶺二','朔間零'] },
  { name:'Valkyrie',  color:'#34d399', emblem:'⚔️',  members:['瀬名泉','斎宮宗'] },
  { name:'Eden',      color:'#fbbf24', emblem:'🌿', members:['聖良太一','蓮巳敬人','朱桜司','峰ヶ谷桃季'] },
  { name:'Ra*bits',   color:'#f9a8d4', emblem:'🐰', members:['日々樹渉','遊木民','西木蛍','守沢千秋'] },
  { name:'Knights',   color:'#6ee7b7', emblem:'♞',  members:['天祥院英智','高峰翠','朱桜司','周防桃李','一ノ瀬怜'] },
  { name:'RYUSEITAI', color:'#93c5fd', emblem:'☄️',  members:['天満光','伊東状','守沢千秋','衣更真緒','明星スバル'] },
  { name:'fine',      color:'#fde68a', emblem:'👑', members:['天祥院英智','天城燐音','春川宙','七種茨'] },
];

// ── ARTWORKS ────────────────────────────────────────────────────
// HOW TO ADD A NEW ARTWORK:
//   1. Copy any block below (from the opening { to the closing },)
//   2. Paste it at the top of the array (so it appears as "recently added")
//   3. Fill in all the fields
//
// FIELDS:
//   id          → unique number, increment by 1 each time
//   image_url   → path to your image, e.g. "images/artwork1.jpg"
//                 Leave as "" to show the thumb emoji instead
//   thumb       → emoji shown when there is no image_url
//   title       → artwork title (any language is fine)
//   unit        → must exactly match one of the unit names above
//   char        → character name (Japanese is fine)
//   artist      → artist handle, e.g. "@username"  — use null if unknown
//   url         → link to original post              — use null if unknown
//   platform    → "pixiv" | "twitter" | "weibo" | null
//   editor      → true = show the ✦ Curator's Pick badge
const ARTWORKS = [
  {
    id: 1,
    image_url: "",
    thumb: "🌸",
    title: "夜桜",
    unit: "Crazy:B",
    char: "HiMERU",
    artist: "@hanami_art",
    url: "https://pixiv.net",
    platform: "pixiv",
    editor: true
  },
  {
    id: 2,
    image_url: "",
    thumb: "⚡",
    title: "Electric Stage",
    unit: "ALKALOID",
    char: "椎名丹希",
    artist: "@tsuki_draw",
    url: "https://x.com",
    platform: "twitter",
    editor: false
  },
  {
    id: 3,
    image_url: "",
    thumb: "🗡️",
    title: "Eternal Oath",
    unit: "Valkyrie",
    char: "瀬名泉",
    artist: null,
    url: null,
    platform: null,
    editor: false
  },
  {
    id: 4,
    image_url: "",
    thumb: "🌟",
    title: "Garden of Gold",
    unit: "Eden",
    char: "聖良太一",
    artist: "@sora_illust",
    url: "https://pixiv.net",
    platform: "pixiv",
    editor: true
  },
  {
    id: 5,
    image_url: "",
    thumb: "🎀",
    title: "Bunny Love",
    unit: "Ra*bits",
    char: "日々樹渉",
    artist: "@mochi_fan",
    url: "https://x.com",
    platform: "twitter",
    editor: false
  },
  {
    id: 6,
    image_url: "",
    thumb: "🏰",
    title: "Knight's Vow",
    unit: "Knights",
    char: "天祥院英智",
    artist: "@castle_ink",
    url: "https://pixiv.net",
    platform: "pixiv",
    editor: false
  },
  {
    id: 7,
    image_url: "",
    thumb: "☄️",
    title: "Comet Fall",
    unit: "RYUSEITAI",
    char: "天満光",
    artist: "@ryusei_p",
    url: "https://x.com",
    platform: "twitter",
    editor: true
  },
  {
    id: 8,
    image_url: "",
    thumb: "✨",
    title: "Fine Dining",
    unit: "fine",
    char: "天祥院英智",
    artist: "@eichi_fan",
    url: "https://pixiv.net",
    platform: "pixiv",
    editor: false
  },
];

// ── ARTISTS ─────────────────────────────────────────────────────
// HOW TO ADD AN ARTIST:
//   Copy a block, fill in the details.
//   avatar → any single emoji to represent them
const ARTISTS = [
  { name: "@hanami_art",  platform: "Pixiv",     url: "https://pixiv.net", avatar: "🌸" },
  { name: "@tsuki_draw",  platform: "X/Twitter", url: "https://x.com",    avatar: "🌙" },
  { name: "@sora_illust", platform: "Pixiv",     url: "https://pixiv.net", avatar: "☁️" },
  { name: "@mochi_fan",   platform: "X/Twitter", url: "https://x.com",    avatar: "🍡" },
  { name: "@castle_ink",  platform: "Pixiv",     url: "https://pixiv.net", avatar: "🏰" },
  { name: "@ryusei_p",    platform: "X/Twitter", url: "https://x.com",    avatar: "⭐" },
  { name: "@eichi_fan",   platform: "Pixiv",     url: "https://pixiv.net", avatar: "👑" },
];
