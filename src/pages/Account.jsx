import React, { useState, useContext } from "react";
import "../assets/styles/account.css";
import Profile from "../components/account/Profile";
import ContactUs from "../components/account/ContactUs";
import { DataContext } from "../context/DataContext";
import FavoriteIssue from "../components/account/FavoriteIssue";
import Avatar from "react-avatar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useHistory } from "react-router-dom";
import Logout from "../components/modal/Logout"

export default function Account() {
  const [toggleState, setToggleState] = useState(1);
  const { userLogin } = useContext(DataContext);
  const history = useHistory();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  // console.log(userLogin);

  const toggleSide = (index) => {
    setToggleState(index);
  };
  console.log(userLogin, "user");

  return (
    <>
    <Navbar/>
      <Logout showModal={showModal} setShowModal={setShowModal}/>
      <div className="container-account container-fluid">
        <div className="account">
          <div className="col-lg-4 profile-side-left">
            <div className="user-profile row">
              <div className="image-profile col-4">
                {userLogin?.image_url ? (
                  <Avatar src={userLogin?.image_url} id="photo-profile"/>
                ) : (
                  <Avatar name={userLogin?.username} id="photo-profile"/>
                )}
                {/* <img src={userLogin.image_url} alt="" /> */}
              </div>
              <div className="name-poin col-lg-8">
                <h1>{userLogin?.fullname}</h1>
                <p>{userLogin?.points} poin</p>
              </div>
            </div>
            <div className="sidenav-profile">
              <div className="profile-side">
                <p type="button" className={toggleState === 1 ? "bars active-bars" : "bars"} onClick={() => toggleSide(1)}>
                  Profile
                </p>
              </div>
              <div className="fav-issues-side">
                <p type="button" className={toggleState === 2 ? "bars active-bars" : "bars"} onClick={() => toggleSide(2)}>
                  Favorite Issues
                </p>
              </div>
              <div className="contact-us-side">
               <p type="button" className={toggleState === 3 ? "bars active-bars" : "bars"} onClick={() => toggleSide(3)}>
                 Contact Us
                </p>
              </div>
              {/* <div className="logout-side"> */}
              {/* <p type="button" onClick={onHandleLogout()}> */}
                {/* <p type="button" className={toggleState === 4 ? "bars active-bars" : "bars"} onClick={() => toggleSide(4)}> */}
                  {/* <p>Logout</p> */}
                {/* </p> */}
              {/* </div> */}
              <div className="logout-side">
                <p type="button" onClick={openModal}>
                  Logout
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className={toggleState === 1 ? "profile-right" : "content"}>
              <Profile/>
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              {/* <FavoriteIssue/> */}
            </div>
            <div className={toggleState === 3 ? "profile-right" : "content"}>
              <ContactUs/>
            </div>
            {/* <div className={toggleState === 4 ? "active-content" : "content"}> */}
              {/* <p type="button" onClick={openModal}> */}
              {/* <p type="button" onClick={onHandleLogout()}> */}
                {/* logout */}
              {/* </p> */}
              <Logout showModal={showModal} setShowModal={setShowModal}/>
            {/* </div> */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
