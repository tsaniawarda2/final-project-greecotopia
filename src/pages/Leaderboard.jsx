import React from "react";
import { NavLink } from "react-router-dom";

import Avatar from "react-avatar";

import "../assets/styles/leaderboard.css";

const dataUser = [
  {
    message: "Success Get Data Top 10",
    users: [
      {
        user_id: 3,
        username: "kasdf",
        image_url: "",
        points: 900,
      },
      {
        user_id: 2,
        username: "jojO4567",
        image_url:
          "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        points: 6400,
      },
      {
        user_id: 1,
        username: "budiMan",
        image_url: "",
        points: 4000,
      },
    ],
  },
];
const dataTopTen = dataUser[0].users;
console.log(dataTopTen, "----");
export default function Leaderboard() {
  return (
    <>
      <section id="leaderboard">
        <div className="container text-content">
          <div className="text-center">
            <p id="first">Leaderboard</p>
            <p class="pb-4" id="second">
              Januari 2022
            </p>
            {/* Button */}

            <div className="board">
              {/* Main User */}

              {/* Button Claim */}
              <NavLink
                to="/formReward"
                className="btn btn-danger text-center"
                id="btnClaimB"
              >
                Top 3? <br /> Klaim Hadiahmu!
              </NavLink>

              {/* Child User */}
              {dataTopTen?.map((user) => (
                <>
                  <div className="colomnU">
                    <div className="textUser">
                      <p id="rankUser">4</p>
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
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
