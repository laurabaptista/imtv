import { useParams } from "react-router";

function TvDetailsPage() {
  const params = useParams();

  console.log("params", params);

  return <h1>TV details: {params.id}</h1>;
}

export default TvDetailsPage;
