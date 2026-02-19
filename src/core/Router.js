/**
 */
import { ROUTES, SECTION_IDS } from '../config/index.js';
import { SECTIONS_ORDER } from '../constants/index.js';

const ACTIVE_CLASS = 'active';

let currentSection = ROUTES.HOME;
let currentSub = null;
let listeners = [];

export function getState() {
  return { section: currentSection, sub: currentSub };
}

export function getSectionId(section) {
  return SECTION_IDS[section] || `section-${section}`;
}

export function navigate(section, sub = null) {
  if (!SECTIONS_ORDER.includes(section)) return;
  currentSection = section;
  currentSub = sub;
  listeners.forEach((fn) => fn({ section: currentSection, sub: currentSub }));
}

export function subscribe(fn) {
  listeners.push(fn);
  return () => { listeners = listeners.filter((l) => l !== fn); };
}

export function getActiveClass() {
  return ACTIVE_CLASS;
}
