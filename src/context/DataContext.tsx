import { createContext, useState, useEffect, ReactNode } from 'react';
import { IMDBMovie } from '../model/movie';

type DataContextType = {
    data: IMDBMovie[];
}

type DataProviderProps = {
    children: ReactNode;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<IMDBMovie[]>([]);

    useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=1a993ee0&s=')
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
    }, []);


  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
