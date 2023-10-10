import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
   const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if(result.data === "Admin")
        {
          navigate('/companies')
        }
        else if(result.data === "User"){
          navigate('/viewcompanies')
        }
        else{
          setShowErrorModal(true);
          navigate('/login')

        }
      })
      .catch(err => {console.log(err);
      setShowErrorModal(true)})
      ;
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
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
                  <button type="submit" className="btn btn-primary">Log In</button>
                </div>
              </form>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Error Modal */}
      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          An error occurred. Please try again later.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
