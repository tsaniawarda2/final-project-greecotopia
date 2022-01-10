import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import "../assets/styles/forum.css";
import People from "../assets/image/people.png";
import CardForum from "../components/card/CardForum";
import { ForumContext } from "../context/DataForum";
import { useHistory } from "react-router-dom";

const bgColors = ["hutan", "energi", "plastik", "laut"];
export default function Forum() {
  const { forums: data } = useContext(ForumContext);
  const history = useHistory();

  return (
    <>
      <div className="container mb-5">
        {/* Header */}
        <div className="row" id="forum">
          <div className="col-md-8 content-header">
            <p className="yvm text-uppercase">Your Voice Matter</p>
            <p className="wdyt">What do you think?</p>
            <p className="decs-header">
              Kami sebagai challenge partner Greenpeace ingin memberi wadah
              untuk masyarakat menyuarakan aspirasinya dengan tujuan mendengar
              dari sudut pandang lain.
            </p>
          </div>
          <div className="col-md-4 img-header">
            <img className="wytd-img" src={People} alt="thinking" />
          </div>
        </div>

        {/* Hutan*/}
        {data?.map((dataForum, idxForum) => (
          <>
            <div className={`${bgColors[idxForum]} row`} id="content-forum">
              {/* Categories */}
              <div className="col-lg-2 col-md-12" id="image-cat">
                <div className="picture">
                  <img src={dataForum.image_url} alt={dataForum.title} />
                </div>
                <div className="text-cat">
                  <div className="categories">{dataForum.title}</div>
                  <div className="sub">{dataForum.description}</div>
                  {/* <NavLink to={`/forums/${dataForum?.forum_id}`}> */}
                  <div
                    className="seeMore"
                    onClick={() =>
                      history.push(`/forums/${dataForum?.forum_id}`, {
                        id: dataForum?.forum_id,
                      })
                    }
                  >
                    lihat selengkapnya
                  </div>
                  {/* </NavLink> */}
                </div>
              </div>
              {/* Issues */}
              <div className="col-lg-10 col-md-12 d-flex" id="contentCard">
                {dataForum?.Issues?.map((dataIssue, idxIssue) => (
                  <CardForum item={dataIssue} key={idxIssue} />
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
