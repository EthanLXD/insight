/**
 * 服务领域
 */
import { t } from '../i18n/index.js';
import { ROUTES } from '../config/index.js';
import { getSectionId, getState, navigate, subscribe } from '../core/Router.js';
import { SERVICE_SUBS } from '../constants/sections.js';

const MODULE_KEYS = {
	personal: ['bg', 'relationship', 'missing', 'identity', 'assets'],
	corporate: ['bg', 'partner', 'fraud', 'due', 'ip'],
	legal: ['litigation', 'asset', 'debtor', 'witness'],
	international: ['bg', 'corp', 'asset', 'missing'],
};

const MODULE_IMAGES = {
	personal: {
		bg: __IMG_BASE__ + 'personalInv.jpg',
		relationship: __IMG_BASE__ + 'marriedINV.png',
		missing: __IMG_BASE__ + 'personmissing.png',
		identity: __IMG_BASE__ + 'identify.jpg',
		assets: __IMG_BASE__ + 'personal-asset.jpg',
	},
	corporate: {
		bg: __IMG_BASE__ + 'corporate_investigatio.png',
		partner: __IMG_BASE__ + 'detectivebusiness.png',
		fraud: __IMG_BASE__ + 'fraud.jpg',
		due: __IMG_BASE__ + 'diligence.jpg',
		ip: __IMG_BASE__ + 'investagation.jpg',
	},
	legal: {
		litigation: __IMG_BASE__ + 'litigation.jpg',
		asset: __IMG_BASE__ + 'assettracing.jpg',
		debtor: __IMG_BASE__ + 'debtor.jpg',
		witness: __IMG_BASE__ + 'image2.jpg',
	},
	international: {
		bg: __IMG_BASE__ + 'chinabackgroundcheck.jpg',
		corp: __IMG_BASE__ + 'chinacorp.jpg',
		asset: __IMG_BASE__ + 'chinaasset.jpg',
		missing: __IMG_BASE__ + 'missingperson.jpg',
	},
};

function renderModulePage(sub) {
	const modules = MODULE_KEYS[sub] || [];
	const images = MODULE_IMAGES[sub] || {};

	const modulesHtml = modules.map((key) => {
		const items = [];
		for (let i = 1; i <= 10; i++) {
			const text = t(`services.${sub}.${key}.item${i}`);
			if (!text || text.startsWith('services.')) break;
			items.push(`<li>${text}</li>`);
		}
		const imgSrc = images[key];
		const imgHtml = imgSrc
			? `<img class="personal-module-img-photo" src="${imgSrc}" alt="${t(`services.${sub}.${key}.title`)}">`
			: `<div class="personal-module-img-inner"></div>`;
		const scopeHtml = items.length > 0 ? `
            <div class="personal-module-scope">
              <p class="personal-module-scope-label">${t(`services.${sub}.scopeLabel`)}</p>
              <ul class="personal-module-list">${items.join('')}</ul>
            </div>` : '';
		return `
      <div class="personal-module" id="service-${sub}-${key}">
        <div class="personal-module-header">
          <h3 class="personal-module-title">${t(`services.${sub}.${key}.title`)}</h3>
        </div>
        <div class="personal-module-content">
          <div class="personal-module-body">
            <p class="personal-module-desc">${t(`services.${sub}.${key}.desc`)}</p>
            ${scopeHtml}
          </div>
          <div class="personal-module-img">${imgHtml}</div>
        </div>
      </div>
    `;
	}).join('');

	const introNote = t(`services.${sub}.pageIntroNote`);
	const introNoteHtml = introNote && !introNote.startsWith('services.')
		? `<p class="personal-page-note">${introNote}</p>`
		: '';

	return `
    <article id="service-${sub}" class="service-page">
      <p class="service-intro">${t(`services.${sub}.pageIntro`)}</p>
      <div class="personal-modules">${modulesHtml}</div>
      ${introNoteHtml}
      <p class="service-tagline">All investigations are conducted with strict confidentiality and professionalism.</p>
    </article>
  `;
}

function renderServiceBlock(sub) {
	return renderModulePage(sub);
}

function renderServiceTabs() {
  const tabKeys = { personal: 'serviceTab.personal', corporate: 'serviceTab.corporate', legal: 'serviceTab.legal', international: 'serviceTab.international' };
  return SERVICE_SUBS.map((sub) => `<a href="#" class="service-tab-link" data-section="${ROUTES.SERVICES}" data-sub="${sub}">${t(tabKeys[sub])}</a>`).join('');
}

function setActiveService(panel, sub) {
  const target = SERVICE_SUBS.includes(sub) ? sub : 'personal';

  // 切换 service-page 显示
  panel.querySelectorAll('.service-page').forEach((p) => {
    p.classList.toggle('active', p.getAttribute('id') === `service-${target}`);
  });

  // 切换顶层 tab 高亮
  panel.querySelectorAll('.service-tab-link').forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('data-sub') === target);
  });

  // 更新横幅文字
  const bannerEl = panel.querySelector('#service-banner-text');
  if (bannerEl) bannerEl.textContent = t('services.banner.' + target);
}

export function render() {
  const id = getSectionId(ROUTES.SERVICES);
  const blocks = SERVICE_SUBS.map((sub) => renderServiceBlock(sub)).join('');
  return `
    <section id="${id}" class="panel">
      <div class="service-banner">
        <p class="service-banner-text" id="service-banner-text">${t('services.banner.personal')}</p>
      </div>
      <div class="section-inner">
        <div class="service-content">
          ${blocks}
        </div>
      </div>
    </section>
  `;
}

/**
 * 绑定服务页内 Tab 点击：在本页内切换子分类，并同步路由状态。
 */
export function init(panel) {
  if (!panel) return;

  // 每次进入都重新设置激活状态（含横幅）
  const { sub } = getState();
  setActiveService(panel, sub || 'personal');

  // 订阅路由变化，确保每次切换都更新横幅和激活状态
  // （不受重复绑定保护影响，每次 init 都重新订阅会造成重复，所以用 flag 保护）
  if (panel.dataset.serviceTabsBound === '1') return;
  panel.dataset.serviceTabsBound = '1';

  subscribe(({ section, sub }) => {
    if (section === ROUTES.SERVICES) {
      setActiveService(panel, sub || 'personal');
    }
  });

  panel.addEventListener('click', (e) => {
    // 顶层服务分类 Tab 切换
    const serviceTab = e.target.closest('.service-tab-link');
    if (serviceTab) {
      e.preventDefault();
      const sub = serviceTab.getAttribute('data-sub');
      if (!sub) return;
      setActiveService(panel, sub);
      navigate(ROUTES.SERVICES, sub);
      return;
    }

    // 个人调查页内详情 Tab 切换
    const detailTab = e.target.closest('.personal-detail-tab');
    if (detailTab) {
      e.preventDefault();
      const tabKey = detailTab.getAttribute('data-tab');
      const container = detailTab.closest('.personal-detail-section');
      if (!container) return;

      container.querySelectorAll('.personal-detail-tab').forEach((btn) => {
        btn.classList.toggle('active', btn === detailTab);
        btn.setAttribute('aria-selected', btn === detailTab ? 'true' : 'false');
      });

      container.querySelectorAll('.personal-detail-panel').forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-panel') === tabKey);
      });
    }
  });
}// TESTMARKER_XYZ
