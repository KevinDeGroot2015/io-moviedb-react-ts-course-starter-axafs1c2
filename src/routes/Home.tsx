import { FunctionComponent } from 'react';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import { IMDBMovie } from '../model/movie';
import MovieCard from '../components/MovieCard';

const Home: FunctionComponent = () => {
  const { data } = useContext(DataContext);

  const handleMovieDetailRoute = () => {
    console.log('hallo')
  }

  return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data && data.length > 0 ? (
          data.map((movie: IMDBMovie) => (
            <MovieCard key={movie.imdbID} image={movie.Poster} title={movie.Title} year={movie.Year} onClick={handleMovieDetailRoute} />
          ))
        ) : (
          <li>Search all movies!</li>
        )}
      </ul>
  );
};

export default Home;
