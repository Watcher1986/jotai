import { appRoutes } from '../../routes';
import NavItem from '../NavItem';

import './styles.css';

const Navbar = () => {
  return (
    <nav>
      {appRoutes.map((route) => (
        <NavItem key={route.key} route={route} />
      ))}
    </nav>
  );
};

export default Navbar;
