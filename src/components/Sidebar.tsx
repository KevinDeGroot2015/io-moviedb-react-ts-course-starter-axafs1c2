import { FunctionComponent } from 'react';

const Sidebar: FunctionComponent = ({}) => {
  return (
    <nav
      aria-label="Sidebar"
      className="sticky top-4 divide-y divide-gray-300"
    >
      <div className="pb-8 space-y-1">{/* navigation */}</div>
    </nav>
  );
};

export default Sidebar;


