/**

 */
import { navigate, getState, getActiveClass } from './Router.js';
import { t } from '../i18n/index.js';
import { NAV_DROPDOWNS } from '../constants/index.js';

const ACTIVE = getActiveClass();

export function bindNav(container) {
  if (!container) return;

  const links = container.querySelectorAll('[data-section]');
  links.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const section = el.getAttribute('data-section');
      const sub = el.getAttribute('data-sub') || null;
      navigate(section, sub);
    });
  });

  const toggle = container.querySelector('.nav-toggle');
  const nav = container.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const dropdownParents = container.querySelectorAll('.has-dropdown');
  dropdownParents.forEach((parent) => {
    const link = parent.querySelector('.nav-link');
    if (!link || !window.matchMedia('(max-width: 900px)').matches) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      parent.classList.toggle('open');
      const section = link.getAttribute('data-section');
      if (section) navigate(section);
    });
  });
}

export function updateNavHighlight(container) {
  if (!container) return;
  const { section } = getState();
  container.querySelectorAll('.nav-link').forEach((link) => {
    const linkSection = link.getAttribute('data-section');
    const linkSub = link.getAttribute('data-sub');
    const isParent = !linkSub;
    link.classList.toggle(ACTIVE, linkSection === section && isParent);
  });
}

export function bindLangSwitch(container) {
  const wrap = container.querySelector('.lang-switch');
  if (!wrap) return;
  wrap.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) window.dispatchEvent(new CustomEvent('app:lang', { detail: { lang } }));
    });
  });
}

export function updateLangButtons(container, currentLang) {
  container.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
}

export function renderNavDropdowns() {
  const items = [];
  for (const [section, subs] of Object.entries(NAV_DROPDOWNS)) {
    if (!subs.length) continue;
    const label = t(`nav.${section === 'services' ? 'services' : 'about'}`);
    const subLinks = subs.map((s) => `<li><a href="#" data-section="${section}" data-sub="${s.id}">${t(s.i18nKey)}</a></li>`).join('');
    items.push(`
      <li class="has-dropdown">
        <a href="#" class="nav-link" data-section="${section}">${label}</a>
        <ul class="dropdown">${subLinks}</ul>
      </li>
    `);
  }
  return items.join('');
}
