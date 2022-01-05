import React, { createContext, useState, useEffect, useReducer } from "react";
import { tanamPohonReducer } from "./ReducerTanamPohon";
import { API } from "../config/api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTanamPohon();
  }, []);

  const getTanamPohon = async () => {
    await API().get("/tanampohons")
    .then((response) => {
      const dataTanamPohon = response.data.TanamPohon;
      setData(dataTanamPohon)
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
    <DataContext.Provider value={{ data, state, dispatch}}>
      {children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };