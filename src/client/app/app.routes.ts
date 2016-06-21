import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { ColorsRoutes } from './+colors/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...ColorsRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
