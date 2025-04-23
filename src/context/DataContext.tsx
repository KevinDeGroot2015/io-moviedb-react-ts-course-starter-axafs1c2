import { createContext, useState, useEffect, ReactNode } from 'react';
import { IMDBMovie } from '../model/movie';

interface DataContextType {
    data: IMDBMovie[];
    setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
    setMovieDetail: React.Dispatch<React.SetStateAction<string>>;
    dataDetail: IMDBMovie | null;
}

type DataProviderProps = {
    children: ReactNode;
}

export const DataContext = createContext<DataContextType>({
    data: [],
    setSearchMovie: () => {},
    setMovieDetail: () => {},
    dataDetail: null,
  });

export const DataContextProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<IMDBMovie[]>([]);
    const [searchMovie, setSearchMovie] = useState<string>("");
    const [movieDetail, setMovieDetail] = useState<string>("");
    const [dataDetail, setDataDetail] = useState<IMDBMovie | null>(null);

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


  return (
    <DataContext.Provider value={{ data, setSearchMovie, setMovieDetail, dataDetail }}>
      {children}
    </DataContext.Provider>
  );
};
