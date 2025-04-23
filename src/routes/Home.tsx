import { FunctionComponent } from 'react';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { IMDBMovie } from '../model/movie';

const Home: FunctionComponent = () => {
  const context = useContext(DataContext) || { data: [] };
  const { data } = context;

  return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data.map((item: IMDBMovie) => {
          return <li key={item.imdbID}>{item.Title}</li>
        })}
      </ul>
  );
};

export default Home;
