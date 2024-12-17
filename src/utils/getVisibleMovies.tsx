import { Movie } from '../types/Movie';

export const getVisibleMovies = (query: string, movies: Movie[]) => {
  const normalizedQuery = query.trim().toLowerCase();

  if (normalizedQuery) {
    return movies.filter(movie => {
      return movie.title.trim().toLowerCase().includes(normalizedQuery);
    });
  }

  return movies;
};
