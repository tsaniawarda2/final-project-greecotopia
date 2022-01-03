import React from "react";

import { Welcome, Gallery, Forum, TanamPohon, Leaderboard } from "./homes";
import "../assets/styles/home.css";
export default function Home() {
  return (
    <>
      <div id="home">
        <Welcome />
        {/* <Gallery /> */}
        <Forum />
        <TanamPohon />
        <Leaderboard />
      </div>
    </>
  );
}
