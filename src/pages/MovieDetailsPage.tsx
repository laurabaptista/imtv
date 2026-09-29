import { useParams } from "react-router";

function MovieDetailsPage() {
  const params = useParams();

  return <h1>Movie details: {params.id}</h1>;
}

export default MovieDetailsPage;
