import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/log.css";
import Logo from "../assets/image/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../config/api";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [ form, setForm ] = useState({
    username: '',
    password: ''
  })
  const history = useHistory()

  const onLogin = async () => {
    try {
      if (!form.username) {
        toast('Please input username !', {
          type: 'error'
        })
      } 
      if (!form.password) {
        toast('Please input password !', {
          type: 'error'
        })
      }
      if (form.username && form.password) {
        const { data } = await API().post('/auth/login', form)
        if (data?.token) {
          localStorage.setItem('token', data?.token)
          history.push('/')
        }
      }
    } catch (error) {
      console.log(error)
      toast(error?.response?.data?.message || 'Internal Server Error', {
        type: 'error'
      })
    }
  }

  return (
    <>
    <ToastContainer/>
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
                <input type="text" className="form-control" id="formLogin" value={form?.username}  onChange={e => setForm({ ...form, username: e.target?.value })}/>
              </div>
              <div className="mb-2">
                <label for="password" className="form-label input">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="formLogin"
                  value={form?.password} 
                  onChange={e => setForm({ ...form, password: e.target?.value })}
                />
              </div>

              {/* Button */}
              <button
                type="button"
                className="btn btn-success text-center"
                id="submit"
                onClick={() => onLogin()}
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
    </>
  );
}
