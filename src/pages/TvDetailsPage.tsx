import { useParams } from "react-router";

function TvDetailsPage() {
  const params = useParams();

  return <h1>TV details: {params.id}</h1>;
}

export default TvDetailsPage;
