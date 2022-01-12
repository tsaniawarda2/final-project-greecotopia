import React, { createContext, useState, useEffect } from "react";
import { API } from "../config/api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [ userLogin, setUserLogin ] = useState([]);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUserLogin();
    getUsers();
  }, []);

  const getUserLogin = async () => {
    const { data } = await API().get("/profile");
    setUserLogin(data?.dataUser);
  } 

  const getUsers = async () => {
    const { data : dataUser} = await API().get("/users");
    setUsers(dataUser?.users);
  }

  return (
    <DataContext.Provider value={{ userLogin, users }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };