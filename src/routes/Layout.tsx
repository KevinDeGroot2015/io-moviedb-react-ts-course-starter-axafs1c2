import { FunctionComponent } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: FunctionComponent = ({}) => {
  return (
    <div className="min-h-full">
    <Header />
    <div className="py-10">
      <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
          <Sidebar />
        </div>
          <Main>
            <Outlet />
          </Main>
      </div>
    </div>
  </div>
  );
};

export default Layout;


