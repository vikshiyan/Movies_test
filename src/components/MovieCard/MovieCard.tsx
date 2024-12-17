import { FC } from 'react';
import { Movie } from '../../types/Movie';

type Props = {
  movie: Movie;
};

export const MovieCard: FC<Props> = ({ movie }) => (
  <div className="card">
    <img src={movie.image} alt="Film logo" className="card-image" />

    <div className="card-content">
      <div className="media-content">
        <p className="title">{movie.title}</p>
      </div>
    </div>
  </div>
);
