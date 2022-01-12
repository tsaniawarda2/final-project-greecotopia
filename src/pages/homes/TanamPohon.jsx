import React from "react";
import { NavLink } from "react-router-dom";

export default function TanamPohon() {
  return (
    <>
      <section id="tanamPohon">
        <div className="container text-content ">
          <div className="text-center">
            {/* Content */}
            <p class="text-uppercase pb-3" id="first">
              Tanam Pohon
            </p>
            <p id="second">Grow with Greecotopia</p>
            <p class="pb-4" id="third">
              Sebuah kegiatan dengan tujuan mengajak kamu untuk lebih peduli
              pada lingkungan sekitar dimulai dengan hal kecil yaitu menanam
              pohon. Jumlah pohon yang kamu tanam akan menentukan poin yang
              didapatkan. Ciptakan bumi yang hijau dengan menanam pohon!
            </p>
            {/* Button */}
            <NavLink
              to="/tanamPohon"
              className="btn btn-light text-center"
              id="btn-home"
            >
              Mulai Tanam Pohon
            </NavLink>

            {/* Board */}
          </div>
        </div>
      </section>
    </>
  );
}
