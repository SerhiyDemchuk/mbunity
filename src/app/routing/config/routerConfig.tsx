import { RouteProps } from 'react-router-dom';

import {
  AboutPage,
  BlogPage,
  HomePage,
  ShopPage,
  ContactPage,
  FeaturesPage,
  NotFoundPage,
} from '@/pages';
import {
  getRouteBlog,
  getRouteHome,
  getRouteShop,
  getRouteAbout,
  getRouteContact,
  getRouteFeatures,
} from '@app/routing/config/routes';

export enum AppRoutes {
  HOME = 'home',
  BLOG = 'blog',
  SHOP = 'shop',
  ABOUT = 'about',
  CONTACT = 'contact',
  FEATURES = 'features',
  // last
  NOT_FOUND = 'not_found',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: getRouteHome(),
    element: <HomePage />,
  },
  [AppRoutes.SHOP]: {
    path: getRouteShop(),
    element: <ShopPage />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRoutes.BLOG]: {
    path: getRouteBlog(),
    element: <BlogPage />,
  },
  [AppRoutes.FEATURES]: {
    path: getRouteFeatures(),
    element: <FeaturesPage />,
  },
  [AppRoutes.CONTACT]: {
    path: getRouteContact(),
    element: <ContactPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
