
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTotalPrice } from "../PriceContext";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {totalPrice, showTotalPrice} = useTotalPrice();

  const handleRegister = (e) => {
    e.preventDefault();
  
    const user = { username, email, password };
  
    // Save user data and set logged-in status
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("loggedIn", JSON.stringify(true));
  
    alert("Registration successful! You can now log in.");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {showTotalPrice && 
      <p 
        style={{
          fontWeight: "bold", 
          fontSize: "x-large", 
          color: "blue", 
          position: "relative", 
          right: "-466px"
        }}
      >Total Price: £{totalPrice}</p>}
      <CardGroup className="image-card">
        <Card style={{ width: '40rem', backgroundColor: "aqua"}}>
          <Card.Body>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
              <div>
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button style={{margin: "0.5rem"}} type="submit">Register</Button>
            </form>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Register;
