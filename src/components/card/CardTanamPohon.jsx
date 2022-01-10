import React from "react";
import { useHistory } from "react-router-dom";
import {GiTwoCoins} from "react-icons/gi"

export default function CardTanamPohon({ item }) {
  const history = useHistory();

  const getDate = (dateStr = '') => {
    if (!dateStr) return ''
    const arrDate = dateStr.split('T')
    return arrDate[0]
  }

  return (
    <>
      <div className="card-tp">
        <div className="point">
          <GiTwoCoins className="point-icon"/>
          <h4>{item.reward_point}</h4>
        </div>
        <img src={item.image_url}/>
        <p><i className="fas fa-map-marked-alt"></i>{item.location}</p>
        <p><i className="fas fa-calendar-alt"></i> {getDate(item.date)}</p>
        <h1>{item.title}</h1>
        <button className="btn-join-tp" onClick={() => history.push(`/formTanamPohon/${item.tanam_pohon_id}`, {id: item.tanam_pohon_id})}>BERGABUNG</button>
      </div>
    </>
  );
}
