import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: FunctionComponent = ({}) => {
  return (
    <nav
      aria-label="Sidebar"
      className="sticky top-4 divide-y divide-gray-300"
    >
      <div className="pb-8 space-y-2">
        <Link
          to="/"
          className="block text-center bg-gray-200 py-2 px-3 shadow hover:bg-gray-500 hover:text-white transition"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="block text-center bg-gray-200 py-2 px-3 shadow hover:bg-gray-500 hover:text-white transition"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;


