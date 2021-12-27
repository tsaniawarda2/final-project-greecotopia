import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "../assets/css/footer.css";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="ttl-footer" id="first">
                <img className="logo" src={Logo} alt="brand" /> Greecotopia
                <div className="aboutUs">
                  Greecotopia is website youth for environmental care
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 uLink">
              <div className="ttl-footer">Useful Link</div>
              <p className="list-pages">
                <Link className="item-pages" to="/">
                  Home
                </Link>
                <p className="item-pages">About</p>
                <Link className="item-pages" to="/forum">
                  Forum
                </Link>
                <p className="item-pages">Account</p>
                <Link className="item-pages" to="/tanamPohon">
                  Tanam Pohon
                </Link>
                <Link className="item-pages" to="/leaderboard">
                  Leaderboard
                </Link>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 contact">
              <div className="ttl-footer">Contact</div>
              <p className="list-pages">
                Greecotopia.Inc Jln. Benjamin No. 45 Jakarta Pusat, Indonesia
                <br />
                Telp: (022) 64828729
                <br />
                Email : greecotopia.com
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-xs-12 find-us">
              <div className="ttl-footer">Find Us At</div>
              <div className="icon-find">
                <FaFacebookF className="me-3" />
                <FaTwitter className="me-3" />
                <FaYoutube className="me-3" />
                <FaLinkedin className="me-3" />
                <FaGithub className="me-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center">
        Copyright © Greecotopia Indonesia 2021. All rights reserved.
      </footer>
    </>
  );
}
