const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type PosterCardProps = {
  movie: {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
  };
};

function PosterCard(props: PosterCardProps) {
  return (
    <div>
      {props.movie.poster_path && (
        <img
          src={IMAGE_URL + props.movie.poster_path}
          alt={props.movie.title}
        />
      )}
      <h3>{props.movie.title}</h3>
      <p>Rating: {props.movie.vote_average}</p>
      <p>{props.movie.release_date}</p>
    </div>
  );
}

export default PosterCard;
