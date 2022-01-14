import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import "../../assets/styles/gallery.css";

export default function Gallery() {
  const options = {
    responsiveClass: true,
    nav: true,
    dots: true,
    loop: true,
    dotsEach: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <OwlCarousel className="owl-theme" id="bodyOwl" {...options}>
        <div className="item">
          <img
            src="https://www.greenpeace.org/static/planet4-southeastasia-stateless/2019/11/498e029f-gp0stsfjl.jpg"
            alt="imgC1"
            id="pictG"
          />
        </div>
        <div className="item">
          <img
            src="https://www.greenpeace.org/static/planet4-philippines-stateless/2019/05/4e8d1ea9-gp0sttao1.jpg"
            alt="imgC2"
            id="pictG"
          />
        </div>
        <div className="item">
          <img
            src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/02/336875c4-gp0stspk0.jpg"
            alt="imgC3"
            id="pictG"
          />
        </div>
        <div className="item">
          <img
            src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/06/a6ffda5b-gp0sttc7x_web_size_with_credit_line-768x512.jpg"
            alt="imgC4"
            id="pictG"
          />
        </div>
        <div className="item">
          <img
            src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/07/c41b5c64-gp0stqzkc_medium_res.jpg"
            alt="imgC5"
            id="pictG"
          />
        </div>
        <div className="item">
          <img
            src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/03/24aa3ed3-gp0stryje.jpg"
            alt="imgC6"
            id="pictG"
          />
        </div>
      </OwlCarousel>
    </>
  );
}
