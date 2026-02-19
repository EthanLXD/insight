/**
 *
 */
import { navigate, getState, getSectionId, subscribe } from './core/Router.js';
import { bindNav, updateNavHighlight, bindLangSwitch, updateLangButtons } from './core/NavController.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { pageModules } from './pages/index.js';
import { getSolutionItem } from './pages/Solutions.js';
import { ROUTES } from './config/index.js';
import { setLang, getLang } from './i18n/index.js';

let appEl;
let mainEl;

function renderMain() {
  return Object.entries(pageModules)
    .map(([section, mod]) => mod.render())
    .join('\n');
}

function setActivePanel(section) {
  const id = getSectionId(section);
  mainEl.querySelectorAll('.panel').forEach((p) => p.classList.remove('active'));
  const panel = mainEl.querySelector('#' + id);
  if (panel) panel.classList.add('active');
}

function runPageInit(section) {
  const mod = pageModules[section];
  if (mod && typeof mod.init === 'function') {
    const panel = mainEl.querySelector('#' + getSectionId(section));
    if (panel) mod.init(panel);
  }
}

function applySubState(section, sub) {
  if (section === ROUTES.SERVICES) {
    const serviceSub = sub || 'personal';
    mainEl.querySelectorAll('.service-page').forEach((p) => p.classList.remove('active'));
    const page = mainEl.querySelector('#service-' + serviceSub);
    if (page) page.classList.add('active');
  }
  if (section === ROUTES.ABOUT) {
    const aboutSub = sub || 'founder';
    mainEl.querySelectorAll('.about-page').forEach((p) => p.classList.remove('active'));
    const page = mainEl.querySelector('#about-' + aboutSub);
    if (page) page.classList.add('active');
  }
  if (section === ROUTES.SOLUTIONS) {
    const grid = mainEl.querySelector('.solutions-grid');
    const detail = mainEl.querySelector('.solution-detail');
    if (grid && detail) {
      if (sub) {
        const item = getSolutionItem(sub);
        if (item) {
          grid.setAttribute('hidden', '');
          detail.removeAttribute('hidden');
          const img = mainEl.querySelector('#solution-detail-img');
          const titleEl = mainEl.querySelector('#solution-detail-title');
          const descEl = mainEl.querySelector('#solution-detail-desc');
          if (img) img.src = item.image;
          if (img) img.alt = item.title;
          if (titleEl) titleEl.textContent = item.title;
          if (descEl) descEl.textContent = item.desc;
        }
      } else {
        grid.removeAttribute('hidden');
        detail.setAttribute('hidden', '');
      }
    }
  }
}

function refreshContent() {
  const headerContainer = appEl.querySelector('.site-header');
  if (headerContainer) {
    headerContainer.outerHTML = renderHeader();
  }
  const newHeader = appEl.querySelector('.site-header');
  if (newHeader) {
    bindNav(newHeader);
    updateNavHighlight(newHeader);
    bindLangSwitch(newHeader);
    updateLangButtons(newHeader, getLang());
  }

  mainEl.innerHTML = renderMain();
  const { section, sub } = getState();
  setActivePanel(section);
  applySubState(section, sub);
  runPageInit(section);

  const footerContainer = appEl.querySelector('.site-footer');
  if (footerContainer) {
    footerContainer.outerHTML = renderFooter();
  }
}

function onRouteChange({ section, sub }) {
  setActivePanel(section);
  updateNavHighlight(appEl.querySelector('.site-header'));
  applySubState(section, sub);
  runPageInit(section);
}

export function mount(rootSelector = '#app') {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  appEl = root;
  appEl.innerHTML = `
    ${renderHeader()}
    <main class="main-content">${renderMain()}</main>
    ${renderFooter()}
  `;

  mainEl = appEl.querySelector('.main-content');
  const header = appEl.querySelector('.site-header');

  bindNav(header);
  bindLangSwitch(header);
  updateNavHighlight(header);
  updateLangButtons(header, getLang());

  const { section, sub } = getState();
  setActivePanel(section);
  applySubState(section, sub);
  runPageInit(section);

  subscribe(onRouteChange);

  window.addEventListener('app:navigate', (e) => {
    const { section, sub } = e.detail || {};
    if (section) navigate(section, sub ?? null);
  });

  window.addEventListener('app:lang', (e) => {
    const lang = e.detail?.lang;
    if (lang) {
      setLang(lang);
      refreshContent();
    }
  });
}
