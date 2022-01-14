import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import "../../assets/styles/formTanamPohon.css"
import { useHistory } from 'react-router-dom';

export default function SuccessRegistModal ({ showModal, setShowModal }) {
  const modalRef = useRef();
  const history = useHistory();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      history.push("/tanampohon")
    }
  };

  return (
    <>
      {showModal ? (
        <div className='background-modal' onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className='modal-wrapper-success' showModal={showModal}>
              <div className='modal-content-point'>
                <div className='sucess-icons'>
                  <img src="https://res.cloudinary.com/dxykuppjd/image/upload/v1641773825/success_zls9ts.png" alt="" />
                </div>
                <div className='modal-message'>
                  <h1 className='success-message-h1'>Registrasi Berhasil!</h1>
                  <p className='success-message'>Kamu berhasil mendaftarkan diri dikegiatan Tanam Pohon ini.</p>
                  <p className='success-message'>Silakan ditunggu waktu pelaksanaan kegiatannya.</p>
                  <p className='success-message'>Jangan lupa hadir ya! Terimakasih!</p>
                </div>
                <div className='modal-ok-btn'>
                  <button type='button' onClick={() => {
                    setShowModal(prev => !prev)
                    history.push("/")
                    window.location.reload()
                  }}>
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};