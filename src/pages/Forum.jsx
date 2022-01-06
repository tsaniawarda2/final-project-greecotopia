import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categories, hutan, energi, plastik, laut } from "../config/dataForum";

import "../assets/styles/forum.css";
import People from "../assets/image/people.png";
import CardForum from "../components/card/CardForum";
import { ForumContext } from "../context/DataForum";
import { API } from "../config/api";
import { IssueContext } from "../context/DataIssue";

export default function Forum() {
  const { forum } = useContext(ForumContext);
  const { issue } = useContext(IssueContext);
  console.log(issue, "<<<issue");
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
        {forum.map((data, idx) => (
          <>
            <div className="row" id="content-forum" key={idx}>
              {/* Categories */}
              <div className="col-lg-2 col-md-12" id="image-cat">
                <div className="picture">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="text-cat">
                  <div className="categories">{data.title}</div>
                  <div className="sub">{data.description}</div>
                  <NavLink to="/issues">
                    <div className="seeMore">lihat selengkapnya</div>
                  </NavLink>
                </div>
              </div>
              {/* Issues */}
              <div className="col-lg-10 col-md-12 d-flex" id="hutan">
                {issue.map((data, idx) => (
                  <CardForum item={data} key={idx} />
                ))}
              </div>
            </div>
          </>
        ))}

        {/* Energi */}
        {/* <div className="row mb-5">
          <div className="col-lg-2 col-md-12" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1548613053-22087dd8edb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="energi"
              />
            </div>
            <div className="text-cat">
              <div className="categories">Energi</div>
              <div className="sub">
                Bagikan pendapatmu dengan menanggapi isu-isu terkait Energi.
              </div>
              <NavLink to="/issues">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 d-flex" id="energi">
            {energi.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div> */}

        {/* Plastik */}
        {/* <div className="row mb-5">
          <div className="col-lg-2 col-md-12" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1606901302392-ca613ab6abb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="plastik"
              />
            </div>
            <div className="text-cat">
              <div className="categories">plastik</div>
              <div className="sub">
                Bagikan pendapatmu dengan menanggapi isu-isu terkait Plastik.
              </div>
              <NavLink to="/issues">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 d-flex" id="plastik">
            {plastik.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div> */}

        {/* Laut */}
        {/* <div className="row mb-5">
          <div className="col-lg-2 col-md-12" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="laut"
              />
            </div>
            <div className="text-cat">
              <div className="categories">laut</div>
              <div className="sub">
                Bagikan pendapatmu dengan menanggapi isu-isu terkait Laut.
              </div>
              <NavLink to="/issues">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-10 col-md-12 d-flex" id="laut">
            {laut.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
