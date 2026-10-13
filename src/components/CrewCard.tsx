type CrewCardProps = {
  name: string;
  job: string;
};

function CrewCard(props: CrewCardProps) {
  return (
    <div className="crew-card">
      <h3>{props.name}</h3>
      <p>{props.job}</p>
    </div>
  );
}

export default CrewCard;
