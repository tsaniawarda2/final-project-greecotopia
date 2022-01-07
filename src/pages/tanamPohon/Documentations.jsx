import React, { useContext } from "react";
import "../../assets/styles/documentations.css"
import { DataContext } from "../../context/DataTanamPohon";

export default function Documentations() {
  const { dataDoc } = useContext(DataContext);

  return (
    <>
      <div className="container-docs">
        <div className="doc-text">
          <h1>Dokumentasi <span>Tanam Pohon</span></h1>
        </div>
        <div className="all-docs">
          {dataDoc.map(data => (
            <div className="documentations">
              <div className="image-docs">
                <div className="docs-icon">
                  <i class="far fa-images fa-2x"></i>
                </div>
                <img src={data.Documentations[0].image_url} alt="" />
              </div>
              <p className="total-picts">({data.Documentations.length} Foto)</p>
              <h3 className="doc-title-tp">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}