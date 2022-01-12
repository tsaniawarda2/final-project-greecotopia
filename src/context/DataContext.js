import React, { createContext, useState, useEffect } from "react";
import { API } from "../config/api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [ userLogin, setUserLogin ] = useState([]);

  useEffect(() => {
    getUserLogin();
  }, []);

  const getUserLogin = async () => {
    const { data } = await API().get("/profile");
    setUserLogin(data.dataUser);
  } 

  return (
    <DataContext.Provider value={{ userLogin }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext };