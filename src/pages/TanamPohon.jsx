import React, { useContext } from "react";
import "../assets/styles/tanamPohon.css"
import { DataContext } from "../context/DataTanamPohon";
import CardTanamPohon from "../components/card/CardTanamPohon";
// import { data } from "../config/dataTanamPohon";

export default function TanamPohon() {
  const { data } = useContext(DataContext);
  
  return (
    <>
      <div className="tanam-pohon container-fluid p-0">
        <section className="header-tp">
          <div className="content-header-tp">
            <h1 className="title-tp">Tanam Pohon</h1>
            <h3 className="subtitle-tp">Hijaukan bumimu! Bagaimana Caranya?</h3>
            <p className="text-header-tp">Greenpeace Indonesia menyediakan ruang bagi kamu yang ingin kembali menguhijaukan bumi kita dengan cara menanam pohon. Ayo berkontribusi untuk membuat bumi menjadi lebih baik!</p>
            <button className="btn-tanam-pohon">MULAI MENANAM POHON</button>
          </div>
        </section>
        <section className="content-tp-2">
          <div className="row row-tp-2">
            <div className="col-lg-8 tp-2-text">
              <h1>Saya mau menanam pohon, apa yang harus saya persiapkan?</h1>
              <ul>
                <li> <i className="fas fa-check-circle"></i> Mendaftar dan mengisi data diri.</li>
                <li> <i className="fas fa-check-circle"></i> Datang ke tempat Tanam Pohon yang kamu pilih.</li>
                <li> <i className="fas fa-check-circle"></i> Dokumentasikan kegiatan untuk bukti mengikuti kegiatan kemudian unggah ke formulir yang di sediakan.</li>
                <br></br>
                <p> Informasi tambahan:<br></br>
                    Tanam Pohon ini merupakan program berkala yang bertujuan untuk menahan laju suhu iklim global.</p>
              </ul>
            </div>
            <div className="col-lg-4 tp-2-img">
              <img className=" img-tp" src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
            </div>
          </div>
        </section>
        <section className="content-tp-3">
          <div className="row text-section-3">
            <div className="col-lg-1"></div>
            <div className="col-lg-8 text-header-tp-3">
              <h1>Mari mulai Tanam Pohon!</h1>
            </div>
            <div className="col-lg-2 btn-header-tp-3">
              <button className="btn-tp-3">Lebih Banyak</button>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="cards-tp">
            {data.map((data, index) => (
              index < 3 ? 
              <CardTanamPohon item={data} key={data.tanam_pohon_id} />
              :
              <div></div>
            ))}
          </div>
        </section>
        <section className="content-tp-4">
          <div className="row text-section-4">
            <div className="col-lg-1"></div>
            <div className="col-lg-8 text-header-tp-4">
              <h1>Dokumentasi Tanam Pohon</h1>
            </div>
            <div className="col-lg-2 btn-header-tp-4">
              <button className="btn-tp-3">Lebih Banyak</button>
            </div>
            <div className="col-lg-1"></div>
          </div>
            <div className="row dokumetasi-content">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 doc-column-1">
                <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
              </div>
              <div className="col-lg-5 doc-column-2">
              <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
              <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
              <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"></img>
              </div>
              <div className="col-lg-1"></div>
            </div>
        </section>
      </div>
    </>
  );
}
