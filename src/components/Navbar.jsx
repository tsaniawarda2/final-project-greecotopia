import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/image/logo.png";
import Profile from "../assets/image/profile.png";
import Point from "../assets/image/point.png";
import "../assets/styles/navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          {/* LEFT */}
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
            {/* CENTER */}
            <ul className="navbar-nav mx-auto mb-md-2 mb-lg-0 navCenter">
              <li className="nav-item me-md-3">
                <NavLink exact className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-md-3">
                <NavLink exact className="nav-link" to="/forums">
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
            {/* RIGHT */}
            <ul className="navbar-nav mb-md-5 mb-lg-0 navRight">
              {/* Form */}
              <li className="nav-item me-md-4">
                <NavLink
                  className="nav-link text-uppercase signup"
                  to="/register"
                >
                  Daftar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-uppercase login" to="/login">
                  Masuk
                </NavLink>
              </li>
              {/* Account */}
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link text-uppercase account"
                  to="/account"
                >
                  <div className="profile1">
                    <img id="avatar" src={Profile} alt="profile" />
                  </div>
                  <div className="profile2">
                    <p className="username-user">Siti Mae</p>
                    <img id="point" src={Point} alt="point" />
                    1000 poin
                  </div>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
