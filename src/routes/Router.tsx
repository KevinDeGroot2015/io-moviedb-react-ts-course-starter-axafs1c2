import { FunctionComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Detail from './Detail';
import Favorites from './Favorites';
import Edit from './Edit';

const Router: FunctionComponent = ({}) => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favorites/:id" element={<Edit />} />
      </Route>
    </Routes>
  );
};

export default Router;