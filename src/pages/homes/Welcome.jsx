import React from "react";
import Header from "../../assets/image/header.png";
import { NavLink } from "react-router-dom";

export default function Welcome() {
  return (
    <>
      {/* Jumbotron */}
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="text-content col-md-7">
              <p className="text-uppercase pb-3" id="title">
                our mission
              </p>
              <p id="headline">
                The <span>Right Reward</span> <br />
                for the <span>Right Action</span>
              </p>
              <p className="pb-4" id="decsWHome">
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
            <div className="col-md-5" id="polaroid">
              <img src={Header} alt="header" />
              <p>Save Our Future</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
