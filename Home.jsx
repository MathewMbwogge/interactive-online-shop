
import "./User.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext

function Home() {
  const nav = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
    <div className={"app"}>
      <div className={`app ${theme}`}>
        <Button
          onClick={() => nav(`/products`, { state: {} })}
        >
          Buy
        </Button>
        <br></br>
        <h1>Welcome to Mark-Antonio</h1>
        <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          Toggle Theme
        </Button>
        </div>
    </div>
    </>
  );
}

export default Home;


