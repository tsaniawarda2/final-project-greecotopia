import React from "react";
import "../../assets/styles/account.css"

export default function ContactUs() {
  return (
    <>
      <div className="container-account container-fluid">
        <div className="row account">
          <div className="col-lg-4 profile-side-left">
            <div className="user-profile row">
              <div className="image-profile col-4">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="name-poin col-lg-8">
                <h1>Johnathan Doe</h1>
                <p>1000 poin</p>
              </div>
            </div>
            <div className="sidenav-profile">
              <div className="profile-side">
                <p>Profil</p>
              </div>
              <div className="fav-issues">
                <p>Favorite Issues</p>
              </div>
              <div className="contact-us">
               <p>Contact Us</p>
              </div>
              <div className="keluar">
                <p>Keluar</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-lg-8 contact-container">
            <h1>Sampaikan Pesanmu Di sini!</h1>
            <div className="form-group contact-us">
              <textarea className="form-control textarea-contact" id="exampleFormControlTextarea1" rows="10" placeholder="Tuliskan pesanmu disini..."></textarea>
            </div>
            <button className="btn-contact">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
