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
              <h2>Atur Ulang Password</h2>
            </div>

            <form>
              <div className="mb-4">
                <label for="passOld" className="form-label input">
                  Password Lama
                </label>
                <input type="password" className="form-control" id="pass" />
              </div>
              <div className="mb-4">
                <label for="passNew1" className="form-label input">
                  Password Baru
                </label>
                <input type="password" className="form-control" id="pass" />
              </div>
              <div className="mb-2">
                <label for="passNew2" className="form-label input">
                  Konfirmasi Password Baru
                </label>
                <input type="password" className="form-control" id="pass" />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-success text-center"
                id="submit"
              >
                Simpan
              </button>

              <div className="text-center opsi">
                <p id="alt1">
                  Belum punya akun?
                  <NavLink to="/signUp" className="log">
                    Daftar disini
                  </NavLink>
                </p>
                <p id="alt2">
                  <NavLink to="/login" className="log">
                    Kembali ke halaman masuk
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
