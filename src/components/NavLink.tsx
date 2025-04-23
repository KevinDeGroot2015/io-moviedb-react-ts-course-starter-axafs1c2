import { Link } from 'react-router-dom';

type NavLinkProps = {
    to: string,
    name: string
};

const NavLink = ({ to, name }: NavLinkProps) => {
  return (
    <Link
        to={to}
        className="block text-center bg-gray-200 py-2 px-3 shadow hover:bg-gray-500 hover:text-white transition"
    >
        {name}
    </Link>
  );
};

export default NavLink;