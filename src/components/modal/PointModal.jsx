import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import "../../assets/styles/formTanamPohon.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function PointModal ({ showModal, setShowModal }) {
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
    }
  };

  return (
    <>
      {showModal ? (
        <div className='background-modal' onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className='modal-wrapper-point' showModal={showModal}>
              <div className='modal-content-point'>
                <div className='point-badge'>
                  <img src="https://res.cloudinary.com/dxykuppjd/image/upload/v1641765095/point-badge_bg9oek.png" alt="" />
                </div>
                <div className='modal-message'>
                  <h1>Selamat!</h1>
                  <p>Kamu berhasil mendapatkan poin!</p>
                  <p>Yuk terus kumpulkan poin lebih banyak lagi!</p>
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