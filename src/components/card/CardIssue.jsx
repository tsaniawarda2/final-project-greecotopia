import React from "react";
import { useHistory } from "react-router-dom";

import "../../assets/styles/issue.css";
import {
  FaComment as CommentFill,
  FaRegComment as CommentOutline,
} from "react-icons/fa";

export default function CardIssue({ item }) {
  const history = useHistory();

  return (
    <>
      <div id="cardFI" className="card-issue">
        <div className="card" id="cIssue">
          <img src={item?.image_url} className="card-img-top" alt="imgCard" />
          <div className="card-body">
            <h5 className="card-title">{item?.title}</h5>
            <p className="card-text">
              {item?.title.length >= 28
                ? item?.summary.substring(0, 60) + " ..."
                : item?.summary.substring(0, 84) + " ..."}
            </p>
            <div className="comment">
              {item?.Comments.length !== 0 ? (
                <CommentFill
                  className="icon-com"
                  onClick={() =>
                    history.push(`/issues/${item?.issue_id}`, {
                      id: item?.issue_id,
                    })
                  }
                />
              ) : (
                <CommentOutline
                  className="icon-com"
                  onClick={() =>
                    history.push(`/issues/${item?.issue_id}`, {
                      id: item?.issue_id,
                    })
                  }
                />
              )}

              <span className="context">{item?.Comments.length}</span>
            </div>
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
