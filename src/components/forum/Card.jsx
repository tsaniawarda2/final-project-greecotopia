import React from "react";
import { NavLink } from "react-router-dom";

import { HiOutlineShare } from "react-icons/hi";
import { MdOutlineUpdate } from "react-icons/md";
import { FaEye } from "react-icons/fa";

import "../../assets/styles/forum.css";
export default function Card({ item }) {
  return (
    <>
      <div id="forum">
        <div className="card">
          <div className="share text-center">
            <HiOutlineShare className="icon-shr" />
          </div>
          <img src={item.img} className="card-img-top" alt="tree" />

          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.decs}</p>
            <p className="date-view">
              <span className="date">
                <MdOutlineUpdate className="icon-dv" /> {item.date}
              </span>
              <span className="view">
                <FaEye className="icon-dv" /> {item.view}
              </span>
            </p>
            <NavLink to="#" className="btn btn-warning">
              Tanggapi Isu
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
