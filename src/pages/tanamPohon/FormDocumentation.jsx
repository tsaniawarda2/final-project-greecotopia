import React, { useContext, useEffect, useState } from "react";
import "../../assets/styles/formTanamPohon.css";
import { Cloudinary } from "../../config/thirdParty";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../config/api";
import { DataContext } from "../../context/DataContext";
import SyaratKetentuanModal from "../../components/modal/SyaratKetentuanModal";
import PointModal from "../../components/modal/PointModal";
import { getDate } from "../../utils/date";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
const { REACT_APP_CLOUD_NAME_CLOUDINARY, REACT_APP_UPLOAD_PRESET_CLOUDINARY } =
  process.env;

export default function FormDocumentation() {
  const { userLogin, tanamPohon } = useContext(DataContext);
  const [form, setForm] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [showModalPoint, setShowModalPoint] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [documentation, setDocumentation] = useState({
    image_url: "",
    caption: "",
    messages: "",
    participant_id: 0,
    tanam_pohon_id: 0,
  });

  const onChangeFile = (e) => {
    const files = e?.target?.files;
    setForm(files[0]);
  };

  const onHandleUpload = async () => {
    try {
      if (!documentation.caption) {
        toast("Keterangan foto tidak boleh kosong", {
          type: "error",
          theme: "colored",
        });
      }
      if (!documentation.messages) {
        toast("Kesan & Pesan tidak boleh kosong", {
          type: "error",
          theme: "colored",
        });
      }
      if (!form) {
        toast("Isi file dulu ya!", {
          type: "error",
          theme: "colored",
        });
      } else {
        const payload = new FormData();
        payload.append("file", form);
        payload.append("upload_preset", REACT_APP_UPLOAD_PRESET_CLOUDINARY);
        payload.append("cloud_name", REACT_APP_CLOUD_NAME_CLOUDINARY);

        const { data: dataPict } = await Cloudinary().post("/", payload);

        const payloadDoc = {
          ...documentation,
          image_url: dataPict.url,
          tanam_pohon_id: tanamPohon.tanam_pohon_id,
          participant_id: userLogin.user_id,
        };
        setDocumentation(payloadDoc);

        const { data: dataDoc } = await toast.promise(
          API().post("/documentations", payloadDoc),
          {
            pending: "Unggah dokumentasi sedang dalam proses",
            success: "Berhasil unggah dokumentasi",
            error: "Gagal unggah dokumentasi",
          },
          {
            theme: "colored",
          }
        );
        console.log(dataDoc);

        setShowModalPoint((prev) => !prev);
      }
    } catch (error) {
      toast(
        error?.response?.data?.errors[0] ||
          error?.response?.message ||
          "Internal Server Error",
        { type: "error", theme: "colored" }
      );
    }
  };

  console.log(tanamPohon, "tp");
  const [doc, setDoc] = useState([]);
  const [existUser, setExistUser] = useState(false);
  console.log(doc);

  useEffect(async () => {
    await getDocumentationById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDocumentationById = async () => {
    const id = tanamPohon.tanam_pohon_id;
    const { data: documentationById } = await API().get(
      `/documentations/tanam_pohon/${id}`
    );
    setDoc(documentationById?.data);
    console.log(documentationById?.data?.Documentations, "success get");

    const isExistUser = documentationById?.data?.Documentations.find(
      (documentation) =>
        documentation?.Participant?.user_id === userLogin.user_id
    );
    console.log("masuk");
    if (isExistUser) {
      setExistUser(true);
    } else {
      setExistUser(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-modal">
        <SyaratKetentuanModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <PointModal
          showModal={showModalPoint}
          setShowModal={setShowModalPoint}
        />
        <div className="form-tanam-pohon">
          <div className="info-tp col-lg-6">
            <h1>Langkah yang bagus untuk membantu bumi kita!</h1>
            <p>
              Terima kasih karena kamu sudah mempunyai niat baik untuk
              menghijaukan bumi kita. Yuk baca terlebih dahulu detail informasi
              dibawah ini.
            </p>
            <table>
              <thead>
                <tr>
                  <th colSpan="3">{tanamPohon.title}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tanggal </td>
                  <td className="titik-dua-tp"> : </td>
                  <td>{getDate(tanamPohon.date)}</td>
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
                  <td>{tanamPohon.reward_point} Poin/Pohon</td>
                </tr>
                <tr>
                  <td>Periode unggah foto</td>
                  <td className="titik-dua-tp"> : </td>
                  <td>
                    {getDate(tanamPohon.date)} - {getDate(tanamPohon.due_date)}
                  </td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <p>
              Jangan lupa untuk mengambil gambar saat kegiatan, kemudian unggah
              foto tersebut di bagian unggah dokumentasi pada periode yang
              ditentukan.
            </p>
            <div className="syarat-ketentuan-tp">
              <p type="button" id="sk-btn" onClick={openModal}>
                {" "}
                <i className="fas fa-info-circle"></i> Syarat & Ketentuan
              </p>
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
                <div className="form-unggah-foto">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile04"
                    onChange={(e) => onChangeFile(e)}
                  />
                </div>
                <div className="form-tp-ket-foto">
                  <label for="ket-foto">Keterangan Foto</label>
                  <textarea
                    className="form-control"
                    id="tp-let-foto"
                    rows="3"
                    onChange={(e) =>
                      setDocumentation({
                        ...documentation,
                        caption: e.target?.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="form-kesan-pesan">
                  <label for="tp-kesan-pesan">Kesan dan Pesan</label>
                  <textarea
                    className="form-control"
                    id="tp-kesan-pesan"
                    rows="5"
                    onChange={(e) =>
                      setDocumentation({
                        ...documentation,
                        messages: e.target?.value,
                      })
                    }
                  ></textarea>
                </div>
                {new Date(tanamPohon.date) < new Date() && !existUser ? (
                  <button
                    type="button"
                    className="btn-submit-doc"
                    onClick={() => onHandleUpload()}
                  >
                    SUBMIT
                  </button>
                ) : (
                  <button type="button" className="submit-disable" disabled>
                    SUBMIT
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}
