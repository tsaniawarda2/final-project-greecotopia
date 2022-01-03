import React from "react";

import { energy, forests, plastics, oceans } from "../config/dataForum";
import "../assets/styles/forum.css";
import People from "../assets/image/people.png";

import Card from "../components/forum/Card";
import { NavLink } from "react-router-dom";

export default function Forum() {
  return (
    <>
      <div className="container mb-5">
        {/* Header */}
        <div className="row content-forum">
          <div className="col-md-8 content-header">
            <p className="yvm text-uppercase">Your Voice Matter</p>
            <p className="wdyt">What do you think?</p>
            <p className="decs-header">
              Kami sebagai challenge partner Greenpeace ingin memberi wadah
              untuk masyarakat menyuarakan aspirasinya dengan tujuan mendengar
              dari sudut pandang lain.
            </p>
          </div>
          <div className="col-md-4 img-header">
            <img className="wytd-img" src={People} alt="thinking" />
          </div>
        </div>

        {/* Forest */}
        <div className="row mb-5">
          <div className="col-md-2" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1587102100712-6c7ae6b6da53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="forest"
              />
            </div>
            <div className="text-cat">
              <div className="categories">forests</div>
              <div className="sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <NavLink to="#">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-md-10 d-flex" id="forest">
            {forests.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div>

        {/* Energy */}
        <div className="row mb-5">
          <div className="col-md-2" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1548613053-22087dd8edb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                alt="energy"
              />
            </div>
            <div className="text-cat">
              <div className="categories">Energy</div>
              <div className="sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <NavLink to="#">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-md-10 d-flex" id="energy">
            {energy.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div>

        {/* Plastic */}
        <div className="row mb-5">
          <div className="col-md-2" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1606901302392-ca613ab6abb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="plastic"
              />
            </div>
            <div className="text-cat">
              <div className="categories">Plastics</div>
              <div className="sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <NavLink to="#">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-md-10 d-flex" id="plastic">
            {plastics.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div>

        {/* Ocean */}
        <div className="row mb-5">
          <div className="col-md-2" id="image-cat">
            <div className="picture">
              <img
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="ocean"
              />
            </div>
            <div className="text-cat">
              <div className="categories">Oceans</div>
              <div className="sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </div>
              <NavLink to="#">
                <div className="seeMore">lihat selengkapnya</div>
              </NavLink>
            </div>
          </div>
          <div className="col-md-10 d-flex" id="ocean">
            {oceans.map((data) => (
              <Card item={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
