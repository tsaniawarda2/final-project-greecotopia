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
              <h2>Selamat Datang Kembali</h2>
            </div>

            <form>
              <div className="mb-4">
                <label for="username" className="form-label input">
                  Username
                </label>
                <input type="text" className="form-control" id="formLogin" />
              </div>
              <div className="mb-2">
                <label for="password" className="form-label input">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="formLogin"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-success text-center"
                id="submit"
              >
                Masuk
              </button>

              <div className="text-center opsi">
                <p id="alt1">
                  Belum punya akun?
                  <NavLink to="/signUp" className="log">
                    Daftar disini
                  </NavLink>
                </p>
                <p id="alt2">
                  Lupa Password?
                  <NavLink to="/password" className="log">
                    Atur ulang password
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
