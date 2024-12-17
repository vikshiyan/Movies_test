/* eslint-disable no-console */
import { FC, useEffect, useState } from 'react';
import { getMovies } from '../../services/movie';
import { getVisibleMovies } from '../../utils/getVisibleMovies';
import { SearchInput } from '../SearchInput';
import { Loader } from '../Loader';
import { MoviesList } from '../MoviesList';
import { Movie } from '../../types/Movie';

export const HomePage: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovies()
      .then(setMovies)
      .finally(() => setLoading(false));
  }, []);

  const visibleMovies = getVisibleMovies(query, movies);

  console.log(query, visibleMovies);

  return (
    <div className="page-content">
      <h1 className="title">Home</h1>
      <SearchInput query={query} setQuery={setQuery} />

      {loading && <Loader />}

      {!loading && movies.length > 0 && <MoviesList movies={visibleMovies} />}

      {/* <div className="sidebar">Sidebar goes here</div> */}
    </div>
  );
};
