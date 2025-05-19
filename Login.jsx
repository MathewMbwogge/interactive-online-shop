
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useTotalPrice } from "../PriceContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {totalPrice, showTotalPrice} = useTotalPrice();

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Retrieve user data and login status
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", JSON.stringify(true)); // Set login status
      navigate("/profile"); // Redirect user to profile page
    } else {
      setError("Invalid email or password."); // Handle unsuccesful login
    }
  };

  return (
    <div>
      {showTotalPrice && 
      <p style={{
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
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button style={{margin: "0.5rem"}} type="submit">Login</Button>
          </form>
        </Card.Body>
      </Card>
      </CardGroup>
    </div>
  );
};

export default Login;




