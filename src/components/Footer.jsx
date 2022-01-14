import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/image/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

import "../assets/styles/footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 mainTitle">
              <div id="ttl-footer">
                <img className="logo-footer" src={Logo} alt="brand" />
                Greecotopia
                <div className="aboutUs">
                  Mega Plaza Building Lt. 5, Jl. HR. Rasuna Said Kav. C3
                  Kuningan, Jakarta Selatan, Indonesia 12920
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 uLink">
              <div className="ttl-footer">Useful Link</div>
              <p className="list-pages" id="linkFooter">
                <Link className="item-pages" to="/home">
                  Home
                </Link>
                <Link className="item-pages" to="/account">
                  Account
                </Link>

                <Link className="item-pages" to="/tanamPohon">
                  Tanam Pohon
                </Link>

                <Link className="item-pages" to="/forums">
                  Forum
                </Link>
                <Link className="item-pages" to="/leaderboard">
                  Leaderboard
                </Link>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 findUs">
              <div className="ttl-footer">Find Us At</div>
              <p className="list-pages">
                <Link className="item-pages" to="#">
                  <FaFacebookF className="me-3" />
                  GreecotopiaIndonesia
                </Link>
                <Link className="item-pages" to="#">
                  <FaTwitter className="twitter" />
                  GreecotopiaID
                </Link>
                <Link className="item-pages" to="#">
                  <FaInstagram className="me-3" />
                  greecotopiaid
                </Link>
                <Link className="item-pages" to="#">
                  <FaPhoneAlt className="me-3" />
                  (021) 5212552
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center">
        Copyright © Greecotopia Indonesia 2021. <br />
        All rights reserved.
      </footer>
    </>
  );
}
