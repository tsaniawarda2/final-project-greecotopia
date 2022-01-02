import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/home.css";

export default function Gallery() {
  return (
    <>
      <Carousel variant="dark" id="carousel">
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://villagerspost.com/wp-content/uploads/2018/05/tongkang-greenpeace.jpg"
            alt="First slide"
          />
          <div className="carousel-caption">
            <h5>#SaveKarimunJawa</h5>
            <p>
              Lindungi Taman Nasional Karimunjawa dari kerusakan akibat
              transportasi tongkang batu bara ilegal yang merusak terumbu
              karang.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.greenpeace.org/static/planet4-indonesia-stateless/2019/02/a93877c2-gp04nby.jpg"
            alt="Second slide"
          />
          <div className="carousel-caption">
            <h5>#HutanTanpaApi</h5>
            <p>
              Kebakaran hutan tidak hanya mengancam kehidupan manusia, tapi juga
              mengancam keberlangsungan hidup satwa liar asli Indonesia yang
              terancam punah.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.greenpeace.org/static/planet4-indonesia-stateless/0a8d31bb-gp1suq0s-1024x683.jpg"
            alt="Third slide"
          />
          <div className="carousel-caption">
            <h5>#PantangPlastik</h5>
            <p>
              Bantu bebaskan bumi dari jeratan plastik mulai dari perubahan gaya
              hidup yang harus dimulai dari sekarang juga.
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}
