import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Board from "../../components/Board";
import { DataContext } from "../../context/DataContext";

export default function Leaderboard() {
  const { topFive: data } = useContext(DataContext);
  console.log(data, "------TOP5");
  return (
    <>
      <section id="board-home">
        <div className="container content-home">
          <div className="text-center">
            <p class="text-uppercase pb-3" id="firstHome">
              Leaderboard
            </p>
            <p id="secondHome">Top 5 Greecotopia</p>
            <p class="pb-4" id="thirdHome">
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

            <Board item={data} />
          </div>
        </div>
      </section>
    </>
  );
}
