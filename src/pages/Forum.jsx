import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../assets/styles/forum.css";
import People from "../assets/image/people.png";
import CardForum from "../components/card/CardForum";
import { DataContext } from "../context/DataContext";

const bgColors = ["hutan", "energi", "plastik", "laut"];
export default function Forum() {
  const { forums: data } = useContext(DataContext);
  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className="container mb-5">
        {/* Header */}
        <div className="row" id="forum">
          <div className="col-md-4 img-header leftBan">
            <img className="wytd-img" src={People} alt="thinking" />
          </div>
          <div className="col-md-8 content-header">
            <p className="yvm text-uppercase">Your Voice Matter</p>
            <p className="wdyt">What do you think?</p>
            <p className="decs-header">
              Kami sebagai challenge partner Greenpeace ingin memberi wadah
              untuk masyarakat menyuarakan aspirasinya dengan tujuan mendengar
              dari sudut pandang lain.
            </p>
          </div>
          <div className="col-md-4 img-header rightBan">
            <img className="wytd-img" src={People} alt="thinking" />
          </div>
        </div>

        {/* Content */}
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
      <Footer />
    </>
  );
}
