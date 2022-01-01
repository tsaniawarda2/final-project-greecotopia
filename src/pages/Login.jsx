import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/log.css";
import Logo from "../assets/image/logo.png";

export default function Login() {
  return (
    <>
      <div className="body " id="login">
        <div className="container d-flex justify-content-center">
          <div id="form">
            <div className="title-form text-center">
              <h1>
                <img src={Logo} alt="earth" id="logo-log" />
                Greecotopia
              </h1>
              <h2>Selamat Datang Kembali</h2>
            </div>

            <form>
              <div className="mb-4">
                <label for="username" className="form-label input">
                  Username
                </label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="mb-2">
                <label for="password" className="form-label input">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-success text-center"
                id="submit"
              >
                Masuk
              </button>

              <div className="text-center opsi" id="alt1">
                <p id="alt1">
                  Belum punya akun?
                  <NavLink to="/signUp" className="log">
                    Daftar disini
                  </NavLink>
                </p>
                <p id="alt2">
                  Lupa Password?
                  <NavLink to="#" className="log">
                    Atur ulang password
                  </NavLink>
                </p>
              </div>
              {/* <p>
                  Lupa password? <NavLink to="" className="">Atur ulang password</NavLink>
                </p> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
