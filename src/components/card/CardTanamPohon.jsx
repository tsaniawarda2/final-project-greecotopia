import React from "react";
import { useHistory } from "react-router-dom";

export default function CardTanamPohon({ item }) {
  const history = useHistory();

  return (
    <>
      <div className="card-tp">
        <img src={item.image_url}/>
        <p><i className="fas fa-map-marked-alt"></i>{item.location}</p>
        <p><i className="fas fa-calendar-alt"></i> {item.date}</p>
        <h1>{item.title}</h1>
        <button className="btn-join-tp" onClick={() => history.push(`/formTanamPohon/${item.tanam_pohon_id}`, {id: item.tanam_pohon_id})}>BERGABUNG</button>
      </div>
    </>
  );
}
