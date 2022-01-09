import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { ForumContext } from "../../context/DataForum";
import CardIssue from "../../components/card/CardIssue";
import { hutan } from "../../config/dataForum";

// Icon
import { IoMdSend } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import "../../assets/styles/issue.css";
import Avatar from "../../assets/image/avatar.png";
import Person from "../../assets/image/person.png";

export default function Issue() {
  const { issues } = useContext(ForumContext);

  return (
    <>
      <div className="container mb-5">
        <div id="issue">
          {/* Content Issue*/}
          <div className="content-issue">
            <div className="row" id="contentIssue">
              <div className="col-md-4 " id="picsIssue">
                <img src={issues?.image_url} alt="issueImg" id="imgCI" />
              </div>
              <div className="col-md-8" id="descIssue">
                <p className="catCI">Hutan</p>
                <p className="titleCI">a</p>
                <p className="dateCI">Selasa, 18 Desember 2021</p>
                <div className="decsCI">a</div>
              </div>
            </div>
            <div id="buttonIssue">
              <div id="btn-fav" className="btn btn-warning">
                Tambahkan ke Favorit
              </div>
            </div>
            <div id="comment">
              <p className="firstCom text-uppercase">
                Yuk Sampaikan Pendapatmu disini
              </p>
              <p className="secondCom">1 Comments</p>
              {/* Form Comment */}
              <div className="formCom" id="formCom1">
                {/* Avatar */}
                <img src={Avatar} alt="avatar" id="avaCom" />

                {/* Form */}
                <input
                  className="form-control"
                  type="text"
                  placeholder="Tambahkan komentar disini"
                  aria-label="input comment"
                  id="inputCom"
                />
                {/* Button */}
                <div className="btnSC">
                  <IoMdSend id="btnUser" />
                </div>
              </div>
              {/* Comment Filled */}
              <div className="formCom" id="formCom2">
                {/* Avatar */}
                <img src={Person} alt="avatar" id="avaCom" />

                {/* Form */}
                <div id="inputCom">
                  <div className="infoCom">
                    <div className="upperCom">
                      <span className="nameCom">Roy Andreas</span>
                      <span className="timeCom">2j</span>
                    </div>

                    {/* Menu */}
                    <div className="menuCom">
                      <div className="dropdown">
                        <button
                          type="button"
                          id="dropdownCom"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <HiDotsVertical id="iMenu" />
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownCom"
                          id="dropMenu"
                        >
                          <NavLink
                            className="dropdown-item"
                            id="dropItem"
                            to="#"
                          >
                            Edit
                          </NavLink>
                          <div className="dropdown-divider"></div>
                          <NavLink
                            className="dropdown-item"
                            id="dropItem"
                            to="#"
                          >
                            Hapus
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="decsCom">
                    Langkah di masa depan lebih menjalin kerja bersama
                    masyarakat lokal, pengambilan keputusan dan organisasi
                    penghubung dalam mengatasi kendala yang ada dan
                    terimplementasi dalam beragam konteks dengan sistem
                    pemantauan, evaluasi dan pelaporan yang kuat.
                  </p>
                  <div className="cli">
                    <div className="fillC">
                      <FaRegComment className="iconCom" />
                      <span className="countCom">0</span>
                    </div>
                    <span className="fillUp">
                      <AiOutlineLike />
                      <span className="countCom">0</span>
                    </span>
                  </div>
                </div>
              </div>
              {/* Reply Comment */}
              <div className="repCom d-flex">
                <div className="formCom" id="formCom3">
                  {/* Avatar */}
                  <img src={Person} alt="avatar" id="avaCom" />
                  {/* Form */}
                  <div id="inputCom">
                    <div className="infoCom">
                      <div className="upperCom">
                        <span className="nameCom">Roy Andreas</span>
                        <span className="timeCom">2j</span>
                      </div>

                      {/* Menu */}
                      <div className="menuCom">
                        <div className="dropdown">
                          <button
                            type="button"
                            id="dropdownCom"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <HiDotsVertical id="iMenu" />
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownCom"
                            id="dropMenu"
                          >
                            <NavLink
                              className="dropdown-item"
                              id="dropItem"
                              to="#"
                            >
                              Edit
                            </NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink
                              className="dropdown-item"
                              id="dropItem"
                              to="#"
                            >
                              Hapus
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="decsCom">
                      Langkah di masa depan lebih menjalin kerja bersama
                      masyarakat lokal, pengambilan keputusan dan organisasi
                      penghubung dalam mengatasi kendala yang ada dan
                      terimplementasi dalam beragam konteks dengan sistem
                      pemantauan, evaluasi dan pelaporan yang kuat.
                    </p>
                    <div className="cli">
                      <span className="fillUp">
                        <AiOutlineLike />
                        <span className="countCom">0</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card*/}
          {/* <div className="row" id="cardIssues">
            {issue.map((data, idx) => (
              <div className="col-md-3">
                <CardIssue item={data} key={idx} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
