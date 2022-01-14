import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/log.css";
import Logo from "../assets/image/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../config/api";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });
  const history = useHistory();

  const onRegister = async () => {
    try {
      if (!form.fullname) {
        toast("Please input fullname !", {
          type: "error",
          theme: "colored",
        });
      }
      if (!form.email) {
        toast("Please input email !", {
          type: "error",
          theme: "colored",
        });
      }
      if (!form.username) {
        toast("Please input username !", {
          type: "error",
          theme: "colored",
        });
      }
      if (!form.password) {
        toast("Please input password !", {
          type: "error",
          theme: "colored",
        });
      }
      if (form.fullname && form.email && form.username && form.password) {
        const { data } = await API().post("/auth/register", form);
        console.log(data);
        history.push("/login");
      }
    } catch (error) {
      console.log(error?.response?.data);
      if (error?.response?.data?.error) {
        toast(error?.response?.data?.error, {
          type: "error",
          theme: "colored",
        });
      } else if (error?.response?.data?.errors) {
        const errors = error?.response?.data?.errors;
        errors.forEach((err) => {
          toast(err, {
            type: "error",
            theme: "colored",
          });
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="body" id="body-form">
        <div className="container d-flex justify-content-center">
          <div id="form">
            <div className="title-form text-center">
              <NavLink to="/home" id="home">
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
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="form-control"
                  id="formRegister"
                  value={form?.fullname}
                  onChange={(e) =>
                    setForm({ ...form, fullname: e.target?.value })
                  }
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label for="email" className="form-label input">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Masukkan email, contoh : greecotopia@email.com"
                  className="form-control"
                  id="formRegister"
                  value={form?.email}
                  onChange={(e) => setForm({ ...form, email: e.target?.value })}
                />
              </div>
              {/* Username */}
              <div className="mb-4">
                <label for="username" className="form-label input">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Buat username, contoh : greecotopia_123"
                  className="form-control"
                  id="formRegister"
                  value={form?.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target?.value })
                  }
                />
              </div>
              {/* Password */}
              <div className="password">
                <label for="password" className="form-label input">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Buat password, contoh : gr33c0top!4"
                  className="form-control"
                  id="formRegister"
                  value={form?.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target?.value })
                  }
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="btn btn-success text-center"
                id="submit"
                onClick={() => onRegister()}
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
    </>
  );
}
