/**
 * 联系我们
 */
import { t } from '../i18n/index.js';
import { ROUTES } from '../config/index.js';
import { CONTACT } from '../config/index.js';
import { getSectionId } from '../core/Router.js';

export function render() {
  const id = getSectionId(ROUTES.CONTACT);
  return `
    <section id="${id}" class="panel">
      <div class="section-inner">
        <div class="contact-page-wrap">
          <div class="contact-offices">
            <div class="contact-office">
              <h3 class="contact-office-name">${t('contact.office1.name')}</h3>
              <p class="contact-office-line"><strong>${t('contact.address')}</strong> ${t('contact.office1.address')}</p>
              ${t('contact.office1.poBox') ? `<p class="contact-office-line"><strong>${t('contact.poBox')}</strong> ${t('contact.office1.poBox')}</p>` : ''}
              <p class="contact-office-line"><strong>${t('contact.phone')}</strong> <a href="${CONTACT.phone ? 'tel:' + CONTACT.phone.replace(/\s/g, '') : '#'}" class="contact-link">${CONTACT.phone || t('nav.phone')}</a></p>
              <p class="contact-office-line"><strong>${t('contact.email')}</strong> <a href="mailto:${CONTACT.email}" class="contact-link">${CONTACT.email}</a></p>
            </div>
            <div class="contact-office">
              <h3 class="contact-office-name">${t('contact.office2.name')}</h3>
              <p class="contact-office-line"><strong>${t('contact.address')}</strong> ${t('contact.office2.address')}</p>
              ${t('contact.office2.poBox') ? `<p class="contact-office-line"><strong>${t('contact.poBox')}</strong> ${t('contact.office2.poBox')}</p>` : ''}
              <p class="contact-office-line"><strong>${t('contact.phone')}</strong> <a href="${CONTACT.phone ? 'tel:' + CONTACT.phone.replace(/\s/g, '') : '#'}" class="contact-link">${CONTACT.phone || t('nav.phone')}</a></p>
              <p class="contact-office-line"><strong>${t('contact.email')}</strong> <a href="mailto:${CONTACT.email}" class="contact-link">${CONTACT.email}</a></p>
            </div>
          </div>
          <div class="contact-form-wrap">
            <form class="contact-form" action="#" method="post">
              <div class="contact-field">
                <label for="contact-name">${t('contact.form.name')}</label>
                <input type="text" id="contact-name" name="name" />
              </div>
              <div class="contact-field">
                <label for="contact-email">${t('contact.form.email')}</label>
                <input type="email" id="contact-email" name="email" />
              </div>
              <div class="contact-field">
                <label for="contact-phone">${t('contact.form.phone')}</label>
                <input type="tel" id="contact-phone" name="phone" />
              </div>
              <div class="contact-field">
                <label for="contact-enquiry">${t('contact.form.enquiry')}</label>
                <textarea id="contact-enquiry" name="enquiry" rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-primary contact-submit">${t('contact.form.submit')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function init(container) {
  const form = container?.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // 后续可接表单提交逻辑
    });
  }
}
