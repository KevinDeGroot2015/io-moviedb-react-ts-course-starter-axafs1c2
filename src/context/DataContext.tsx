import { createContext, useState, useEffect, ReactNode } from 'react';
import { IMDBMovie } from '../model/movie';

interface DataContextType {
    data: IMDBMovie[];
    setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
    setMovieDetail: React.Dispatch<React.SetStateAction<string>>;
    dataDetail: IMDBMovie | null;
    favorites: IMDBMovie[];
    toggleFavorite: (movie: IMDBMovie) => void;
    deleteFavorite: (imdbID: string) => void;
    favoriteDetail: (imdbID: string) => IMDBMovie | undefined;
}

type DataProviderProps = {
    children: ReactNode;
}

export const DataContext = createContext<DataContextType>({
    data: [],
    setSearchMovie: () => {},
    setMovieDetail: () => {},
    dataDetail: null,
    favorites: [],
    toggleFavorite: () => {},
    deleteFavorite: () => {},
    favoriteDetail: () => undefined,
  });

export const DataContextProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<IMDBMovie[]>([]);
    const [searchMovie, setSearchMovie] = useState<string>("");
    const [movieDetail, setMovieDetail] = useState<string>("");
    const [dataDetail, setDataDetail] = useState<IMDBMovie | null>(null);
    const [favorites, setFavorites] = useState<IMDBMovie[]>([]);
    

    useEffect(() => {
        if (!searchMovie.trim()) {
            setData([]);
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=1a993ee0&s=${searchMovie}`)
        .then((r) => r.json())
        .then((d) => {
            if (d.Response === "True") {
                setData(d.Search);
            } else {
                console.error('No data:', d);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [searchMovie]);

    useEffect(() => {
        if (!movieDetail) return;

        fetch(`https://www.omdbapi.com/?apikey=1a993ee0&i=${movieDetail}`)
        .then((r) => r.json())
        .then((d) => {
            if (d) {
                setDataDetail(d);
            } else {
                console.error('No data:', d);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [movieDetail]);

    const toggleFavorite = (movie: IMDBMovie) => {
        setFavorites(prev => {
          const isFavorite = prev.some(fav => fav.imdbID === movie.imdbID);
          if (isFavorite) {
            return prev.filter(fav => fav.imdbID !== movie.imdbID);
          } else {
            return [...prev, movie];
          }
        });
    };

    const deleteFavorite = (imdbID: string) => {
        setFavorites(prev => prev.filter(fav => fav.imdbID !== imdbID));
    };

    const favoriteDetail = (imdbID: string): IMDBMovie | undefined => {
        return favorites.find(fav => fav.imdbID === imdbID);
    };


  return (
    <DataContext.Provider value={{ data, setSearchMovie, setMovieDetail, dataDetail, favorites, toggleFavorite, deleteFavorite, favoriteDetail }}>
      {children}
    </DataContext.Provider>
  );
};
