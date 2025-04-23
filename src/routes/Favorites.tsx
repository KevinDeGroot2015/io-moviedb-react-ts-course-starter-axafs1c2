import { FunctionComponent } from 'react';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import MovieCard from '../components/MovieCard';
import { IMDBMovie } from '../model/movie';
import { Link, useNavigate } from 'react-router-dom';

const Favorites: FunctionComponent = () => {
  const { favorites, deleteFavorite } = useContext(DataContext);
  const navigate = useNavigate();

  const handleFavoritesDetailRoute = (imdbID: IMDBMovie["imdbID"]) => {
    navigate(`./${imdbID}`)
  }

  const handleDeleteCurrentFavorite = (imdbID: IMDBMovie["imdbID"]) => {
    deleteFavorite(imdbID)
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {favorites && favorites.length > 0 ? (
          favorites.map((favorite: IMDBMovie) => (
            <MovieCard key={favorite.imdbID} image={favorite.Poster} title={favorite.Title} year={favorite.Year}>
              <button className="text-orange-400" onClick={() => handleFavoritesDetailRoute(favorite.imdbID)}>Edit</button>
              <button className="text-red-400" onClick={() => handleDeleteCurrentFavorite(favorite.imdbID)}>Delete</button>
            </MovieCard>
          ))
        ) : (
          <li>No favorites yet...</li>
        )}
    </ul>
  );
};

export default Favorites;
