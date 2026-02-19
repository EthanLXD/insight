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
        <div class="about-content">
          <div id="about-founder" class="about-page">
            <div class="about-founder-wrap">
              <div class="about-founder-text">
                <h3 class="about-founder-heading">${t('about.founder.heading')}</h3>
                <p class="about-founder-p">${t('about.founder.desc')}</p>
              </div>
              <div class="about-founder-image-wrap">
                <img src="/images/founder.jpg" alt="${t('about.founder.title')}" class="about-founder-image" onerror="this.style.display='none'" />
              </div>
            </div>
          </div>
          <div id="about-qualifications" class="about-page">
            <h3 class="about-page-title">${t('about.qual.title')}</h3>
            <p>${t('about.qual.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
