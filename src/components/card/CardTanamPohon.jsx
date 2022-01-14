import React from "react";
import { useHistory } from "react-router-dom";
import { getDate } from "../../utils/date";
import Point from "../../assets/image/point.png";

export default function CardTanamPohon({ item, userLogin }) {
  const history = useHistory();

  const checkParticipant = (dataParticipant = []) => {
    const isExistUser = dataParticipant.find(
      (participant) => participant.user_id === userLogin.user_id
    );
    if (isExistUser) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="card-tp">
        {/* <div className="point">
          <GiTwoCoins className="point-icon"/>
          <h4>{item.reward_point}</h4>
        </div> */}
        <img src={item.image_url} alt="img1" />
        <div className="date-poin row">
          <p className="col-7">
            <i className="fas fa-calendar-alt"></i> {getDate(item.date)}
          </p>
          <p className="col-5 poin-card">
            {/* <GiTwoCoins className="point-icon"/> */}
            <img src={Point} alt="point" className="point-icon-card" />
            {item.reward_point}
          </p>
        </div>
        <p className="location-card">
          <i className="fas fa-map-marked-alt"></i>
          {item.location}
        </p>
        <h1>{item.title}</h1>
        {new Date(item.due_date) < new Date() ? (
          <button className="submit-disable-tp" disabled>sudah berakhir</button>
        ) : checkParticipant(item.Participants) ? (
          <button
            className="btn-unggah-tp"
            onClick={() =>
              history.push(`/formDocumentation/${item.tanam_pohon_id}`, {
                id: item.tanam_pohon_id,
              })
            }
          >
            Unggah Dokumentasi
          </button>
        ) : (
          <button
            className="btn-join-tp"
            onClick={() =>
              history.push(`/formTanamPohon/${item.tanam_pohon_id}`, {
                id: item.tanam_pohon_id,
              })
            }
          >
            BERGABUNG
          </button>
        )}
      </div>
    </>
  );
}
