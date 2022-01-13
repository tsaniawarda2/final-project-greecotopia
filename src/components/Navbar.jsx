import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { MdOutlineEdit as Edit, MdLogout as LogOut } from "react-icons/md";
import Logo from "../assets/image/logo.png";
import Point from "../assets/image/point.png";
import "../assets/styles/navbar.css";
import checkLogin from "../utils/checkLogin";
import { DataContext } from "../context/DataContext";
import Avatar from "react-avatar";
import { useHistory } from "react-router-dom";
import Logout from "./modal/Logout"

export default function Navbar() {
  const { userLogin: data } = useContext(DataContext);
  console.log(data?.image_url, "=======Navbar");
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <Logout showModal={showModal} setShowModal={setShowModal}/>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        id="navTop"
      >
        <div className="container" id="navbarGree">
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
                <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/home"
                >
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

            <ul
              className="navbar-nav mb-md-5 mb-lg-0 navRight"
              id="navbar-right"
            >
              {checkLogin() ? (
                <>
                  <div class="dropdown nav-username">
                    <div
                      id="btnProfile"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <li className="nav-item">
                        <div
                          className="nav-link text-uppercase"
                          id="btnProfile"
                        >
                          <div id="avaNav">
                            {data?.image_url ? (
                              <Avatar src={data?.image_url} alt="profile" />
                            ) : (
                              <Avatar name={data?.username} alt="profile" />
                            )}
                          </div>
                          <div className="profile2">
                            <p className="userNameP">{data?.username}</p>
                            <img id="point" src={Point} alt="point" />
                            {data?.points ? data?.points : "0"} Poin
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="dropdown-menu" id="dropdownNav">
                      <div
                        className="dropdown-item btn btn-profile"
                        id="dropItem"
                        onClick={() => history.push(`/account`)}
                      >
                        <Edit id="editIcon" /> Edit Profile
                      </div>
                      <div class="dropdown-divider"></div>
                      <div
                        className="dropdown-item btn btn-logout"
                        id="dropItem"
                        // onClick={handleLogout}
                        onClick={openModal}
                      >
                        <LogOut id="outIcon" /> Log Out
                      </div>
                    </div>
                  </div>

                  {/* Account */}
                  {/* <li className="nav-item">
                    <div
                      className="nav-link text-uppercase"
                      id="btnProfile"
                      onClick={() => history.push(`/account`)}
                    >
                      <div id="avaNav">
                        {data?.image_url ? (
                          <Avatar
                            id="avaNav"
                            src={data?.image_url}
                            alt="profile"
                          />
                        ) : (
                          <Avatar
                            id="avaNav"
                            name={data?.username}
                            alt="profile"
                          />
                        )}
                      </div>
                      <div className="profile2">
                        <p className="userNameP">{data?.username}</p>
                        <img id="point" src={Point} alt="point" />
                        {data?.points ? data?.points : "0"} Poin
                      </div>
                    </div>
                  </li> */}
                </>
              ) : (
                <>
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
                    <NavLink
                      className="nav-link text-uppercase login"
                      to="/login"
                    >
                      Masuk
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
