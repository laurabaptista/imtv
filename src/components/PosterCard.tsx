type PosterCardProps = {
  movie: {
    id: number;
    title: string;
  };
};

function PosterCard(props: PosterCardProps) {
  return <h3>{props.movie.title}</h3>;
}

export default PosterCard;
