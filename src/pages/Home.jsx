import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Welcome, Gallery, Forum, TanamPohon, Leaderboard } from "./homes";
import "../assets/styles/home.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Welcome />
        {/* <Gallery /> */}
        <Forum />
        <TanamPohon />
        <Leaderboard />
      </div>
      <Footer />
    </>
  );
}
