import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

interface IRoute {
  path: string;
  name: string;
}

interface INavItem {
  route: IRoute;
}

const NavItem: React.FC<INavItem> = ({ route }) => {
  return (
    <NavLink to={route.path} className='navLink'>
      {route.name}
    </NavLink>
  );
};

export default memo(NavItem);
