/**
 * 
 */
import { APP, ROUTES } from '../config/index.js';
import { SECTIONS_ORDER, NAV_DROPDOWNS } from '../constants/index.js';
import { t } from '../i18n/index.js';

function buildNavList() {
  const items = [];
  for (const section of SECTIONS_ORDER) {
    const subs = NAV_DROPDOWNS[section];
    const labelKey = section === ROUTES.SERVICES ? 'nav.services' : section === ROUTES.ABOUT ? 'nav.about' : `nav.${section}`;
    const label = t(labelKey);
    if (subs && subs.length > 0) {
      const subLinks = subs.map((s) => `<li><a href="#" data-section="${section}" data-sub="${s.id}">${t(s.i18nKey)}</a></li>`).join('');
      items.push(`
        <li class="has-dropdown">
          <a href="#" class="nav-link" data-section="${section}">${label}</a>
          <ul class="dropdown">${subLinks}</ul>
        </li>
      `);
    } else {
      const active = section === ROUTES.HOME ? ' active' : '';
      items.push(`<li><a href="#" class="nav-link${active}" data-section="${section}">${label}</a></li>`);
    }
  }
  return items.join('\n');
}

export function renderHeader() {
  const phoneDisplay = APP.contactPhone || t('nav.phone');
  const phoneHref = APP.contactPhone ? `tel:${APP.contactPhone.replace(/\s/g, '')}` : '#';
  const callLabel = t('nav.call');
  const brandName = t('nav.brandName');
  const brandTagline = t('nav.brandTagline');

  return `
    <header class="site-header">
      <div class="header-inner">
        <a href="#" class="header-brand" data-section="${ROUTES.HOME}">
          <img src="/logo.png" alt="${brandName}" class="header-logo" onerror="this.style.display='none'" />
          <span class="header-brand-text">
            <span class="header-brand-name">${brandName}</span>
            <span class="header-brand-tagline">${brandTagline}</span>
          </span>
        </a>
        <div class="header-right">
          <nav class="main-nav">
            <ul class="nav-list">${buildNavList()}</ul>
          </nav>
          <div class="header-actions">
            <a href="${phoneHref}" class="header-call-btn" ${!APP.contactPhone ? 'data-section="' + ROUTES.CONTACT + '"' : ''}>${callLabel}: ${phoneDisplay}</a>
            <div class="lang-switch">
              <button type="button" class="lang-btn active" data-lang="zh">中文</button>
              <span class="lang-divider">|</span>
              <button type="button" class="lang-btn" data-lang="en">EN</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `;
}
