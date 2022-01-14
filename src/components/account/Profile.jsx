import React, { useContext } from "react";
import "../../assets/styles/account.css";
import { GiTwoCoins } from "react-icons/gi";
import { FaTree } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Avatar from "react-avatar";

export default function Profile() {
  const { userLogin, users } = useContext(DataContext);
  const history = useHistory();

  const findUser = users?.find((user) => user?.user_id === userLogin?.user_id);

  return (
    <>
      <div className="profile-container">
        <div className="header-profile">
          <img src={userLogin?.background_url} alt="" />
        </div>
        <div className="id-profile">
          <div className="profile-picture">
            {userLogin?.image_url ? (
              <Avatar src={userLogin?.image_url} id="img-profile" />
            ) : (
              <Avatar name={userLogin?.username} id="img-profile" />
            )}
            {/* <img src={userLogin?.image_url} alt="" /> */}
          </div>
          {/* <div className="col-lg-2 col-md-2 space-profile"></div> */}
          <div className="name-usn col-lg-6 col-md-6 col-sm-6">
            <h1>{userLogin?.fullname}</h1>
            <p>@{userLogin?.username}</p>
          </div>
          <div className="btn-edit-profile col-lg-3 col-md-3 col-sm-6">
            <button
              onClick={() => {
                history.push("/editProfile");
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="card-profile">
          <div className="user-total-poin content-card-profile col-lg-4 col-md-4">
            <div className="circle-profile">
              <GiTwoCoins className="icon-coins-profile" />
            </div>
            <p className="card-title-profile">
              Poin yang kamu miliki saat ini:
            </p>
            <p className="total">{userLogin?.points}</p>
          </div>
          <div className="user-total-trees content-card-profile col-lg-4 col-md-4">
            <div className="circle-profile">
              <FaTree className="icon-tree-profile" />
            </div>
            <p className="card-title-profile">Banyak pohon yang kamu tanam:</p>
            <p className="total">{userLogin?.total_trees}</p>
          </div>
          {/* <div className="user-total-fav-issues content-card-profile col-4">
            <div className="circle-profile">
              <AiFillHeart className="icon-heart-profile"/>
            </div>
            <p>Banyak issue favorit kamu:</p>
            <p className="total">5</p>
          </div> */}
        </div>
        <div className="pr-rank-user row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <p>Peringkat kamu saat ini:</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 rank-text">
            <p>
              {findUser?.user_id - 1} dari {users?.length - 1}{" "}
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <button>Leaderboard</button>
          </div>
        </div>
      </div>
    </>
  );
}
