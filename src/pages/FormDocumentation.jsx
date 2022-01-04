import React from "react";
import "../assets/styles/formTanamPohon.css"
import { useState } from "react"
import { Cloudinary } from "../config/thirdParty"
import { ToastContainer, toast } from "react-toastify"
const { REACT_APP_CLOUD_NAME_CLOUDINARY, REACT_APP_UPLOAD_PRESET_CLOUDINARY } = process.env

export default function FormDocumentation() {
  const [ form, setForm ] = useState(null)

  const [ documentation, setDocumentation ] = useState({
    image_url:"",
    caption: "",
    messages: "",
    tanam_pohon_id: 0
  })

  const onChangeFile = (e) => {
    console.log(e.target)
    const files = e?.target?.files
    console.log(files)
    setForm(files[0])
  }

  const onHandleUpload = async () => {
    try {
      console.log("masuk");
      const id = 1;
      setDocumentation({tanam_pohon_id: id})
      if (!documentation.caption) {
        toast("Keterangan foto tidak boleh kosong", {
          type: 'error'
        })
        // console.log("Keterangan foto tidak boleh kosong");
      } 
      if (!documentation.messages) {
        toast("Kesan & Pesan tidak boleh kosong", {
          type: 'error'
        })
        // console.log("Kesan & Pesan tidak boleh kosong");
      }
      if (!form) {
        toast("Please input file!", {
          type: "error"
        })
       console.log("please input file");
      } else {
        const payload = new FormData()
        payload.append("file", form)
        payload.append("upload_preset", REACT_APP_UPLOAD_PRESET_CLOUDINARY)
        payload.append("cloud_name", REACT_APP_CLOUD_NAME_CLOUDINARY)
  
        const { data } = await Cloudinary().post("/", payload)
        .then(
          setDocumentation({image_url: data.url})
        )
        console.log(data, "< data");

        // const { data } = await API().post("/documentations", documentation);

        toast("Upload image success", { type: "success" } )
        // console.log("success");
      }
    } catch (error) {
      toast(error?.response?.data?.error?.message || error?.response?.message || "Internal Server Error", { type: "error"} )
      // console.log(error);
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
            <h1>Formulir Dokumentasi Tanam Pohon</h1>
            <form>
              <div class="form-unggah-foto">
                <input type="file" class="custom-file-input" id="inputGroupFile04" onChange={e => onChangeFile(e)}/>
              </div>
              <div className="form-tp-ket-foto">
              <label for="ket-foto">Keterangan Foto</label>
              <textarea class="form-control" id="tp-let-foto" rows="3" onChange={e => setDocumentation({ ...documentation, caption: e.target?.value })}></textarea>
              </div>
              <div class="form-kesan-pesan">
                <label for="tp-kesan-pesan">Kesan dan Pesan</label>
                <textarea class="form-control" id="tp-kesan-pesan" rows="5" onChange={e => setDocumentation({ ...documentation, messages: e.target?.value })}></textarea>
              </div>
              <button type="button" className="btn-submit-doc"  onClick={() => onHandleUpload()}>SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}