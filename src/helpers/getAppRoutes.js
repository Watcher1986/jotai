import React from 'react';
import { Route } from 'react-router-dom';

export const getAppRoutes = (routes) =>
  routes.map((route) => (
    <Route path={route.path} element={route.component} key={route.key} />
  ));
