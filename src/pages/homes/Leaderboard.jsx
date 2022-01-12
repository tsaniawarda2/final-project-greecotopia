import React from "react";
import { NavLink } from "react-router-dom";
import Board from "../../components/Board";

export default function Leaderboard() {
  return (
    <>
      <section id="board-home">
        <div className="container text-content">
          <div className="text-center">
            <p class="text-uppercase pb-3" id="first">
              Leaderboard
            </p>
            <p id="second">Top 5 Greecotopia</p>
            <p class="pb-4" id="third">
              Jadilah 3 terbesar dengan mengumpulkan poin sebanyak-banyaknya
              dari kegiatan tanam pohon yang telah kamu ikuti! Hadiah yang akan
              kamu dapatkan berupa tiket perjalanan dari Greenpeace loh. Ayo
              buruan kumpulkan poinnya!
            </p>
            {/* Button */}
            <NavLink
              to="/leaderboard"
              className="btn btn-light text-center"
              id="btn-home"
            >
              Lihat Peringkatku
            </NavLink>

            <Board />
          </div>
        </div>
      </section>
    </>
  );
}