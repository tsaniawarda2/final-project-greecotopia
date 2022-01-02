import React from "react";
// import "../assets/styles/FormTanamPohon.css"

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
                <td>Date </td>
                <td> : </td>
                <td>20 April 2022</td>
              </tr>
              <tr>
                <td>Time</td>
                <td> : </td>
                <td> 08.00 WIT</td>
              </tr>
              <tr>
                <td>Location </td>
                <td> : </td>
                <td>Taman wisata alam Sorong, kota Sorong, Papua Barat </td>
              </tr>
              <tr>
                <td>Hadiah Poin</td>
                <td> : </td>
                <td>150 poin/pohon</td>
              </tr>
            </tbody>
          </table>
          <p>Jangan lupa untuk mengambil gambar saat kegiatan, kemudian unggah foto tersebut di bagian unggah dokumentasi.</p>
          <table>
            <tbody>
              <tr>
                <td>Periode tanggal unggah foto</td>
                <td> : </td>
                <td>20 April 2022 -23 April 2022</td>
              </tr>
            </tbody>
          </table>
          <div className="syarat-ketentuan-tp">
            <p> <i class="fas fa-info-circle"></i> Syarat & Ketentuan</p>
          </div>
        </div>
        <div className="form-tp col-lg-6">
          <div className="container-form-tp">
            <h1>Formulir Pendaftaran Tanam Pohon</h1>
            <form action="">
              <div className="form-tp-nama">
              <label for="nama">Nama</label>
                <input className="form-control" type="text" placeholder="Nama Kamu"/>
              </div>
              <div className="form-tp-no-hp">
                <label for="noHp">No. Handphone</label>
                <input className="form-control" type="text" placeholder="Nomor Handphone Kamu"/>
              </div>
              <div class="form-tp-jumlah-pohon">
                <label for="jumlahPohon">Jumlah Pohon</label>
                <select class="form-control" id="jumlahPohon">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-tp-lokasi">
                <label for="lokasi">Lokasi</label>
                <input class="form-control" type="text" placeholder="Taman wisata alam Sorong, kota Sorong, Papua Barat" readonly/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="siap-tp"/>
                <label className="form-check-label" for="siap-tp">Saya siap menanam pohon</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}