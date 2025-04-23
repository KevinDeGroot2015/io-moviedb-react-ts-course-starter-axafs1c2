import { FunctionComponent } from 'react';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { IMDBMovie } from '../model/movie';

const Home: FunctionComponent = () => {
  const { data } = useContext(DataContext);
  console.log(data)

  return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data && data.length > 0 ? (
          data.map((movie: IMDBMovie) => (
            <li
              key={movie.imdbID}
              className="bg-white rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-72 object-cover"
              />
              <p className="p-4 font-bold text-lg text-gray-800">{movie.Title}</p>
              <p className="pb-4">{movie.Year}</p>
            </li>
          ))
        ) : (
          <li>Search all movies!</li>
        )}
      </ul>
  );
};

export default Home;
