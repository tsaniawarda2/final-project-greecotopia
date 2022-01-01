import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/log.css";
import Logo from "../assets/image/logo.png";

export default function Login() {
  return (
    <>
      <div className="body" id="body-form">
        <div className="container d-flex justify-content-center">
          <div id="form">
            <div className="title-form text-center">
              <NavLink to="/" id="home">
                <img src={Logo} alt="earth" id="logo-log" />
                Greecotopia
              </NavLink>
              <h2>Ayo Bantu Selamatkan Bumi Kita!</h2>
            </div>

            <form>
              {/* Fullname */}
              <div className="mb-4">
                <label for="fullname" className="form-label input">
                  Fullname
                </label>
                <input type="text" className="form-control" id="formSignUp" />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label for="email" className="form-label input">
                  Email
                </label>
                <input type="text" className="form-control" id="formSignUp" />
              </div>
              {/* Username */}
              <div className="mb-4">
                <label for="username" className="form-label input">
                  Username
                </label>
                <input type="text" className="form-control" id="formSignUp" />
              </div>
              {/* Password */}
              <div className="d-flex password">
                <div className="password1">
                  <label for="password" className="form-label input">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="formSignUp"
                  />
                </div>
                <div className="password2">
                  <label for="confPassword" className="form-label input">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="formSignUp"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-success text-center"
                id="submit"
              >
                Daftar
              </button>

              <div className="text-center opsi">
                <p id="alt1">
                  Dengan mendaftar, Anda menyetujui persyaratan komunikasi dan
                  penggunaan kami. Sudah punya akun?
                  <NavLink to="/login" className="log">
                    Masuk disini
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
