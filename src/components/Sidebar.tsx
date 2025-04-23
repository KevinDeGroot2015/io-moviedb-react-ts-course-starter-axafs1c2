import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';

const Sidebar: FunctionComponent = ({}) => {
  return (
    <nav
      aria-label="Sidebar"
      className="sticky top-4 divide-y divide-gray-300"
    >
      <div className="pb-8 space-y-2">
        <NavLink to="/" name="Home" />
        <NavLink to="/favorites" name="Favorites" />
      </div>
    </nav>
  );
};

export default Sidebar;


