import { FC } from 'react';
import { MovieCard } from '../MovieCard';

import { Movie } from '../../types/Movie';

type Props = {
  movies: Movie[];
};

export const MoviesList: FC<Props> = ({ movies }) => (
  <div className="movies">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
