/**
 * 联系信息 - 
 */
export const CONTACT = {
  phone: '0808 0000',
  phoneIntl: '+64 (0)21 456 345',
  email: 'info@insightinvestgation.co.nz',
  website: 'www.insightinvestgation.co.nz',
  company: 'INSIGHT Investigations Ltd',
  poBox: 'PO Box 0635, Greenhithe, Auckland, 0635 – New Zealand',
  licence: '25-133751',
};

export const APP = {
  name: 'Insight',
  defaultLang: 'en',
  supportedLangs: ['zh', 'en'],
  get contactPhone() {
    return CONTACT.phone;
  },
};

export const ROUTES = {
  HOME: 'home',
  SERVICES: 'services',
  SOLUTIONS: 'solutions',
  ABOUT: 'about',
  CONTACT: 'contact',
};

export const SECTION_IDS = {
  [ROUTES.HOME]: 'section-home',
  [ROUTES.SERVICES]: 'section-services',
  [ROUTES.SOLUTIONS]: 'section-solutions',
  [ROUTES.ABOUT]: 'section-about',
  [ROUTES.CONTACT]: 'section-contact',
};
