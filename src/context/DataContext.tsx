import { createContext, useState, useEffect, ReactNode } from 'react';
import { IMDBMovie } from '../model/movie';

interface DataContextType {
    data: IMDBMovie[];
    setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
}

type DataProviderProps = {
    children: ReactNode;
}

export const DataContext = createContext<DataContextType>({
    data: [],
    setSearchMovie: () => {},
  });

export const DataContextProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<IMDBMovie[]>([]);
    const [searchMovie, setSearchMovie] = useState<string>("");

    useEffect(() => {
        if (!searchMovie.trim()) {
            setData([]);
            return;
        }

        fetch(`https://www.omdbapi.com/?apikey=1a993ee0&s=${searchMovie}`)
        .then((r) => r.json())
        .then((d) => {
            if (d.Search) {
                setData(d.Search);
            } else {
                console.error('No data:', d);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [searchMovie]);


  return (
    <DataContext.Provider value={{ data, setSearchMovie }}>
      {children}
    </DataContext.Provider>
  );
};
