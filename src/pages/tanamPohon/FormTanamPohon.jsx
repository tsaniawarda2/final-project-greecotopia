import React, { useContext, useState } from "react";
import "../../assets/styles/formTanamPohon.css"
import { useParams } from "react-router-dom";
import { data } from "../../config/dataTanamPohon";
import { ToastContainer, toast } from "react-toastify"
import { API } from "../../config/api";
// import { DataContext } from "../../context/DataTanamPohon";

export default function FormTanamPohon() {
  //  const { tanamPohon } = useContext(DataContext);

  let { id } = useParams();
  //find by id
  const foundTanamPohon = data?.filter((data) => Number(data?.tanam_pohon_id) === Number(id));
  const tanamPohon = foundTanamPohon[0]

  const [ participant, setParticipant ] = useState({
    name:"",
    no_hp: "",
    number_of_trees: "",
    tanam_pohon_id: 0
  })

  const onHandleRegister = async () => {
    try {
      setParticipant({tanam_pohon_id: id})
      if (!participant.name) {
        toast("Nama tidak boleh kosong", {
          type: 'error'
        })
      } 
      if (!participant.no_hp) {
        toast("Nomor Handphone tidak boleh kosong", {
          type: 'error'
        })
      }
      if (!participant.number_of_trees) {
        toast("Jumlah Pohon tidak boleh kosong", {
          type: 'error'
        })
      }
      if (!participant) {
        toast("Please input file!", {
          type: "error"
        })
      } else {
        console.log("masuk");
        const { data: dataParticipant } = await API().post("/participants", participant);
        console.log(dataParticipant);

        toast("Upload image success", { type: "success" } )
      }
    } catch (error) {
      toast(error?.response?.data?.error?.message || error?.response?.message || "Internal Server Error", { type: "error"} )
    }
  }

  return (
    <>
      <div className="form-tanam-pohon row">
        <div className="info-tp col-lg-6">
          <h1>Langkah yang bagus untuk membantu bumi kita!</h1>
          <p>Terima kasih karena kamu sudah mempunyai niat baik untuk menghijaukan bumi kita. Yuk baca terlebih dahulu detail informasi dibawah ini.</p>
          <table>
            <thead>
              <tr>
                <th colspan="3">{tanamPohon.title}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tanggal </td>
                <td className="titik-dua-tp"> : </td>
                <td>{tanamPohon.date}</td>
              </tr>
              <tr>
                <td>Pukul</td>
                <td className="titik-dua-tp"> : </td>
                <td>{tanamPohon.time}</td>
              </tr>
              <tr>
                <td>Lokasi </td>
                <td className="titik-dua-tp"> : </td>
                <td>{tanamPohon.location}</td>
              </tr>
              <tr>
                <td>Hadiah Poin</td>
                <td className="titik-dua-tp"> : </td>
                <td>{tanamPohon.reward_point}</td>
              </tr>
              <tr>
                <td>Periode unggah foto</td>
                <td className="titik-dua-tp"> : </td>
                <td>{tanamPohon.date} - {tanamPohon.due_date}</td>
              </tr>
            </tbody>
          </table>
          <br></br>
          <p>Jangan lupa untuk mengambil gambar saat kegiatan, kemudian unggah foto tersebut di bagian unggah dokumentasi pada periode yang ditentukan.</p>
          <div className="syarat-ketentuan-tp">
            <p> <i className="fas fa-info-circle"></i> Syarat & Ketentuan</p>
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
              <div className="form-tp-jumlah-pohon">
                <label for="jumlahPohon">Jumlah Pohon</label>
                <input className="form-control" type="number" min="1" max="100"></input>
              </div>
              <div className="form-tp-lokasi">
                <label for="lokasi">Lokasi</label>
                <input className="form-control" type="text" placeholder={`${tanamPohon.location}`} readonly/>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="siap-tp"/>
                <p className="form-check-label" for="siap-tp">Saya siap menanam pohon</p>
              </div>
              <button type="submit" className="btn-daftar" onClick={() => onHandleRegister()}>DAFTAR</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}