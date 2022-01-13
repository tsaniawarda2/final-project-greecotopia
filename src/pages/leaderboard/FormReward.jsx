import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import Avatar from "react-avatar";

import "../../assets/styles/leaderboard.css";
import { DataContext } from "../../context/DataContext";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FormReward() {
  const { userLogin: data } = useContext(DataContext);
  console.log(data, "-masuk?---");
  const [claim, setClaim] = useState({
    no_hp: "",
    rank: 0,
    session_month: 0,
    year: 0,
    date_of_claim: "",
  });

  const handleClaim = async () => {
    try {
      if (!claim.name) {
        toast.error("No Hp tidak boleh kosong", {
          theme: "colored",
        });
      } else {
        // const payload = {
        //   ...claim,
        //   rank: rank,
        //   session_month: 1,
        //   year: 0,
        //   date_of_claim: "900",
        // };
        // console.log("berhasil");
        // await API().post("/claim_rewards", payload)
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message ||
          error?.response?.message ||
          "Internal Server Error"
      );
    }
  };
  return (
    <>
      <Navbar />
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
                  {data?.image_url ? (
                    <Avatar src={data?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={data?.username} id="avaUser" />
                  )}
                  <p className="name">{data?.username}</p>
                  <p className="poin">
                    {data?.points ? data?.points : "0"} Point
                  </p>
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
                          placeholder={data?.email}
                          disabled
                        />
                      </div>
                      <div className="cFullname form-group">
                        <label for="fullname">Fullname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="formDisable"
                          placeholder={data?.fullname}
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
                          placeholder={data?.email}
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
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
}
