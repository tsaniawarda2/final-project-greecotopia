import React from "react";
import { NavLink } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "../../assets/styles/forum.css";
export default function CardForum({ item }) {
  return (
    <>
      <div id="cardFI" className="card-forum">
        <div className="card">
          <div className="fav text-center">
            <AiOutlineHeart className="icon-fav" />
          </div>
          <img src={item.image_url} className="card-img-top" alt="tree" />

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.decs}</p>

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
