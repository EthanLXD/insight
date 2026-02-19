/**
 * 行业方案 - 卡片网格（6 项），点击进入详情（大图 + 描述）
 */
import { t } from '../i18n/index.js';
import { ROUTES } from '../config/index.js';
import { getSectionId } from '../core/Router.js';

const SOLUTION_IDS = ['1', '2', '3', '4', '5', '6'];
const SOLUTION_IMAGES = [
  '/images/solutions/1.jpg',
  '/images/solutions/2.jpg',
  '/images/solutions/3.jpg',
  '/images/solutions/4.jpg',
  '/images/solutions/5.jpg',
  '/images/solutions/6.jpg',
];

export function getSolutionItem(id) {
  const idx = SOLUTION_IDS.indexOf(String(id));
  if (idx === -1) return null;
  return {
    id: SOLUTION_IDS[idx],
    image: SOLUTION_IMAGES[idx],
    title: t('solution.item' + SOLUTION_IDS[idx] + '.title'),
    desc: t('solution.item' + SOLUTION_IDS[idx] + '.desc'),
  };
}

function snippet(text, maxLen = 120) {
  if (!text) return '';
  return text.length <= maxLen ? text : text.slice(0, maxLen).trim() + '...';
}

export function render() {
  const id = getSectionId(ROUTES.SOLUTIONS);
  const cards = SOLUTION_IDS.map(
    (sid) => {
      const item = getSolutionItem(sid);
      const shortDesc = snippet(item.desc);
      return `
      <article class="solution-card" data-section="${ROUTES.SOLUTIONS}" data-sub="${sid}">
        <div class="solution-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="solution-card-img" onerror="this.style.display='none'" />
        </div>
        <div class="solution-card-body">
          <h3 class="solution-card-title">${item.title}</h3>
          <p class="solution-card-desc">${shortDesc}</p>
        </div>
      </article>`;
    }
  ).join('');
  return `
    <section id="${id}" class="panel">
      <div class="section-inner">
        <div class="solutions-grid">
          ${cards}
        </div>
        <div class="solution-detail" hidden>
          <a href="#" class="solution-detail-back" data-section="${ROUTES.SOLUTIONS}">${t('solutions.back')}</a>
          <div class="solution-detail-img-wrap">
            <img id="solution-detail-img" src="" alt="" class="solution-detail-img" />
          </div>
          <h3 id="solution-detail-title" class="solution-detail-title"></h3>
          <p id="solution-detail-desc" class="solution-detail-desc"></p>
        </div>
      </div>
    </section>
  `;
}

export function init(container) {
  if (!container) return;
  container.querySelectorAll('.solution-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const section = card.getAttribute('data-section');
      const sub = card.getAttribute('data-sub');
      if (section && sub) window.dispatchEvent(new CustomEvent('app:navigate', { detail: { section, sub } }));
    });
  });
  container.querySelector('.solution-detail-back')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('app:navigate', { detail: { section: ROUTES.SOLUTIONS, sub: null } }));
  });
}
