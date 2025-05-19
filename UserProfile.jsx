
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const userData = JSON.parse(localStorage.getItem("user"));

  if (!loggedIn || !userData) {
    return <p>No user data available. Please log in or register.</p>;
  }

  const handleLogout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false)); // Set logged-out status
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <h1>User Profile</h1>
      <h2>Welcome, {userData.username}</h2>
      <p>Email: {userData.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
