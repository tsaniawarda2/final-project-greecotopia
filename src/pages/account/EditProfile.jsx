import React from "react";
import "../../assets/styles/account.css"
import { AiFillCamera } from "react-icons/ai"

export default function EditProfile() {
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
                <p>Profile</p>
              </div>
              <div className="fav-issues-side">
                <p>Favorite Issues</p>
              </div>
              <div className="contact-us-side">
               <p>Contact Us</p>
              </div>
              <div className="logout-side">
                <p>Logout</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8 profile-right">
            <div className="header-profile">
              <div className="camera-header">
                <AiFillCamera className="icons-camera-header"/>
              </div>
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div className="row id-profile">
              <div className="profile-picture">
                <div className="camera-profile">
                  <AiFillCamera className="icons-camera-profile"/>
                </div>
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="form-edit-profile">
                <form id="form">
                  <div className="form-group">
                    <label for="formGroupExampleInput">Full Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Johnathan Doe"/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Username</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="@doejohnathan123"/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="johnathan@mail.com"/>
                  </div>
                  <div className="btn-save-profile">
                    <button>Simpan</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
