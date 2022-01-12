import React, { createContext, useState, useEffect } from "react";
import { API } from "../config/api";

const DataLogin = createContext();

const LoginProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState([]);

  useEffect(() => {
    getUserLogin();
  }, []);

  const getUserLogin = async () => {
    const { data } = await API().get("/profile");
    setUserLogin(data.dataUser);
  };

  return (
    <DataLogin.Provider value={{ userLogin }}>{children}</DataLogin.Provider>
  );
};

export { DataLogin, LoginProvider };
