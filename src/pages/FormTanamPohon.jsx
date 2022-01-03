import React from "react";
import "../assets/styles/formTanamPohon.css"

export default function FormTanamPohon() {
  return (
    <>
      <div className="form-tanam-pohon row">
        <div className="info-tp col-lg-6">
          <h1>Langkah yang bagus untuk membantu bumi kita!</h1>
          <p>Terima kasih karena kamu sudah mempunyai niat baik untuk menghijaukan bumi kita. Yuk baca terlebih dahulu detail informasi dibawah ini.</p>
          <table>
            <thead>
              <tr>
                <th colspan="3">Tanam pohon untuk papua yang lebih hijau</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tanggal </td>
                <td className="titik-dua-tp"> : </td>
                <td>20 April 2022</td>
              </tr>
              <tr>
                <td>Pukul</td>
                <td className="titik-dua-tp"> : </td>
                <td> 08.00 WIT</td>
              </tr>
              <tr>
                <td>Lokasi </td>
                <td className="titik-dua-tp"> : </td>
                <td>Taman wisata alam Sorong, kota Sorong, Papua Barat </td>
              </tr>
              <tr>
                <td>Hadiah Poin</td>
                <td className="titik-dua-tp"> : </td>
                <td>150 Poin/Pohon</td>
              </tr>
              <tr>
                <td>Periode unggah foto</td>
                <td className="titik-dua-tp"> : </td>
                <td>20 April 2022 -23 April 2022</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <p>Jangan lupa untuk mengambil gambar saat kegiatan, kemudian unggah foto tersebut di bagian unggah dokumentasi pada periode yang ditentukan.</p>
          <div className="syarat-ketentuan-tp">
            <p> <i class="fas fa-info-circle"></i> Syarat & Ketentuan</p>
          </div>
          <div className="tp-info row">
            <div className="col-4">
              <p>Trees Planted</p>
              <h6 className="tp-info-1">1.000</h6>
            </div>
            <div className="col-4">
              <p>Hectares Restored</p>
              <h6 className="tp-info-2">1.5</h6>
            </div>
            <div className="col-4">
              <p>Since</p>
              <h6 className="tp-info-3">2021</h6>
            </div>
          </div>
        </div>
        <div className="form-tp col-lg-6">
          <div className="container-form-tp">
            <h1>Formulir Pendaftaran Tanam Pohon</h1>
            <form action="">
              <div className="form-tp-nama">
              <label for="nama">Nama</label>
                <input className="form-control" type="text" placeholder=""/>
              </div>
              <div className="form-tp-no-hp">
                <label for="noHp">No. Handphone</label>
                <input className="form-control" type="text" placeholder=""/>
              </div>
              <div class="form-tp-jumlah-pohon">
                <label for="jumlahPohon">Jumlah Pohon</label>
                <input class="form-control" type="number" min="1" max="100"></input>
              </div>
              <div className="form-tp-lokasi">
                <label for="lokasi">Lokasi</label>
                <input class="form-control" type="text" placeholder="Taman wisata alam Sorong, kota Sorong, Papua Barat" readonly/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="siap-tp"/>
                <p className="form-check-label" for="siap-tp">Saya siap menanam pohon</p>
              </div>
              <button type="submit" className="btn-daftar">DAFTAR</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}