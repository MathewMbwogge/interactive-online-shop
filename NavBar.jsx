import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../notifications/Authentication";
import { clearMessage } from "../notifications/Messages";

 function NavBar() {
    const { user: currentUser } = useSelector((state) => state.Authentication);
    const dispatch = useDispatch();

    let location = useLocation();

    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
            dispatch(clearMessage()); // clear message when changing location
        }
    }, [dispatch, location]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    return (
        <div className="navbar">
            <nav>
                <NavLink to={"/"} className="navbar-brand">
                    {currentUser}
                </NavLink>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" /* className="nav_link" */
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: "none",
                                marginRight: "15px",
                            })}
                        >
                            Home
                        </NavLink>
                    </li>
                {/* <div>
                    {currentUser && (
                        <li className="nav-item">
                            <NavLink to={"/user"} className="nav-link">
                                User
                            </NavLink>
                        </li>
                    )}
                </div> */}

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to={"/profile"} className="nav-links">
                                    {currentUser.username}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-links" onClick={logOut}>
                                LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to={"/login"} className="nav-links">
                                    Login
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to={"/register"} className="nav-links">
                                    Sign Up
                                </NavLink>
                            </li>
                        </div>
                    )}
                    <li>
                        <NavLink to="/products" /* className="nav_link" */
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: "none",
                            })}
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" /* className="nav_link" */
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: "none",
                            })}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" /* className="nav_link" */
                            style={({ isActive }) => ({
                                color: isActive ? "red" : "white",
                                fontWeight: isActive ? "bold" : "normal",
                                textDecoration: "none",
                            })}
                        >
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
 }

 export default NavBar;