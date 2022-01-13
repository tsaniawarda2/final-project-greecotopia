import React from "react";
import "../assets/styles/TanamPohon.css";

export default function Slideshow() {
  const arrDocs = ["one", "two", "three", "four"]
  return (
    <>
    <div className="slideshow-container">
      <div className="card-slideshow">
        <div className="card_part card_one">
        </div>
        
        <div className="card_part card_two">
        </div>

        <div className="card_part card_three">
        </div>

        <div className="card_part card_four">
        </div>

      </div>
    </div>
    </>
  );
}
