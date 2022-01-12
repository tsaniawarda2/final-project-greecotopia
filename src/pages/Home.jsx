import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DataContext } from "../context/DataContext";

import { Welcome, Gallery, Forum, TanamPohon, Leaderboard } from "./homes";
import "../assets/styles/home.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Welcome />
        <Forum />
        <TanamPohon />
        <Leaderboard />
      </div>
      <Footer />
    </>
  );
}
