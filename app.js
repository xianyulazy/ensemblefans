// ================================================================
//  APP.JS  —  Site logic (no need to edit this file)
// ================================================================

let lang = 'zh-TW';
let unitFilter = 'all';

// ── Language ─────────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('lang-' + l).classList.add('active');
  applyLang();
}

function applyLang() {
  const t = T[lang];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const html = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

  set('nav-home', t.navHome);
  set('nav-units', t.navUnits);
  set('nav-artists', t.navArtists);
  set('nav-about', t.navAbout);
  set('nav-disclaimer', t.navDisclaimer);
  set('t-eyebrow', t.eyebrow);
  html('t-hero-title', t.heroTitle + '<br><em>' + t.heroSub + '</em>');
  set('t-hero-desc', t.heroDesc);
  document.getElementById('search-input').placeholder = t.search;
  set('chip-all', t.chipAll);
  set('t-recent', t.recent);
  set('t-picks', t.picks);
  set('t-cta-submit', t.ctaSubmit);
  set('t-cta-request', t.ctaRequest);
  set('t-cta-bili', t.ctaBili);
  set('t-units-title', t.unitsTitle);
  set('t-units-desc', t.unitsDesc);
  set('t-artists-title', t.artistsTitle);
  set('t-artists-desc', t.artistsDesc);
  set('t-about-title', t.aboutTitle);
  html('t-about-content', t.aboutContent);
  set('t-contact-label', t.contactLabel);
  set('t-bili-label', t.biliLabel);
  set('t-disclaimer-title', t.disclaimerTitle);
  html('t-disclaimer-content', t.disclaimerContent);
  set('t-footer-text', t.footerText);
  set('t-footer-bili', t.footerBili);
  set('t-footer-contact', t.footerContact);
  set('t-footer-copy', t.footerCopy);

  renderGallery();
  renderPicks();
  renderUnits();
}

// ── Render helpers ────────────────────────────────────────────────
function renderCard(art) {
  const t = T[lang];
  const unit = UNITS.find(u => u.name === art.unit);
  const color = unit ? unit.color : '#888';
  const badge = art.editor ? `<span class="editor-badge">${lang === 'en' ? 'Pick' : '推薦'}</span>` : '';
  const thumb = art.image_url
    ? `<img src="${art.image_url}" alt="${art.title}" loading="lazy">`
    : `<span class="thumb-emoji">${art.thumb}</span>`;
  const artistHtml = art.artist
    ? `<a href="${art.url || '#'}" target="_blank" rel="noopener">${art.artist}</a>`
    : `<span style="color:var(--muted)">${t.unknown}</span>`;
  return `<div class="art-card" data-unit="${art.unit}" data-char="${art.char}" data-artist="${art.artist || ''}">
    <div class="art-thumb">${badge}${thumb}</div>
    <div class="art-info">
      <div class="art-unit-tag" style="color:${color}">${art.unit}</div>
      <div class="art-title">${art.title}</div>
      <div class="art-artist">🖌 ${artistHtml}</div>
    </div>
  </div>`;
}

function renderGallery(query = '') {
  let arts = unitFilter === 'all' ? ARTWORKS : ARTWORKS.filter(a => a.unit === unitFilter);
  if (query) {
    const q = query.toLowerCase();
    arts = arts.filter(a =>
      a.title.toLowerCase().includes(q) ||
      (a.artist && a.artist.toLowerCase().includes(q)) ||
      a.unit.toLowerCase().includes(q) ||
      a.char.toLowerCase().includes(q)
    );
  }
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = arts.length
    ? arts.map(renderCard).join('')
    : `<div class="empty"><div class="icon">🔍</div><p>No results.</p></div>`;
}

function renderPicks() {
  const el = document.getElementById('picks-grid');
  if (!el) return;
  el.innerHTML = ARTWORKS.filter(a => a.editor).map(renderCard).join('');
}

function renderUnits() {
  const el = document.getElementById('units-grid');
  if (!el) return;
  const t = T[lang];
  el.innerHTML = UNITS.map(u => {
    const count = ARTWORKS.filter(a => a.unit === u.name).length;
    return `<div class="unit-card" onclick="filterUnit('${u.name}',null);showPage('home');">
      <div class="unit-top-bar" style="background:${u.color}"></div>
      <div class="unit-emblem">${u.emblem}</div>
      <div class="unit-name" style="color:${u.color}">${u.name}</div>
      <div class="unit-members">${u.members.map(m => `<span class="member-tag">${m}</span>`).join('')}</div>
      <div class="unit-count">✦ ${count} ${t.artCount}</div>
    </div>`;
  }).join('');
}

function renderArtists() {
  const el = document.getElementById('artist-wall');
  if (!el) return;
  el.innerHTML = ARTISTS.map(a =>
    `<a href="${a.url}" target="_blank" rel="noopener" class="artist-card">
      <div class="artist-avatar">${a.avatar}</div>
      <div><div class="artist-name">${a.name}</div><div class="artist-platform">${a.platform}</div></div>
    </a>`
  ).join('');
}

// ── Filters ───────────────────────────────────────────────────────
function filterUnit(unit, btn) {
  unitFilter = unit;
  document.querySelectorAll('.unit-chip').forEach(c => {
    c.classList.remove('active');
    c.style.background = 'none';
    c.style.color = c.style.borderColor;
  });
  if (btn) {
    btn.classList.add('active');
    btn.style.background = btn.style.borderColor;
    btn.style.color = '#0d1b2a';
  } else {
    // Activate matching chip
    document.querySelectorAll('.unit-chip').forEach(c => {
      if (c.dataset.unit === unit || (unit === 'all' && c.id === 'chip-all')) {
        c.classList.add('active');
        c.style.background = c.style.borderColor;
        c.style.color = '#0d1b2a';
      }
    });
  }
  renderGallery();
}

function filterGallery(q) { renderGallery(q); }

// ── Page navigation ───────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + name);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const nb = document.getElementById('nav-' + name);
  if (nb) nb.classList.add('active');
  window.scrollTo(0, 0);
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang();
  renderArtists();
});
