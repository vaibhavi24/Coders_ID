import React, { useState } from "react";
import axios from 'axios';
import CompanyList from "./companylist";
import { useNavigate } from "react-router-dom";

function ShowCompany() {
  const [CompanyName, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/companies', { CompanyName, location, city, date })
      .then(result => {
        console.log(result);
        navigate('/companies');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Company</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="company" className="form-label">Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-control"
                    value={CompanyName} // Use value to bind to state
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="form-control"
                    value={location} // Use value to bind to state
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="city" className="form-label">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    value={city} // Use value to bind to state
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">Founded on</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    value={date} // Use value to bind to state
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Add Company</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CompanyList />
    </div>
  );
}

export default ShowCompany;
