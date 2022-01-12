import React from "react";
import Header from "../../assets/image/header.png";
import { NavLink } from "react-router-dom";
import "../../assets/styles/home.css";

export default function Welcome() {
  return (
    <>
      {/* Jumbotron */}
      <section className="header" id="jumbotron">
        <div className="container">
          <div className="row " id="welcomeH">
            <div className="col-sm-12 col-md-5 polaroid-left" id="polaroid">
              <img src={Header} alt="header" />
              <p>Save Our Future</p>
            </div>
            <div className="col-sm-12 col-md-7" id="contentWH">
              <p className="text-uppercase pb-3" id="titleWH">
                our mission
              </p>
              <p id="headlineWH">
                The <span>Right Reward</span> <br />
                for the <span>Right Action</span>
              </p>
              <p className="pb-4" id="decsWH">
                Ayo mulai peduli lingkungan dimulai dengan menanam pohon untuk
                membantu menciptakan bumi yang sehat dan nyaman untuk kita
                semua.
              </p>
              {/* Button */}
              <NavLink
                to="/register"
                className="btn btn-light text-center"
                id="btn-home"
              >
                Daftar Sekarang
              </NavLink>
            </div>

            <div className="col-sm-12 col-md-5 polaroid-right" id="polaroid">
              <img src={Header} alt="header" />
              <p>Save Our Future</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
