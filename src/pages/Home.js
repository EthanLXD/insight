/**
 * 首页：灰色横幅 + 轮播图（本地图片）+ 公司介绍（AZ/NZS ISO 9001 高亮）+ 四块图文
 */
import { t } from '../i18n/index.js';
import { ROUTES } from '../config/index.js';
import { getSectionId } from '../core/Router.js';

const CAROUSEL_IMAGES = ['/images/carousel-1.jpg', '/images/carousel-2.jpg', '/images/carousel-3.jpg'];
const BLOCK_IMAGES = [
  '/images/surveillance.jpg',
  '/images/bug-sweeps.jpg',
  '/images/finding-missing-person.jpg',
];

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
  const blockKeys = [1, 3, 4];
  const blocks = blockKeys.map(
    (i, idx) => `
    <div class="home-block">
      <div class="home-block-img-wrap">
        <img src="${BLOCK_IMAGES[idx]}" alt="${t('home.block' + i + '.title')}" class="home-block-img" onerror="this.style.display='none'" />
      </div>
      <h3 class="home-block-title">${t('home.block' + i + '.title')}</h3>
      <p class="home-block-text">${t('home.block' + i + '.text')}</p>
    </div>`
  ).join('');
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
        <p class="home-intro-p">${t('home.intro.p2a')}<span class="home-intro-highlight">AZ/NZS ISO 9001</span>${t('home.intro.p2b')}</p>
        <ul class="home-intro-list">${(t('home.intro.li') || '')
          .split('•')
          .map((s) => s.trim())
          .filter(Boolean)
          .map((item) => `<li>${item}</li>`)
          .join('')}</ul>
      </div>
      <div class="home-blocks section-inner">
        ${blocks}
      </div>
    </section>
  `;
}

export function init(container) {
  if (!container) return;
  const carouselInner = container.querySelector('.home-carousel-inner');
  const slides = container.querySelectorAll('.home-carousel-slide');
  const dotBtns = container.querySelectorAll('.home-carousel-dot');
  if (slides.length && dotBtns.length) {
    function goTo(index) {
      const i = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === i));
      dotBtns.forEach((d, k) => d.classList.toggle('active', k === i));
    }
    dotBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => goTo(i));
    });
    let current = 0;
    const autoplay = setInterval(() => {
      current += 1;
      goTo(current);
    }, 5000);
    const carousel = container.querySelector('.home-carousel');
    if (carousel) carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
  }
}
