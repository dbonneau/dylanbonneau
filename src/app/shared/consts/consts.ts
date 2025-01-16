export const ROUTING_HOME = 'home';
export const ROUTING_ABOUT = 'a-propos';
export const ROUTING_WEDDING = 'mariage';
export const ROUTING_BLOGS = 'blogs';
export const ROUTING_LEGAL_NOTICE = 'mentions-legales';

export const ROUTING_DEMO = 'demo';
export const ROUTING_ICONS = 'icons';
export const ROUTING_COLORS = 'colors';
export const ROUTING_BUTTONS = 'buttons';
export const ROUTING_FORMS = 'forms';
export const ROUTING_NOT_FOUND = '404';

// PLACES
export const ROUTING_PLACES = 'photographe-mariage-';
export const PLACES = {
  RENNES: 'rennes',
  CAEN: 'caen'
};
export const ROUTING_RENNES = `${ROUTING_PLACES}${PLACES.RENNES}`;
export const ROUTING_CAEN = `${ROUTING_PLACES}${PLACES.CAEN}`;

export const ROUTING = {
  // Module Demo
  Demo: `/${ROUTING_DEMO}`,
  Icons: `/${ROUTING_DEMO}/${ROUTING_ICONS}`,
  Colors: `/${ROUTING_DEMO}/${ROUTING_COLORS}`,
  Buttons: `/${ROUTING_DEMO}/${ROUTING_BUTTONS}`,
  Forms: `/${ROUTING_DEMO}/${ROUTING_FORMS}`,
  // Module Home
  Home: `/${ROUTING_HOME}`,
  // Module about
  About: `/${ROUTING_ABOUT}`,
  // Module wedding
  Wedding: `/${ROUTING_WEDDING}`,
  // Module blogs
  Blogs: `/${ROUTING_BLOGS}`,
  // Module legal notice
  legalNotice: `/${ROUTING_LEGAL_NOTICE}`,
  // Module places
  Rennes: `/${ROUTING_RENNES}`,
  Caen: `/${ROUTING_CAEN}`,
  // Calendly
  calendly: `https://calendly.com/dylanbonneau/appel-telephonique`
};
