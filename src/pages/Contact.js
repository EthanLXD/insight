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
          <div class="contact-info-col">
            <div class="contact-logo-block" style="display:inline-flex;align-items:center;justify-content:center;width:72px;height:72px;background:#111;border-radius:6px;margin-bottom:1.5rem;">
              <span style="color:#fff;font-size:1.75rem;font-weight:900;font-family:serif;letter-spacing:-0.03em;">II</span>
            </div>
            <div class="contact-info-lines">
              <p class="contact-info-row"><strong class="contact-info-label">W:</strong> <a href="https://${CONTACT.website}" target="_blank" class="contact-link">${CONTACT.website}</a></p>
              <p class="contact-info-row"><strong class="contact-info-label">P:</strong> <a href="tel:08080000" class="contact-link">${CONTACT.phone}</a></p>
              <p class="contact-info-row"><strong class="contact-info-label">International:</strong> <a href="tel:+6421456345" class="contact-link">${CONTACT.phoneIntl}</a></p>
            </div>
            <div class="contact-info-divider"></div>
            <div class="contact-info-lines">
              <p class="contact-info-company">${CONTACT.company}</p>
              <p class="contact-info-addr">${CONTACT.poBox}</p>
            </div>
            <div class="contact-info-divider"></div>
            <p class="contact-info-licence"><strong>${t('contact.licence')}:</strong> ${CONTACT.licence}</p>
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

const FORMSPREE_ID = 'YOUR_FORM_ID'; // 替换为你的 Formspree Form ID

export function init(container) {
  const form = container?.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.contact-submit');
    const data = new FormData(form);

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        form.innerHTML = '<p class="contact-success">Thank you! Your message has been sent. We will be in touch shortly.</p>';
      } else {
        throw new Error('Failed');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
      const err = form.querySelector('.contact-error') || document.createElement('p');
      err.className = 'contact-error';
      err.textContent = 'Sorry, something went wrong. Please try again or email us directly.';
      form.appendChild(err);
    }
  });
}
