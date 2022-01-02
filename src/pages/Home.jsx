import React from "react";

import { Welcome, Gallery, Forum, TanamPohon, Leaderboard } from "./homes";

export default function Home() {
  return (
    <>
      <Welcome />
      {/* <Gallery /> */}
      <Forum />
      <TanamPohon />
      <Leaderboard />
    </>
  );
}
