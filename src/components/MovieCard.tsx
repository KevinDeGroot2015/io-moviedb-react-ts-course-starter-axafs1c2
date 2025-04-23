import React, { FunctionComponent } from 'react';

interface MovieCardProps {
  image: string,
  title: string,
  year: string,
  onClick?: () => void;
  children?: React.ReactNode;
}

const MovieCard: FunctionComponent<MovieCardProps> = ({ image, title, year, onClick, children }) => {

  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200" onClick={onClick}>
      <div className="flex-1 flex flex-col">
        <img src={image} className="h-48 mx-auto mt-4" />
        <div className="p-4">
          <h3 className="mt-6 text-gray-900 text-sm font-medium">{title}</h3>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dd className="text-gray-500 text-sm">{year}</dd>
          </dl>
        </div>
        <div className="p-4 flex flex-row justify-between">
          {children}
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
