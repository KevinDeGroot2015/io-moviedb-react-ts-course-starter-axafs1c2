import { ReactNode } from 'react';

type MainProps = {
    children: ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <main className="lg:col-span-9">{children}</main>
  );
};

export default Main;
