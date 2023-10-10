import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function ViewCompanies() {
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [newReview, setNewReview] = useState(''); // State to store the new review input

  useEffect(() => {
    axios.get('http://localhost:3001/companies')
      .then((result) => setData(result.data))
      .catch((err) => console.log(err));
  }, []);

  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  // Function to add a new review
  

  return (
    <div className="container mt-4">
      {data.map((company, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Company Logo"
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6>Founded on {getYearFromDate(company.date)}</h6>
                  <h3>{company.CompanyName}</h3>
                  <p>
                    <FaMapMarker /> {company.location}, {company.city}
                  </p>
                </div>
              </div>
              <div>
                  <Link to={`/dummy/${company.CompanyName}`}> 
            <button
                    className="btn btn-primary">
                    Add Review
            </button>
                     </Link>
              </div>
            </div>
            <div>
              <h4>Reviews:</h4>
              <ul>
                {reviews.map((review, reviewIndex) => (
                  <li key={reviewIndex}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewCompanies;
