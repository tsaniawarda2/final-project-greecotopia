import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import img1 from "../../assets/image/bg-hutan.jpg";
import img2 from "../../assets/image/tanam_pohon.png";
import img3 from "../../assets/image/not-found.png";

export default function Gallery() {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        items="3"
        autoplay
        nav={true}
        dots={true}
        loop
      >
        <div className="item">
          <img src={img1} alt="img" />
        </div>
        <div className="item">
          <img src={img2} alt="img" />
        </div>
        <div className="item">
          <img src={img3} alt="img" />
        </div>
      </OwlCarousel>
    </>
  );
}
