/**
 * 
 */
import { ROUTES } from '../config/index.js';
import * as Home from './Home.js';
import * as Services from './Services.js';
import * as Solutions from './Solutions.js';
import * as About from './About.js';
import * as Contact from './Contact.js';

export const pageModules = {
  [ROUTES.HOME]: Home,
  [ROUTES.SERVICES]: Services,
  [ROUTES.SOLUTIONS]: Solutions,
  [ROUTES.ABOUT]: About,
  [ROUTES.CONTACT]: Contact,
};
