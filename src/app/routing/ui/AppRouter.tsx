import { memo, Suspense, useCallback } from 'react';
import { Route, Routes, RouteProps } from 'react-router-dom';

import { routeConfig } from '@app/routing/config/routerConfig';

function AppRouter() {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = (
      <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>
    );
    return <Route key={route.path} path={route.path} element={element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export default memo(AppRouter);
