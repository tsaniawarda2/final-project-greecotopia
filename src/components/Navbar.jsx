import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/image/logo.png";
import "../assets/styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img className="logo-nav" src={Logo} alt="brand" /> Greecotopia
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-md-2 mb-lg-0 navCenter">
              <li className="nav-item me-md-3">
                <NavLink exact className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-md-3">
                <NavLink exact className="nav-link" to="/forum">
                  Forum
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/tanamPohon">
                  Tanam Pohon
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav mb-md-2 mb-lg-0 navRight">
              <li className="nav-item me-md-4">
                <NavLink
                  className="nav-link text-uppercase signup"
                  to="/signUp"
                >
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase login" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
