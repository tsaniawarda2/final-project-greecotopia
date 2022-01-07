import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";

import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import { hutan } from "../../config/dataForum";
import "../../assets/styles/issue.css";
import CardIssue from "../../components/card/CardIssue";

import Avatar from "../../assets/image/avatar.png";
import Person from "../../assets/image/person.png";
import { useParams } from "react-router-dom";
import { IssueContext } from "../../context/DataIssue";

export default function Issue() {
  const { issue } = useContext(IssueContext);
  console.log(issue, "---- Issue");
  let { id } = useParams();

  const issueID = issue?.find((data) => data.issue_id === id);
  console.log(issueID, "----- id Issue");

  return (
    <>
      <div className="container mb-5">
        <div id="issue">
          {/* Content */}
          <div className="content-issue">
            <div className="row" id="contentIssue">
              <div className="col-md-4 " id="picsIssue">
                <img
                  src="https://images.unsplash.com/photo-1619369029907-b8d8d5eac859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9yYW5ndXRhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="orangutan"
                  id="imgCI"
                />
              </div>
              <div className="col-md-8" id="descIssue">
                <p className="catCI">Hutan</p>
                <p className="titleCI">Pulihkan Hutan: Pulihkan Harapan</p>
                <p className="dateCI">Selasa, 18 Desember 2021</p>
                <p className="decsCI">
                  10 tahun yang lalu, ratusan merek-merek konsumen terbesar
                  dunia - termasuk Nestle, Mondelez, dan Unilever - berjanji
                  untuk menghentikan penghancuran hutan pada tahun 2020. Namun
                  dengan hanya beberapa bulan yang tersisa, mereka tidak tampak
                  mendekati tujuan ini. Para ilmuwan telah mengatakan, kita
                  hanya punya 10 tahun tersisa untuk menghindari dampak terburuk
                  dari perubahan iklim. Melindungi dan memulihkan hutan adalah
                  salah satu pertahanan terbaik yang kita miliki untuk
                  menghadapi kerusakan iklim.Saatnya kita menentukan batasan.
                  Banyak perusahaan yang berjanji bahwa mereka peduli terhadap
                  lingkungan sambil tetap mengambil untung dari perusakan hutan.
                  Mereka harus bertindak sekarang - selagi masih ada hutan yang
                  tersisa untuk dilindungi. <br /> <br />
                  <b>Langkah-langkah melindungi hutan</b>
                  <ol>
                    <li>Melakukan penghijauan atau reboisasi;</li>
                    <li>Melindungi dan menjaga habitat di hutan;</li>
                    <li>Menerapkan sistem tebang pilih;</li>
                    <li>Menerapkan sistem tebang-tanam;</li>
                    <li>Melakukan penebangan secara konservatif;</li>
                    <li> Mencegah kebakaran hutan;</li>
                    <li>Berdonasi melalui link berikut : bit.ly/3es3qZ8</li>
                    <li>
                      Bantu tanda tangani petisi melalui link berikut :
                      bit.ly/3FQ607r
                    </li>
                  </ol>
                </p>
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
                    <div id="likeCom">
                      <span className="fillUp">
                        <AiOutlineLike />
                        <span className="countCom">0</span>
                      </span>
                      <span className="fillDown">
                        <AiOutlineDislike />
                        <span className="countCom">0</span>
                      </span>
                    </div>
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
                      <div id="likeCom">
                        <span className="fillUp">
                          <AiOutlineLike />
                          <span className="countCom">0</span>
                        </span>
                        <span className="fillDown">
                          <AiOutlineDislike />
                          <span className="countCom">0</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="row" id="cardIssue">
            {hutan.map((data) => (
              <div className="col-md-3">
                <CardIssue item={data} key={data.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
