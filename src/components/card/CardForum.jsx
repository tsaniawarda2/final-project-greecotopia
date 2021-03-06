import React from "react";

import "../../assets/styles/forum.css";
import { useHistory } from "react-router-dom";
export default function CardForum({ item }) {
  const history = useHistory();
  return (
    <>
      <div id="cardFI" className="card-forum">
        <div className="card" id="cForum">
          <img src={item?.image_url} className="card-img-top" alt="imgCard" />

          <div className="card-body">
            <h5 className="card-title">{item?.title}</h5>
            <p className="card-text">{item?.summary}</p>

            {/* <NavLink
              to={`/issues/${item?.issue_id}`}
              id="btn-issue"
              className="btn btn-warning"
            >
              Tanggapi Isu
            </NavLink> */}
            <button
              to={`/issues/${item?.issue_id}`}
              id="btn-issue"
              className="btn btn-warning"
              onClick={() =>
                history.push(`/issues/${item?.issue_id}`, {
                  id: item?.issue_id,
                })
              }
            >
              Tanggapi Isu
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
