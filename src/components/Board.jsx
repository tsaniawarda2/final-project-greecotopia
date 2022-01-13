import React from "react";
import Avatar from "react-avatar";

export default function Board({ item, idx }) {
  console.log(item.length + 1);
  return (
    <>
      <div className="board">
        {/* Main User */}
        <div className="row" id="top3">
          {/* === Peringkat 2 === */}
          <div className="col-md-4 gx-0 py-3 top" id="profileUser23">
            <p className="rank">2 nd</p>
            {item?.image_url ? (
              <Avatar src={item[1]?.image_url} id="avaUser" />
            ) : (
              <Avatar name={item[1]?.username} id="avaUser" />
            )}
            <p className="name">{item[1]?.username} </p>
            <p className="poin">{item[1]?.points} Point</p>
          </div>
          {/* === Peringkat 1 === */}
          <div className="col-md-4 gx-0 py-3 top" id="profileUser1">
            <p className="rank">1 st</p>
            {item?.image_url ? (
              <Avatar src={item[0]?.image_url} id="avaUser" />
            ) : (
              <Avatar name={item[0]?.username} id="avaUser" />
            )}
            <p className="name">{item[0]?.username}</p>
            <p className="poin">{item[0]?.points} Point</p>
          </div>
          {/* === Peringkat 3 === */}
          <div className="col-md-4 gx-0 py-3 top" id="profileUser23">
            <p className="rank">3 rd</p>
            {item?.image_url ? (
              <Avatar src={item[2]?.image_url} id="avaUser" />
            ) : (
              <Avatar name={item[2]?.username} id="avaUser" />
            )}
            <p className="name">{item[2]?.username}</p>
            <p className="poin">{item[2]?.points} Point</p>
          </div>
        </div>

        {/* Child User */}
        {item?.map((user) => (
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
