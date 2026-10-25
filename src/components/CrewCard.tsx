import "./CrewCard.css";

type CrewCardProps = {
  name: string;
  job: string;
};

function CrewCard(props: CrewCardProps) {
  return (
    <div className="crew-card">
      <p>{props.job}</p>
      <h3>{props.name}</h3>
    </div>
  );
}

export default CrewCard;
