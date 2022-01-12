import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DataContext } from "../context/DataContext";

export default function Home() {
  const { userLogin, favIssues } = useContext(DataContext);
  console.log(userLogin, "--------USER LOGIN");
  console.log(favIssues, "---------FAV ISSUE");
  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <h1 className="mt-4">Home page</h1>
      </div>
      <Footer />
    </>
  );
}
