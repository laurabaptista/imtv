const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type CastCardProps = {
  name: string;
  character: string;
  profile_path: string | null;
};

function CastCard(props: CastCardProps) {
  return (
    <div className="cast-card">
      {props.profile_path && (
        <img src={`${IMAGE_URL}${props.profile_path}`} alt={props.name} />
      )}
      <h3>{props.name}</h3>
      <p>{props.character}</p>
    </div>
  );
}

export default CastCard;
