import React from "react";
import { NavLink } from "react-router-dom";

export default function CardTanamPohon({ item }) {
  return (
    <>
      <div className="card-tp">
        <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
        <p><i className="fas fa-map-marked-alt"></i>{item.location}</p>
        <p><i className="fas fa-calendar-alt"></i> {item.date}</p>
        <h1>{item.title}</h1>
        <NavLink
            to={`/formTanamPohon/${item.tanam_pohon_id}`}
        >
        <button className="btn-join-tp">BERGABUNG</button>
        </NavLink>     
      </div>
    </>
  );
}
