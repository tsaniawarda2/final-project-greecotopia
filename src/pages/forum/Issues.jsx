import React, { useContext } from "react";

import { ForumContext } from "../../context/DataForum";

import "../../assets/styles/issue.css";
import CardIssue from "../../components/card/CardIssue";
import Banners from "../../components/Banners";
import { useHistory } from "react-router-dom";

const bgColors = ["hutan", "energi", "plastik", "laut"];
export default function Issues() {
  const { forums } = useContext(ForumContext);
  const { forum } = useContext(ForumContext);
  const history = useHistory();

  return (
    <>
      {/* Header */}
      <Banners item={forum[0].dataForum} key={forum[0].dataForum.forum_id} />

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
                  history.push(`/forums/${category?.forum_id}`, {
                    id: category?.forum_id,
                  })
                }
              >
                {category.title}
              </div>
            </li>
          </>
        ))}
      </ul>
      <div className="container mb-5">
        <div id="issues">
          {/* Card */}
          <div className="row" id="cardIssues">
            {forum?.map((forum, idx) => (
              <div className="col-md-3">
                <CardIssue item={forum} key={forum.issue_id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
