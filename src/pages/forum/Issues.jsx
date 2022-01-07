import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { categories } from "../../config/dataForum";
import { IssueContext } from "../../context/DataIssue";
import "../../assets/styles/issue.css";
import CardIssue from "../../components/card/CardIssue";
import Banners from "../../components/Banners";

export default function Issues() {
  const { issue } = useContext(IssueContext);
  console.log(issue, "---- Issue");
  return (
    <>
      {/* Header */}
      <Banners />

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
          {/* Card */}
          <div className="row" id="cardIssues">
            {issue.map((data, idx) => (
              <div className="col-md-3">
                <CardIssue item={data} key={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
