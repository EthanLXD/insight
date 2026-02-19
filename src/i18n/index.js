/**
 *
 */
import { APP } from '../config/index.js';
import zh from './locales/zh.js';
import en from './locales/en.js';

const locales = { zh, en };

let currentLang = APP.defaultLang;

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (!APP.supportedLangs.includes(lang)) return;
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const title = t('page.title');
  if (title) document.title = title;
  return currentLang;
}

export function t(key) {
  const dict = locales[currentLang];
  return dict != null && key in dict ? dict[key] : key;
}

export function getLocaleDict() {
  return locales[currentLang] || locales.zh;
}

export { locales };
