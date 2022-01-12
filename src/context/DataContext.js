import React, { createContext, useState, useEffect } from "react";
import { API } from "../config/api";
import { useLocation } from "react-router-dom";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataTP, setDataTP] = useState([]);
  const [tanamPohon, setTanamPohon] = useState([]);
  const [dataDoc, setDataDoc] = useState([]);
  const [documentation, setDocumentation] = useState([]);
  const { pathname } = useLocation();

  const [userLogin, setUserLogin] = useState([]);

  useEffect(() => {
    getUserLogin();
  }, []);

  const getUserLogin = async () => {
    const { data } = await API().get("/profile");
    setUserLogin(data.dataUser);
  };

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);

    await getTanamPohon();
    await getDocumentations();
    await getTanamPohonById(newId);
    await getDocumentationsById(newId);
  }, []);

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);
    console.log(pathname, "path");

    await getTanamPohonById(newId);
    await getDocumentationsById(newId);
  }, [pathname]);

  const getTanamPohon = async () => {
    const { data: dataTanamPohon } = await API().get("/tanampohons");
    setDataTP(dataTanamPohon.TanamPohon);
  };

  const getTanamPohonById = async (id) => {
    if (id) {
      const { data: dataTanamPohonId } = await API().get(`/tanampohons/${id}`);
      setTanamPohon(dataTanamPohonId.TanamPohon);
    }
  };

  const getDocumentations = async () => {
    const { data: dataDocumentations } = await API().get("/documentations");
    setDataDoc(dataDocumentations.data);
  };

  const getDocumentationsById = async (id) => {
    console.log(id, "id");
    if (id) {
      const { data: dataDocumentationId } = await API().get(
        `/documentations/tanam_pohon/${id}`
      );
      setDocumentation(dataDocumentationId.data);
    }
  };

  return (
    <DataContext.Provider
      value={{ userLogin, dataTP, tanamPohon, dataDoc, documentation }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
