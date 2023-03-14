import SVGDots from './components/SVGDots';

export const appRoutes = [
  {
    type: 'route',
    path: 'jotai/svg-dots',
    name: 'SVG dots',
    component: <SVGDots />,
    key: 'svg-dots',
  },
  {
    type: 'route',
    path: 'jotai/state',
    name: 'State',
    component: <h1>State separating from the component</h1>,
    key: 'state',
  },
  {
    type: 'route',
    path: 'jotai/rerenders',
    name: 'Rerenders',
    component: <h1>State separating from the component</h1>,
    key: 'rerenders',
  },
];
