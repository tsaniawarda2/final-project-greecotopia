import React from "react";
import { NavLink } from "react-router-dom";
import Carousel from "../../components/Carousel";

export default function Forum() {
  return (
    <>
      <section className="container" id="forum">
        <div className="row">
          {/* Content */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text-content">
              <p class="text-uppercase pb-3" id="first">
                Your Voice Matters
              </p>
              <p id="second">What do you think?</p>
              <p class="pb-4" id="third">
                Kami sebagai challenge partner Greenpeace ingin memberi wadah
                untuk masyarakat menyuarakan aspirasinya dengan tujuan mendengar
                dari sudut pandang lain.
              </p>
              {/* Button */}
              <NavLink
                to="/forum"
                className="btn btn-light text-center"
                id="btn-home"
              >
                Suarakan Pendapat
              </NavLink>
            </div>
          </div>
          {/* Carousel */}
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
}
