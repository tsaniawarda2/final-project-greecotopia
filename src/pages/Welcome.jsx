import React from "react";

import "../assets/styles/home.css";
import ForestImage from "../assets/image/bg-welcome.png";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section id="welcome">
        <div className="row gx-0" id="contentW">
          <div className=" col-md-8 col-sm-12" id="left">
            <p className="hi">Hi! We Are</p>
            <p className="greecotopia">Greecotopia</p>
            <p className="decsWelcome">
              Yuk, mulai peduli lingkungan dengan berperan aktif!
            </p>
            <NavLink to="/home" className="btn btn-success" id="btn-home">
              Cari tahu lebih lanjut
            </NavLink>
          </div>
          <div className="col-md-4 col-sm-12" id="right">
            <img src={ForestImage} alt="forest" id="imgForest" />
          </div>
        </div>
      </section>
    </>
  );
}
