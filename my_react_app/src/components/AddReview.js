import React, { useState } from "react";
import StarRating from "./StarRating"; // Import your StarRating component
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddReview() {
  const { companyName } = useParams();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const {datar} = useState() 
  const navigate = useNavigate()
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the review data (reviewText, rating, and company name) to your backend.
    // Replace this with your actual API call.
    const reviewData = {
      reviewText,
      rating,
      companyName, // Replace with the actual company name
    };
    
    // Example Axios request:
    axios.post('http://localhost:3001/addReview', reviewData)
      .then(result => {
        console.log(result.data)
        navigate('/viewcompanies')
        // Handle success or any other logic here
      })
      .catch((error) => {
        console.error(error);
        // Handle errors here
      });
  };

  return (
    <div className="container mt-4">
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <h1> {companyName}</h1>
        <div className="form-group">
          <label htmlFor="reviewText">Review Text:</label>
          <textarea
            id="reviewText"
            className="form-control"
            value={reviewText}
            onChange={handleReviewTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <StarRating rating={rating} onRatingChange={handleRatingChange} />
        </div>
        <Link to="/viewcompanies"> 
        <button type="submit" className="btn btn-primary">
                    Submit Review
        </button>
                     </Link>
                     
      </form>

    </div>
  );
}

export default AddReview;
