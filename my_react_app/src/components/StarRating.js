import React from "react";
import styled from "styled-components";

const StarRatingWrapper = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const Star = styled.span`
  color: #ccc;
`;

const SelectedStar = styled.span`
  color: yellow;
`;

function StarRating({ rating, onRatingChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <StarRatingWrapper>
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "selected" : ""}`}
          onClick={() => onRatingChange(star)}
        >
          {star <= rating ? <SelectedStar>★</SelectedStar> : <Star>★</Star>}
        </span>
      ))}
    </StarRatingWrapper>
  );
}

export default StarRating;
