import { Movie } from '../types/Movie';

export function getMovies(): Promise<Movie[]> {
  return fetch('http://localhost:3000/movies.json').then(response => {
    if (!response.ok) {
    }

    return response.json();
  });
}
