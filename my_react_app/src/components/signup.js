import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin"); // Default role

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { role, name, email, phone, city, state, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Signup</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Role</label>
                  <select
                    id="role"
                    name="role"
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
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
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="state" className="form-label">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-control"
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
