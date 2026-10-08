type StarType = "full" | "half" | "empty";

type RatingStarsProps = {
  rating: number;
};

function RatingStars({ rating }: RatingStarsProps) {
  const ratingOutOfFive = rating / 2;

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
    <div>
      {stars.map((star, index) => {
        if (star === "full") {
          return <span key={index}>★</span>;
        }

        if (star === "half") {
          return <span key={index}>½</span>;
        }

        return <span key={index}>☆</span>;
      })}
    </div>
  );
}

export default RatingStars;
