import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
  return (
    <>
      <h1>Home test</h1>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      ></ul>
    </>
  );
};

export default Home;
