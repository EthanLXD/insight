/**
 *
 */
import { ROUTES } from '../config/index.js';

export const SECTIONS_ORDER = [
  ROUTES.HOME,
  ROUTES.SERVICES,
  ROUTES.SOLUTIONS,
  ROUTES.ABOUT,
  ROUTES.CONTACT,
];

export const NAV_DROPDOWNS = {
  [ROUTES.SERVICES]: [
    { id: 'personal', i18nKey: 'nav.services.personal' },
    { id: 'corporate', i18nKey: 'nav.services.corporate' },
    { id: 'legal', i18nKey: 'nav.services.legal' },
    { id: 'special', i18nKey: 'nav.services.special' },
  ],
  [ROUTES.ABOUT]: [
    { id: 'founder', i18nKey: 'nav.about.founder' },
    { id: 'qualifications', i18nKey: 'nav.about.qual' },
  ],
};

export const SERVICE_SUBS = ['personal', 'corporate', 'legal', 'special'];
export const ABOUT_SUBS = ['founder', 'qualifications'];
