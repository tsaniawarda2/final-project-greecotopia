import React, { useContext } from "react";

import { DataContext } from "../../context/DataContext";

import "../../assets/styles/issue.css";
import CardIssue from "../../components/card/CardIssue";
import Banners from "../../components/Banners";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const bgColors = ["hutan", "energi", "plastik", "laut"];
export default function Issues() {
  const { forums } = useContext(DataContext);
  const { forum } = useContext(DataContext);
  const history = useHistory();

  const dataForum = forum.Forums;
  const dataIssues = forum.Issues;

  return (
    <>
      <Navbar />
      {/* Header */}
      <Banners item={dataForum} key={dataForum?.forum_id} />

      {/* Filter */}
      <ul
        className=" nav d-flex justify-content-center mb-5 sticky-top"
        id="issues-filter"
      >
        {forums?.map((category, idx) => (
          <>
            <li className={`${bgColors[idx]} nav-item`} key={idx}>
              <div
                id="link-issues"
                onClick={() =>
                  history.push(`/forums/${category.forum_id}`, {
                    id: category?.forum_id,
                  })
                }
              >
                {category?.title}
              </div>
            </li>
          </>
        ))}
      </ul>
      <div className="container mb-5">
        <div id="issues">
          {/* Card */}
          <div className="row" id="cardIssues">
            {dataIssues?.map((forum, idx) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <CardIssue item={forum} key={forum.issue_id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
