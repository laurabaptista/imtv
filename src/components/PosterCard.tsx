import { Link } from "react-router";
import RatingStars from "./RatingStars";

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type PosterCardProps = {
  type: "movie" | "tv";
  item: {
    id: number;
    title: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
  };
};

function PosterCard(props: PosterCardProps) {
  const detailsPath = "/" + props.type + "/" + props.item.id;

  return (
    <Link to={detailsPath} className="poster-card">
      {props.item.poster_path && (
        <img src={IMAGE_URL + props.item.poster_path} alt={props.item.title} />
      )}
      <h3>{props.item.title}</h3>
      <RatingStars rating={props.item.vote_average} />
      <p>{props.item.release_date.slice(0, 4)}</p>
    </Link>
  );
}

export default PosterCard;
