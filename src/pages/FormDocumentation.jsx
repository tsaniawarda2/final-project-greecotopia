import React from "react";
// import "../assets/styles/FormDocumentation.css"

export default function FormDocumentation() {
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
              <div class="form-unggah-foto">
                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
              </div>
              <div className="form-tp-ket-foto">
              <label for="ket-foto">Keterangan Foto</label>
                <input className="form-control" type="text" placeholder="keterangan foto"/>
              </div>
              <div class="form-kesan-pesan">
                <label for="tp-kesan-pesan">Kesan dan Pesan</label>
                <textarea class="form-control" id="tp-kesan-pesan" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}