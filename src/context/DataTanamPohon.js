import React, { createContext, useState, useEffect, useReducer } from "react";
import { tanamPohonReducer } from "./ReducerTanamPohon";
import { API } from "../config/api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataDoc, setDataDoc] = useState([]);

  useEffect(() => {
    getTanamPohon();
    getDocumentations();
  }, []);

  const getTanamPohon = async () => {
    await API().get("/tanampohons")
    .then((response) => {
      const dataTanamPohon = response.data.TanamPohon;
      setData(dataTanamPohon)
    })
    .catch(error => console.log(error))
  } 

  const getDocumentations = async () => {
      await API().get("/documentations")
      .then((response) => {
        const dataDocumentations = response.data.documentations;
        setDataDoc(dataDocumentations)
      })
      .catch(error => console.log(error))
    } 

  const [state, dispatch] = useReducer(tanamPohonReducer, {
    documentation: {
      image_url: "",
      caption: "",
      messages: "",
      tanam_pohon_id: 0
    }
  });

  return (
    <DataContext.Provider value={{ data, dataDoc, state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };