import { FunctionComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';

const Router: FunctionComponent = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;