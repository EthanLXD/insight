/**
 *
 */
import './styles/index.css';
import { setLang } from './i18n/index.js';
import { APP } from './config/index.js';
import { navigate } from './core/Router.js';
import { mount } from './App.js';

setLang(APP.defaultLang);
navigate('home');

mount('#app');
