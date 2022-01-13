import React, { useContext } from "react";

import Avatar from "react-avatar";

import "../assets/styles/leaderboard.css";
import { DataContext } from "../context/DataContext";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Leaderboard() {
  const { topTen: data } = useContext(DataContext);
  const { topThree: claim } = useContext(DataContext);
  const { userLogin, rewards } = useContext(DataContext);
  const history = useHistory();

  const userID = userLogin?.user_id;
  const alreadyClaim = rewards?.find((rewards) => rewards?.user_id === userID);

  const handleClaim = async () => {
    const userID = userLogin?.user_id;
    const top3 = claim?.find((user) => user?.user_id === userID);

    if (top3) {
      history.push(`/formReward`);
    } else {
      toast.error("Ups kamu bukan top 3. Coba lagi di session berikutnya", {
        theme: "colored",
      });
    }
  };

  return (
    <>
      <Navbar />
      <section id="leaderboard">
        <div className="container text-content">
          <div className="text-center">
            <p id="first">Leaderboard</p>
            <p class="pb-4" id="second">
              Januari 2022
            </p>
            {/* Board */}
            <div className="board">
              {/* Main User */}
              <div className="row" id="top3">
                <div className="col-md-4 gx-0 py-3 top" id="profileUser23">
                  <p className="rank">2 nd</p>
                  {data?.image_url ? (
                    <Avatar src={data[1]?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={data[1]?.username} id="avaUser" />
                  )}
                  <p className="name">{data[1]?.username}</p>
                  <p className="poin">{data[1]?.points} Point</p>
                </div>
                <div className="col-md-4 gx-0 py-3 top" id="profileUser1">
                  <p className="rank">1 st</p>
                  {data?.image_url ? (
                    <Avatar src={data[0]?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={data[0]?.username} id="avaUser" />
                  )}
                  <p className="name">{data[0]?.username}</p>
                  <p className="poin">{data[0]?.points} Point</p>
                </div>
                <div className="col-md-4 gx-0 py-3 top" id="profileUser23">
                  <p className="rank">3 rd</p>
                  {data?.image_url ? (
                    <Avatar src={data[2]?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={data[2]?.username} id="avaUser" />
                  )}
                  <p className="name">{data[2]?.username}</p>
                  <p className="poin">{data[2]?.points} Point</p>
                </div>
              </div>

              {/* Button Claim */}
              {alreadyClaim ? (
                <button
                  className="btn btn-danger text-center"
                  id="btnClaimB"
                  onClick={() => handleClaim()}
                  disabled
                >
                  Top 3? <br /> Klaim Hadiahmu!
                </button>
              ) : (
                <button
                  className="btn btn-danger text-center"
                  id="btnClaimB"
                  onClick={() => handleClaim()}
                >
                  Top 3? <br /> Klaim Hadiahmu!
                </button>
              )}

              {/* Child User */}
              {data?.slice(3)?.map((user, index) => (
                <div className="colomnU" key={index}>
                  <div className="textUser">
                    <p id="rankUser">{index + 4}</p>
                    <div id="imgUser">
                      {user?.image_url ? (
                        <Avatar src={user?.image_url} />
                      ) : (
                        <Avatar name={user?.username} />
                      )}
                    </div>
                    <p id="userName">{user?.username}</p>
                  </div>
                  <p id="poinUser">{user?.points} Poin</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
      <Footer />
    </>
  );
}
