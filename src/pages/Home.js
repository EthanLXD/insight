/**
 * 首页：灰色横幅 + 轮播图（本地图片）+ 公司介绍 + 四块图文
 */
import { t } from '../i18n/index.js';
import { ROUTES, CONTACT } from '../config/index.js';
import { getSectionId, navigate } from '../core/Router.js';

const CAROUSEL_IMAGES = [__IMG_BASE__ + 'image1.jpg', __IMG_BASE__ + 'image2.jpg', __IMG_BASE__ + 'image1.jpg'];
const BLOCK_IMAGES = [
  __IMG_BASE__ + 'personmissing.png',
  __IMG_BASE__ + 'evigathering.png',
  __IMG_BASE__ + 'immigration.png',
];

const SERVICE_CARDS = [
  {
    sub: 'personal',
    images: [__IMG_BASE__ + 'personalInv.jpg', __IMG_BASE__ + 'marriedINV.png', __IMG_BASE__ + 'personmissing.png'],
    modules: ['bg', 'relationship', 'missing', 'identity', 'assets'],
  },
  {
    sub: 'corporate',
    images: [__IMG_BASE__ + 'corporate_investigatio.png', __IMG_BASE__ + 'detectivebusiness.png', __IMG_BASE__ + 'fraud.jpg'],
    modules: ['bg', 'partner', 'fraud', 'due', 'ip'],
  },
  {
    sub: 'legal',
    images: [__IMG_BASE__ + 'litigation.jpg', __IMG_BASE__ + 'assettracing.jpg', __IMG_BASE__ + 'debtor.jpg'],
    modules: ['litigation', 'asset', 'debtor', 'witness'],
  },
  {
    sub: 'international',
    images: [__IMG_BASE__ + 'chinabackgroundcheck.jpg', __IMG_BASE__ + 'chinacorp.jpg', __IMG_BASE__ + 'chinaasset.jpg'],
    modules: ['bg', 'corp', 'asset', 'missing'],
  },
];

function renderServiceShowcase() {
  const cards = SERVICE_CARDS.map(({ sub, images, modules }) => {
    const slides = images.map(
      (src, i) => `<div class="home-svc-slide${i === 0 ? ' active' : ''}"><img class="home-svc-img" src="${src}" alt="" onerror="this.style.display='none'" /></div>`
    ).join('');
    const moduleItems = modules.map(
      (key) => `<li><a class="home-svc-module-link" href="#" data-sub="${sub}" data-key="${key}">${t(`services.${sub}.${key}.title`)}</a></li>`
    ).join('');
    return `
      <div class="home-svc-card">
        <div class="home-svc-carousel" data-svc-carousel="${sub}">
          <div class="home-svc-carousel-inner">${slides}</div>
          <div class="home-svc-overlay">
            <p class="home-svc-card-title">${t(`serviceTab.${sub}`)}</p>
          </div>
        </div>
        <ul class="home-svc-modules">${moduleItems}</ul>
      </div>`;
  }).join('');
  return `
    <div class="home-svc-section">
      <div class="home-svc-section-header">
        <h2 class="home-svc-section-title">${t('services.title')}</h2>
      </div>
      <div class="home-svc-inner section-inner">
        <div class="home-svc-grid">${cards}</div>
      </div>
    </div>`;
}

