import SVGDots from './components/SVGDots';
import SvgDrawingPanel from './components/StructuredWay';

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
    path: 'jotai/structured-components',
    name: 'State',
    component: <SvgDrawingPanel />,
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
