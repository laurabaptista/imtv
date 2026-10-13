import { Link } from "react-router";
import RatingStars from "./RatingStars";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type PosterCardProps = {
  type: "movie" | "tv";
  item: {
    id: number;
    title?: string;
    name?: string;
    poster_path: string | null;
    vote_average: number;
    release_date?: string;
    first_air_date?: string;
  };
};

function PosterCard(props: PosterCardProps) {
  const title = props.item.title || props.item.name;
  const date = props.item.release_date || props.item.first_air_date;

  return (
    <Link to={`/${props.type}/${props.item.id}`} className="poster-card">
      {props.item.poster_path && (
        <img src={`${IMAGE_URL}${props.item.poster_path}`} alt={title} />
      )}
      <h3>{title}</h3>
      <p>{date?.slice(0, 4)}</p>
      <RatingStars rating={props.item.vote_average} />
    </Link>
  );
}

export default PosterCard;
