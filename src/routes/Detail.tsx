import { FunctionComponent } from 'react';
import { DataContext } from '../context/DataContext';
import { useContext } from 'react';
import Toggle from '../components/Toggle';
import { Link } from 'react-router-dom';

const Detail: FunctionComponent = () => {
  const { dataDetail } = useContext(DataContext);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img src={dataDetail?.Poster} className="w-full h-full object-center object-cover sm:rounded-lg" />
            </div>
          </div>
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            {dataDetail?.imdbID && <Toggle movieId={dataDetail.imdbID} />}
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {dataDetail?.Title}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-gray-900">{dataDetail?.Year}</p>
            </div>
            <div className="mt-3">
              <p className="text-xl text-gray-900">{dataDetail?.Actors}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">{dataDetail?.Production}</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{dataDetail?.Plot}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between"><Link to={"../"}>Back to list</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
