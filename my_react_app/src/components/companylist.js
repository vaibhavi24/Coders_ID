import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaMapMarker } from "react-icons/fa"; 
import "react-icons/fa";

function CompanyList(){

    const [data, setData] =useState([])
     useEffect(() => {
    
    axios.get('http://localhost:3001/companies')
      .then(result => setData(result.data))
      .catch(err => console.log(err));
  },[])

  const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

    return(
        <div className="container mt-4">
      {data.map((company, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src="https://via.placeholder.com/50" // Replace with your company profile image URL
                  alt="Company Logo"
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                    <h6>Founded on {getYearFromDate(company.date)}</h6>
                  <h3>{company.CompanyName}</h3>
                  <p><FaMapMarker /> {company.location}, {company.city}</p>
                </div>
              </div>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id={`dropdownMenuButton${index}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  View Reviews
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby={`dropdownMenuButton${index}`}
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Review 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Review 2
                    </a>
                  </li>
                  {/* Add more reviews as needed */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    );

}

export default CompanyList;