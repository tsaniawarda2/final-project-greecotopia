import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import "../../assets/styles/formTanamPohon.css";
import { useHistory } from "react-router-dom";

export default function SuccessClaimModal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const history = useHistory();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      history.push("/leaderboard");
    }
  };

  return (
    <>
      {showModal ? (
        <div className="background-modal" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modal-wrapper-success" showModal={showModal}>
              <div className="modal-content-point">
                <div className="sucess-icons">
                  <img
                    src="https://res.cloudinary.com/dxykuppjd/image/upload/v1642071989/Reward_vovoce.png"
                    alt=""
                  />
                </div>
                <div className="modal-message">
                  <h1 className="success-message-h1">Klaim Hadiah Berhasil!</h1>
                  <p className="success-message">
                    Selamat kamu berhasil memenangkan hadiah
                  </p>
                  <p className="success-message">
                    Hadiah berupa tiket perjalanan akan dikirimkan lewat email
                    yang telah kamu daftarkan
                  </p>
                </div>
                <div className="modal-ok-btn">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal((prev) => !prev);
                      history.push("/leaderboard");
                    }}
                  >
                    Kembali ke halaman leaderboard
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}
