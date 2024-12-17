import { Route, Routes } from 'react-router-dom';

import { App } from './App';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { MoviePage } from './components/MoviePage';
import { HomePage } from './components/HomePage';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path={`movie/:id?`} element={<MoviePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
