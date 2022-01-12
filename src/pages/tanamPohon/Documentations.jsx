import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/documentations.css"
import { DataContext } from "../../context/DataTanamPohon";
import AlbumDocumentations from "../../components/card/AlbumDocumentations";
import { API } from "../../config/api";

export default function Documentations() {
  // const { dataDoc } = useContext(DataContext);
  // console.log(dataDoc, "doc");

  const [ dataDoc, setDataDoc] = useState([]);

  useEffect(() => {
    getDocumentations();
  }, [])

  const getDocumentations = async () => {
    const { data : dataDocumentations } = await API().get("/documentations");
    setDataDoc(dataDocumentations.data);
    console.log(dataDocumentations.data, "success get");
  } 

  return (
    <>
      <div className="container-docs">
        <div className="doc-text">
          <h1>Dokumentasi <span>Tanam Pohon</span></h1>
        </div>
        <div className="all-docs">
          {dataDoc.map(data => (
            <AlbumDocumentations data={data} key={data.tanam_pohon_id}/>
          ))}
        </div>
      </div>
    </>
  );
}