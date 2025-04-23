import { FunctionComponent } from 'react';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { IMDBMovie } from '../model/movie';
import { useNavigate } from 'react-router-dom';

const Favorites: FunctionComponent = () => {
  const { favorites } = useContext(DataContext);
  const navigate = useNavigate();

  const handleFavoritesDetailRoute = (imdbID: IMDBMovie["imdbID"]) => {
    navigate(`./${imdbID}`)
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {favorites && favorites.length > 0 ? (
          favorites.map((favorite: IMDBMovie) => (
            <MovieCard key={favorite.imdbID} image={favorite.Poster} title={favorite.Title} year={favorite.Year} onClick={() => handleFavoritesDetailRoute(favorite.imdbID)} />
          ))
        ) : (
          <li>No favorites yet...</li>
        )}
    </ul>
  );
};

export default Favorites;
