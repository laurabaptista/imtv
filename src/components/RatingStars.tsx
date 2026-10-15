import "./RatingStars.css";

type StarType = "full" | "half" | "empty";

type RatingStarsProps = {
  rating: number;
};

function RatingStars(props: RatingStarsProps) {
  const ratingOutOfFive = props.rating / 2;

  const stars: StarType[] = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;

    if (ratingOutOfFive >= starNumber) {
      return "full";
    }

    if (ratingOutOfFive >= starNumber - 0.5) {
      return "half";
    }

    return "empty";
  });

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
        <span key={index} className={`star ${star}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingStars;
