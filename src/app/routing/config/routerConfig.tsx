import { RouteProps } from 'react-router-dom';

import {
  BlogPage,
  HomePage,
  ShopPage,
  AboutPage,
  ContactPage,
  FeaturesPage,
  NotFoundPage,
} from '@/pages';
import { routes } from '@app/routing/config/routes';

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

const { blog, contact, home, shop, features, about } = routes;

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: home,
    element: <HomePage />,
  },
  [AppRoutes.SHOP]: {
    path: shop,
    element: <ShopPage />,
  },
  [AppRoutes.ABOUT]: {
    path: about,
    element: <AboutPage />,
  },
  [AppRoutes.BLOG]: {
    path: blog,
    element: <BlogPage />,
  },
  [AppRoutes.FEATURES]: {
    path: features,
    element: <FeaturesPage />,
  },
  [AppRoutes.CONTACT]: {
    path: contact,
    element: <ContactPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
