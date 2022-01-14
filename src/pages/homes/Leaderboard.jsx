import React, { useContext } from "react";
import Avatar from "react-avatar";
import { NavLink } from "react-router-dom";
import Board from "../../components/Board";
import { DataContext } from "../../context/DataContext";

export default function Leaderboard() {
  const { topFive: data } = useContext(DataContext);
  console.log(data, "------TOP5");
  return (
    <>
      <section id="board-home">
        <div className="container content-home">
          <div className="text-center">
            <p class="text-uppercase pb-3" id="firstHome">
              Leaderboard
            </p>
            <p id="secondHome">Top 5 Greecotopia</p>
            <p class="pb-4" id="thirdHome">
              Jadilah 3 terbesar dengan mengumpulkan poin sebanyak-banyaknya
              dari kegiatan tanam pohon yang telah kamu ikuti! Hadiah yang akan
              kamu dapatkan berupa tiket perjalanan dari Greenpeace loh. Ayo
              buruan kumpulkan poinnya!
            </p>
            {/* Button */}
            <NavLink
              to="/leaderboard"
              className="btn btn-light text-center"
              id="btn-home"
            >
              Lihat Peringkatku
            </NavLink>

            <div className="board">
              {/* Main User */}
              <div className="row" id="top3">
                {/* === Peringkat 2 === */}
                <div
                  className="col-md-4 col-sm-4 col-xs-4 gx-0 py-3 top"
                  id="profileUser23"
                >
                  <p className="rank">2 nd</p>
                  {data?.image_url ? (
                    <Avatar src={data[1]?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={data[1]?.username} id="avaUser" />
                  )}
                  <p className="name">{data[1]?.username} </p>
                  <p className="poin">{data[1]?.points} Point</p>
                </div>
                {/* === Peringkat 1 === */}
                <div
                  className="col-md-4 col-sm-4 col-xs-4 gx-0 py-3 top"
                  id="profileUser1"
                >
                  <p className="rank">1 st</p>
                  {data?.image_url ? (
                    <Avatar src={data[0]?.image_url} id="avaUser" />
                  ) : (
                    <Avatar name={data[0]?.username} id="avaUser" />
                  )}
                  <p className="name">{data[0]?.username}</p>
                  <p className="poin">{data[0]?.points} Point</p>
                </div>
                {/* === Peringkat 3 === */}
                <div
                  className="col-md-4 col-sm-4 col-xs-4 gx-0 py-3 top"
                  id="profileUser23"
                >
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

              {/* Child User */}
              {data?.slice(3)?.map((user, idx) => (
                <>
                  <div className="colomnU" key={idx}>
                    <div className="textUser">
                      <p id="rankUser">{idx + 4}</p>
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
