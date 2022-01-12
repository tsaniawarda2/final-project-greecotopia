import React from "react";
import Avatar from "react-avatar";

const dataUser = [
  {
    message: "Success Get Data Top 5",
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
    ],
  },
];
const dataTopFive = dataUser[0].users;
console.log(dataTopFive, "----");
export default function Board() {
  return (
    <>
      <div className="board">
        {/* Main User */}
        <div className="row" id="top3">
          <div className="col-md-4 gx-0 py-3 top" id="profileUser23">
            <p className="rank">2st</p>
            {dataTopFive?.image_url ? (
              <Avatar src={dataTopFive?.image_url} id="avaUser" />
            ) : (
              <Avatar name={dataTopFive?.username} id="avaUser" />
            )}
            <p className="name">username</p>
            <p className="poin">{dataTopFive?.points} Point</p>
          </div>
          <div className="col-md-4 gx-0 py-3 top" id="profileUser1">
            <p className="rank">2st</p>
            {dataTopFive?.image_url ? (
              <Avatar src={dataTopFive?.image_url} id="avaUser" />
            ) : (
              <Avatar name={dataTopFive?.username} id="avaUser" />
            )}
            <p className="name">username</p>
            <p className="poin">{dataTopFive?.points} Point</p>
          </div>
          <div className="col-md-4 gx-0 py-3 top" id="profileUser23">
            <p className="rank">2st</p>
            {dataTopFive?.image_url ? (
              <Avatar src={dataTopFive?.image_url} id="avaUser" />
            ) : (
              <Avatar name={dataTopFive?.username} id="avaUser" />
            )}
            <p className="name">username</p>
            <p className="poin">{dataTopFive?.points} Point</p>
          </div>
        </div>

        {/* Child User */}
        {dataTopFive?.map((user) => (
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
    </>
  );
}
