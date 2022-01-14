import React, { useEffect, useState } from "react";
import "../../assets/styles/documentations.css"
import AlbumDocumentations from "../../components/card/AlbumDocumentations";
import { API } from "../../config/api";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Documentations() {
  // const { dataDoc } = useContext(DataContext);
  
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
    <Navbar/>
      <div className="container-docs">
        <div className="doc-text">
          <h1>Dokumentasi <span>Tanam Pohon</span></h1>
        </div>
        <div className="all-docs">
          {dataDoc.map(data => (
            data?.Documentations.length !== 0 ? 
            <AlbumDocumentations data={data} key={data.tanam_pohon_id}/>
            : <></>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}