export function render() {
  const id = getSectionId(ROUTES.HOME);
  const slides = CAROUSEL_IMAGES.map(
    (src, i) => `
    <div class="home-carousel-slide${i === 0 ? ' active' : ''}" data-index="${i}">
      <img src="${src}" alt="" class="home-carousel-img" onerror="this.style.display='none'" />
    </div>`
  ).join('');
  const dots = CAROUSEL_IMAGES.map(
    (_, i) => `<button type="button" class="home-carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`
  ).join('');
  const blocks = [1, 2, 3].map(
    (i, idx) => `
    <div class="home-block" data-solution="${i}" style="cursor:pointer">
      <div class="home-block-img-wrap">
        <img src="${BLOCK_IMAGES[idx]}" alt="${t('solution.item' + i + '.title')}" class="home-block-img" onerror="this.style.display='none'" />
      </div>
      <div class="home-block-body">
        <h3 class="home-block-title">${t('solution.item' + i + '.title')}</h3>
        <p class="home-block-text">${t('solution.item' + i + '.desc')}</p>
      </div>
    </div>`
  ).join('');

  const listItems = (t('home.intro.li') || '')
    .split('•')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((item) => `<li>${item}</li>`)
    .join('');

  return `
    <section id="${id}" class="panel home-page">
      <div class="home-banner">
        <p class="home-banner-text">${t('home.banner')}</p>
      </div>
      <div class="home-carousel">
        <div class="home-carousel-inner">
          ${slides}
        </div>
        <div class="home-carousel-dots">${dots}</div>
      </div>
      <div class="home-intro section-inner">
        <p class="home-intro-p">${t('home.intro.p1')}</p>
        <p class="home-intro-p">
          ${t('home.intro.p2a')}<span class="home-intro-highlight">${t('home.intro.licence')}</span>${t('home.intro.p2b')}
        </p>
        <p class="home-intro-p">${t('home.intro.p3')}</p>
        <p class="home-intro-p"><strong>${t('home.intro.listTitle')}</strong></p>
        <ul class="home-intro-list">${listItems}</ul>
      </div>
      ${renderServiceShowcase()}
      <div class="home-sol-section">
        <div class="home-svc-section-header">
          <h2 class="home-svc-section-title">${t('solutions.title')}</h2>
        </div>
        <div class="home-sol-inner section-inner">
          <div class="home-blocks">${blocks}</div>
        </div>
      </div>
      <div class="home-contact-section">
        <div class="home-svc-section-header">
          <h2 class="home-svc-section-title">Contact Insight Investigations</h2>
        </div>
        <div class="home-contact-inner section-inner">
          <div class="home-contact-cols">
            <div class="home-contact-left">
              <p class="home-contact-row"><strong>W:</strong> <a class="home-contact-link" href="https://${CONTACT.website}" target="_blank">${CONTACT.website}</a></p>
              <p class="home-contact-row"><strong>P:</strong> <a class="home-contact-link" href="tel:08080000">${CONTACT.phone}</a></p>
              <p class="home-contact-row"><strong>International:</strong> <a class="home-contact-link" href="tel:+6421456345">${CONTACT.phoneIntl}</a></p>
            </div>
            <div class="home-contact-right">
              <p class="home-contact-row"><strong>${CONTACT.company}</strong></p>
              <p class="home-contact-row">${CONTACT.poBox}</p>
              <p class="home-contact-row"><strong>${t('contact.licence')}:</strong> ${CONTACT.licence}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function init(container) {
  if (!container) return;
  const slides = container.querySelectorAll('.home-carousel-slide');
  const dotBtns = container.querySelectorAll('.home-carousel-dot');
  if (slides.length && dotBtns.length) {
    function goTo(index) {
      const i = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === i));
      dotBtns.forEach((d, k) => d.classList.toggle('active', k === i));
    }

    let current = 0;
    let autoplay = setInterval(() => {
      current += 1;
      goTo(current);
    }, 5000);

    dotBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        current = i;          // ← 同步 current
        goTo(current);
      });
    });

    const carousel = container.querySelector('.home-carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
      carousel.addEventListener('mouseleave', () => {   // ← 移出后重启
        clearInterval(autoplay);
        autoplay = setInterval(() => {
          current += 1;
          goTo(current);
        }, 5000);
      });
    }
  }

  // Service showcase — per-card carousels
  container.querySelectorAll('[data-svc-carousel]').forEach((card) => {
    const svcSlides = card.querySelectorAll('.home-svc-slide');
    if (svcSlides.length <= 1) return;
    let idx = 0;
    setInterval(() => {
      svcSlides[idx].classList.remove('active');
      idx = (idx + 1) % svcSlides.length;
      svcSlides[idx].classList.add('active');
    }, 4000);
  });

  // Solution card clicks — navigate to Solutions detail
  container.addEventListener('click', (e) => {
    const block = e.target.closest('.home-block[data-solution]');
    if (block) {
      const sub = block.dataset.solution;
      window.dispatchEvent(new CustomEvent('app:navigate', { detail: { section: ROUTES.SOLUTIONS, sub } }));
      return;
    }
  });

  // Service showcase — module link clicks
  container.addEventListener('click', (e) => {
    const link = e.target.closest('.home-svc-module-link');
    if (!link) return;
    e.preventDefault();
    const sub = link.dataset.sub;
    const key = link.dataset.key;
    navigate(ROUTES.SERVICES, sub);
    setTimeout(() => {
      const el = document.getElementById(`service-${sub}-${key}`);
      if (el) {
        const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 150);
  });
}