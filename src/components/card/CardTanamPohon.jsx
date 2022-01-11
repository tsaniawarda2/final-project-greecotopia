import React from "react";
import { useHistory } from "react-router-dom";
import {GiTwoCoins} from "react-icons/gi"

export default function CardTanamPohon({ item, userLogin }) {
  const history = useHistory();

  const getDate = (dateStr = '') => {
    if (!dateStr) return ''
    const arrDate = dateStr.split('T')
    return arrDate[0]
  }

  const checkParticipant = (dataParticipant = []) =>{
    const isExistUser = dataParticipant.find((participant) => participant.user_id === userLogin.user_id)  
    if(isExistUser){
      return true
    }  else {
      return false
    }
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
        {
          checkParticipant(item.Participants)? 
          <button className="btn-unggah-tp" onClick={() => history.push(`/formDocumentation/${item.tanam_pohon_id}`, {id: item.tanam_pohon_id})}>Unggah Dokumentasi</button>
          :
          <button className="btn-join-tp" onClick={() => history.push(`/formTanamPohon/${item.tanam_pohon_id}`, {id: item.tanam_pohon_id})}>BERGABUNG</button>
        }
      </div>
    </>
  );
}
