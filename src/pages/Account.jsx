import React from "react";
import "../assets/styles/account.css"
import { GiTwoCoins } from "react-icons/gi"
import { FaTree } from "react-icons/fa"
import { AiOutlineHeart } from "react-icons/ai"

export default function Account() {
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
          <div className="col-lg-8 profile-right">
            <div className="header-profile">
              <img src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt="" />
            </div>
            <div className="row id-profile">
              <div className="profile-picture">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="col-2"></div>
              <div className="name-usn col-6">
                <h1>Johnatan Doe</h1>
                <p>@doejohnathan123</p>
              </div>
              <div className="btn-edit-prfile col-3">
                <button>Edit Profile</button>
              </div>
            </div>
            <div className="card-profile row">
              <div className="user-total-poin content-card-profile col-4">
                <div className="circle-profile">
                  <GiTwoCoins className="icon-coins-profile"/>
                </div>
                <p>Poin yang kamu miliki saat ini:</p>
                <p className="total">1000</p>
              </div>
              <div className="user-total-trees content-card-profile col-4">
                <div className="circle-profile">
                  <FaTree className="icon-tree-profile"/>
                </div>
                <p>Banyak pohon yang kamu tanam:</p>
                <p className="total">35</p>
              </div>
              <div className="user-total-fav-issues content-card-profile col-4">
                <div className="circle-profile">
                  <AiOutlineHeart className="icon-heart-profile"/>
                </div>
                <p>Banyak issue favorit kamu:</p>
                <p className="total">5</p>
              </div>
            </div>
            <div className="pr-rank-user row">
              <div className="col-4">
                <p>Peringkat kamu saat ini:</p>
              </div>
              <div className="col-3">
                <p>10 dari 10.000 </p>
              </div>
              <div className="col-4">
                <button>Lihat Papan Peringkat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
