import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Welcome, Gallery, Forum, TanamPohon, Leaderboard } from "./homes";
import "../assets/styles/home.css";
import checkLogin from "../utils/checkLogin";
export default function Home() {
  return (
    <>
      <Navbar />
      {checkLogin() ? null : <Welcome />}
      <Gallery />
      <Forum />
      <TanamPohon />
      <Leaderboard />

      <Footer />
    </>
  );
}
