import React from "react";
import { NavLink } from "react-router-dom";

import Avatar from "react-avatar";

import "../../assets/styles/leaderboard.css";

const dataUser = [
  {
    message: "Success Get Data Profile",
    dataUser: {
      user_id: 3,
      fullname: "Tari Ayu",
      email: "tariAyu@gmail.com",
      username: "tari4yu",
      image_url: "",
      background_url: null,
      points: 0,
      role_id: 2,
    },
  },
];
const user = dataUser[0].dataUser;
console.log(user, "-asda---");
export default function FormReward() {
  return (
    <>
      <section id="leaderboard">
        <div className="container text-content" id="claimReward">
          <div className="text-center">
            <p id="first">Leaderboard</p>
            <p class="pb-4" id="second">
              Januari 2022
            </p>
            {/* Button */}
            <div className="formReward">
              {/* Title */}
              <p className="titleForm">Klaim Hadiah</p>
              {/* Form */}
              <div className="row" id="dataDiri">
                <div className="col-md-4 gx-0 py-3" id="profileUser">
                  <p className="rank">1st</p>
                  {user?.image_url ? (
                    <Avatar src={user?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={user?.username} id="avaUser" />
                  )}
                  <p className="name">{user?.username}</p>
                  <p className="poin">{user?.points} Point</p>
                </div>
                <div className="col-md-8 gx-0 py-3" id="dataUser">
                  <p className="konfirmasi">Konfirmasi Data Diri</p>
                  <div className="d-flex" id="inputData">
                    <div className="confName">
                      <div className="cUsername form-group">
                        <label for="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="formDisable"
                          placeholder={user?.email}
                          disabled
                        />
                      </div>
                      <div className="cFullname form-group">
                        <label for="fullname">Fullname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="formDisable"
                          placeholder={user?.fullname}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="confInfo">
                      <div className="cEmail form-group">
                        <label for="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="formDisable"
                          placeholder={user?.email}
                          disabled
                        />
                      </div>
                      <div className="cNumber form-gruop">
                        <label for="noHp">No. Hp</label>
                        <input
                          type="text"
                          className="form-control"
                          id="datainput"
                          placeholder="+62"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <NavLink
                    to="/leaderboard"
                    className="btn btn-light text-center"
                    id="btn-claim"
                  >
                    Data sudah sesuai
                  </NavLink>
                </div>
              </div>

              {/* Child User */}
              {/* {dataTopTen?.map((user) => (
                <>
                  <div className="colomnU">
                    <div className="textUser">
                      <p id="rankUser">4</p>
                      <div id="imgUser">
                        {user?.image_url ? (
                          <Avatar src={user?.image_url} id="avaUser" />
                        ) : (
                          <Avatar name={user?.username} id="avaUser" />
                        )}
                      </div>
                      <p id="userName">{user?.username}</p>
                    </div>
                    <p id="poinUser">{user?.points} Poin</p>
                  </div>
                </>
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
