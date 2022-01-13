import React, { useContext, useState } from "react";
import "../../assets/styles/formTanamPohon.css";
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../config/api";
import { DataContext } from "../../context/DataContext";
import SyaratKetentuanModal from "../../components/modal/SyaratKetentuanModal";
import SuccessRegistModal from "../../components/modal/SuccessRegistModal";
import { getDate } from "../../utils/date";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FormTanamPohon() {
  const { userLogin, tanamPohon } = useContext(DataContext);
  const [isCheck, setIsCheck] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const [participant, setParticipant] = useState({
    name: "",
    no_hp: "",
    number_of_trees: "",
    tanam_pohon_id: 0,
    user_id: 0,
  });

  const onHandleRegister = async () => {
    try {
      if (!participant.name) {
        toast("Nama tidak boleh kosong", {
          type: "error",
          theme: "colored",
        });
      }
      if (!participant.no_hp) {
        toast("Nomor Handphone tidak boleh kosong", {
          type: "error",
          theme: "colored",
        });
      }
      if (!participant.number_of_trees) {
        toast("Jumlah Pohon tidak boleh kosong", {
          type: "error",
          theme: "colored",
        });
      }
      if (!participant) {
        toast("Isi data terlebih dahulu ya!", {
          type: "error",
          theme: "colored",
        });
      } else {
        const payload = {
          ...participant,
          tanam_pohon_id: tanamPohon.tanam_pohon_id,
          user_id: userLogin.user_id,
        };
        const { data: dataParticipant } = await API().post(
          "/participants",
          payload
        );
        setShowModalSuccess(true);
      }
    } catch (error) {
      toast(
        error?.response?.data?.message ||
          error?.response?.message ||
          "Internal Server Error",
        { type: "error", theme: "colored", }
      );
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
        <SuccessRegistModal
          showModal={showModalSuccess}
          setShowModal={setShowModalSuccess}
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
              <h1>Formulir Pendaftaran Tanam Pohon</h1>
              <form action="">
                <div className="form-tp-nama">
                  <label for="nama">Nama</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={participant.name}
                    onChange={(e) =>
                      setParticipant({ ...participant, name: e.target?.value })
                    }
                  />
                </div>
                <div className="form-tp-no-hp">
                  <label for="noHp">No. Handphone</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    value={participant.no_hp}
                    onChange={(e) =>
                      setParticipant({ ...participant, no_hp: e.target?.value })
                    }
                  />
                </div>
                <div className="form-tp-jumlah-pohon">
                  <label for="jumlahPohon">Jumlah Pohon</label>
                  <input
                    className="form-control"
                    type="number"
                    min="1"
                    max="100"
                    value={participant.number_of_trees}
                    onChange={(e) =>
                      setParticipant({
                        ...participant,
                        number_of_trees: e.target?.value,
                      })
                    }
                  ></input>
                </div>
                <div className="form-tp-lokasi">
                  <label for="lokasi">Lokasi</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder={`${tanamPohon.location}`}
                    readOnly
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="siap-tp"
                    value={isCheck}
                    onChange={(e) => setIsCheck(e?.target?.checked)}
                  />
                  <p className="form-check-label" for="siap-tp">
                    Saya siap menanam pohon
                  </p>
                </div>
                <button
                  disabled={!isCheck}
                  type="button"
                  className={!isCheck ? "submit-disable" : "btn-daftar"}
                  onClick={() => onHandleRegister()}
                >
                  DAFTAR
                </button>
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
