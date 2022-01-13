import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import Avatar from "react-avatar";

import "../../assets/styles/leaderboard.css";
import { DataContext } from "../../context/DataContext";
import { toast, ToastContainer } from "react-toastify";
import SuccessClaimModal from "../../components/modal/SuccessClaimModal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getDate } from "../../utils/date";

export default function FormReward() {
  const { userLogin: data } = useContext(DataContext);

  const [showModalSuccess, setShowModalSuccess] = useState(false);
  // console.log(data, "-masuk?---");
  const [dataClaim, setDataClaim] = useState({
    no_hp: "",
    rank: 0,
    session_month: 0,
    year: 0,
    date_of_claim: getDate(new Date(), true),
  });

  const handleClaim = async () => {
    try {
      if (!dataClaim.no_hp) {
        toast.error("No Hp tidak boleh kosong", {
          theme: "colored",
        });
      } else {
        const payload = {
          ...dataClaim,
          no_hp: dataClaim.no_hp,
        };
        console.log(payload, "berhasil");
        // await API().post("/claim_rewards", payload)
        setShowModalSuccess(true);
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
      <SuccessClaimModal
        showModal={showModalSuccess}
        setShowModal={setShowModalSuccess}
      />
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
                          value={dataClaim?.no_hp}
                          onChange={(e) =>
                            setDataClaim({
                              ...dataClaim,
                              no_hp: e.target?.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div
                    className="btn btn-light text-center"
                    id="btn-claim"
                    onClick={() => handleClaim()}
                  >
                    Data sudah sesuai
                  </div>
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
