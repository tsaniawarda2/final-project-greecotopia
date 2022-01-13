import React, { useContext, useState } from "react";

import Avatar from "react-avatar";

import "../../assets/styles/leaderboard.css";
import { DataContext } from "../../context/DataContext";
import { toast, ToastContainer } from "react-toastify";
import SuccessClaimModal from "../../components/modal/SuccessClaimModal";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { API } from "../../config/api";

export default function FormReward() {
  const { userLogin, users } = useContext(DataContext);

  // Find Rank
  const findUser = users?.find((user) => user?.user_id === userLogin?.user_id);

  const [showModalSuccess, setShowModalSuccess] = useState(false);
  const [dataClaim, setDataClaim] = useState({
    no_hp: "",
    user_id: 0,
  });

  const handleClaim = async () => {
    try {
      if (!dataClaim.no_hp) {
        toast.error("No Handphone tidak boleh kosong", {
          theme: "colored",
        });
      } else {
        const payload = {
          no_hp: dataClaim.no_hp,
          user_id: userLogin?.user_id,
        };
        await API().post("/claim_rewards", payload);
        console.log(payload, "berhasil");
        setShowModalSuccess(true);
      }
    } catch (error) {
      toast.error(
        error?.response?.userLogin?.error?.message ||
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
                  <p className="rank">
                    {findUser?.user_id - 1}
                    {findUser?.user_id - 1 === 1 ? " st" : null}
                    {findUser?.user_id - 1 === 2 ? " nd" : null}
                    {findUser?.user_id - 1 === 3 ? " rd" : null}
                  </p>
                  {userLogin?.image_url ? (
                    <Avatar src={userLogin?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={userLogin?.username} id="avaUser" />
                  )}
                  <p className="name">{userLogin?.username}</p>
                  <p className="poin">
                    {userLogin?.points ? userLogin?.points : "0"} Point
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
                          placeholder={userLogin?.email}
                          disabled
                        />
                      </div>
                      <div className="cFullname form-group">
                        <label for="fullname">Fullname</label>
                        <input
                          type="text"
                          className="form-control"
                          id="formDisable"
                          placeholder={userLogin?.fullname}
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
                          placeholder={userLogin?.email}
                          disabled
                        />
                      </div>
                      <div className="cNumber form-gruop">
                        <label for="noHp">No Handphone</label>
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
                    Klaim Sekarang
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
