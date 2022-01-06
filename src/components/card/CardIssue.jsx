import React from "react";
import { NavLink } from "react-router-dom";

import "../../assets/styles/issue.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaComment, FaRegComment } from "react-icons/fa";

export default function CardIssue({ item }) {
  return (
    <>
      <div id="cardFI" className="card-issue">
        <div className="card">
          <div className="fav text-center">
            <AiOutlineHeart className="icon-fav" />
          </div>
          <img
            src={item.image_url}
            className="card-img-top"
            alt="tree"
            id="img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.decs}</p>
            <div className="comment">
              <FaComment className="icon-com" />
              <span className="context">12</span>
            </div>
            <NavLink
              to="/issues/:id"
              id="btn-issue"
              className="btn btn-warning"
            >
              Tanggapi Isu
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
