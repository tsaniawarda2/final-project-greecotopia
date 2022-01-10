import React from "react";
import { useHistory } from "react-router-dom";

export default function AlbumDocumentations({ data }) {
  const history = useHistory();

  return (
    <>
      <div className="documentations" onClick={() => history.push(`/documentations/${data.tanam_pohon_id}`, {id: data.tanam_pohon_id})}>
        <div className="image-docs">
          <div className="docs-icon">
            <i class="far fa-images fa-2x"></i>
          </div>
          <img src={data.Documentations[0].image_url} alt="" />
        </div>
        <p className="total-picts">({data.Documentations.length} Foto)</p>
        <h3 className="doc-title-tp">{data.title}</h3>
      </div>
    </>
  );
}
