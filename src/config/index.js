/**
 * 联系信息 - 
 */
export const CONTACT = {
  phone: '666688',
  email: 'info@example.com',
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
