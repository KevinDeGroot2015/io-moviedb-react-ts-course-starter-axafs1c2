import { FunctionComponent, useEffect, useState } from 'react';
import { IMDBMovie } from '../model/movie';

const Home: FunctionComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=1a993ee0&s=blade')
    .then((r) => r.json())
    .then((d) => setData(d.Search))

    console.log(data)
  },[])

  return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data?.map((item: IMDBMovie) => {
          return <li>{item.Title}</li>
        })}
      </ul>
  );
};

export default Home;
