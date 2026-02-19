/**
 *
 */
import { t } from '../i18n/index.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <p class="copyright">${t('footer.copyright')}</p>
      </div>
    </footer>
  `;
}
