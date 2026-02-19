/**
 * 服务领域
 */
import { t } from '../i18n/index.js';
import { ROUTES } from '../config/index.js';
import { getSectionId } from '../core/Router.js';

function renderServiceBlock(sub) {
  const titles = {
    personal: t('services.personal.title'),
    corporate: t('services.corporate.title'),
    legal: t('services.legal.title'),
    special: t('services.special.title'),
  };
  const itemsMap = {
    personal: [1, 2, 3, 4].map((i) => t('services.personal.item' + i)),
    corporate: [1, 2, 3].map((i) => t('services.corporate.item' + i)),
    legal: [1, 2, 3].map((i) => t('services.legal.item' + i)),
    special: [1, 2].map((i) => t('services.special.item' + i)),
  };
  const title = titles[sub] || titles.personal;
  const items = (itemsMap[sub] || itemsMap.personal).map((text) => `<li>${text}</li>`).join('');
  return `
    <article id="service-${sub}" class="service-page">
      <h3 class="service-page-title">${title}</h3>
      <ul class="service-page-list">${items}</ul>
    </article>
  `;
}

export function render() {
  const id = getSectionId(ROUTES.SERVICES);
  const blocks = ['personal', 'corporate', 'legal', 'special'].map((sub) => renderServiceBlock(sub)).join('');
  return `
    <section id="${id}" class="panel">
      <div class="section-inner">
        <h2 class="section-title">${t('services.title')}</h2>
        <p class="section-lead">${t('services.lead')}</p>
        <div class="service-content">
          ${blocks}
        </div>
      </div>
    </section>
  `;
}
