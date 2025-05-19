import "./App.css"
import { Route, Routes } from "react-router-dom";
import React from 'react';

{/*-------------------------------------------------------------------------*/}
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/UserProfile";
{/*-------------------------------------------------------------------------*/}

import NavBar from "./roots/NavBar"
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contacts from "./components/Contacts"
import SuccessPage from "./components/SuccessPage"

function App() {

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;