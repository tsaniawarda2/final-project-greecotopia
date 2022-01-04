import React from "react";
import { NavLink } from "react-router-dom";

import { categories, hutan } from "../../config/dataForum";
import "../../assets/styles/issue.css";
import CardIssue from "../../components/card/CardIssue";

export default function Issues() {
  return (
    <>
      {/* Filter */}
      <ul
        className=" nav d-flex justify-content-center mb-5 sticky-top"
        id="issues-filter"
      >
        {categories?.map((category, idx) => (
          <>
            <li className="nav-item" key={idx}>
              <NavLink to="#" id="link-issues">
                {category.title}
              </NavLink>
            </li>
          </>
        ))}
      </ul>
      <div className="container mb-5">
        <div id="issues">
          {/* Header */}
          {/* <div className="content-header">
            <p className="yvm text-uppercase">Your Voice Matter</p>
            <p className="wdyt">Hutan</p>
            <p className="decs-header">
              Mari berdikusi mengenai hutan yang ada di Indonesia, kita dukung
              bumi agar menjadi semakin hijau.
            </p>
          </div> */}
          {/* Card */}
          <div className="row" id="cardIssues">
            {hutan.map((data) => (
              <div className="col-md-3">
                <CardIssue item={data} key={data.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
