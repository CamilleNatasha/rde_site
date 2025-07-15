const routes = {
  home: () => import('./pages/home.js'),
  about: () => import('./pages/about.js'),
  projects: () => import('./pages/projects.js'),
  involved: () => import('./pages/involved.js'),
  donate: () => import('./pages/donate.js'),
  contact: () => import('./pages/contact.js'),
};