/**
 * 关于我们 
 */
import { t } from '../i18n/index.js';
import { ROUTES } from '../config/index.js';
import { getSectionId } from '../core/Router.js';

export function render() {
  const id = getSectionId(ROUTES.ABOUT);
  return `
    <section id="${id}" class="panel">
      <div class="section-inner">
        <div class="about-layout">
          <div class="about-left">
            <p class="about-founder-p">${t('about.founder.desc')}</p>
            <h3 class="about-qual-heading">${t('about.qual.title')}</h3>
            <p class="about-founder-p">${t('about.qual.desc')}</p>
          </div>
          <div class="about-founder-image-wrap">
            <img src="${__IMG_BASE__ + 'image1.jpg'}" alt="${t('about.founder.title')}" class="about-founder-image" onerror="this.parentElement.style.display='none'" />
          </div>
        </div>
      </div>
    </section>
  `;
}
