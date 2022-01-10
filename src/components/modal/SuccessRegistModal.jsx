import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
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
            <div className='modal-wrapper-point' showModal={showModal}>
              <div className='close-model-pict'>
                <MdClose 
                  className='modal-close-btn'
                  aria-label='Close modal'
                  onClick={() => {
                    setShowModal(prev => !prev)
                    history.push("/tanampohon")
                  }}/>
              </div>
              <div className='modal-content-point'>
                <div className='point-badge'>
                  <img src="https://res.cloudinary.com/dxykuppjd/image/upload/v1641765095/point-badge_bg9oek.png" alt="" />
                </div>
                <div className='modal-message'>
                  <h1>Selamat!</h1>
                  <p>Kamu berhasil mendapatkan 750 poin!</p>
                  <p>Yuk terus kumpulkan poin lebih banyak lagi!</p>
                </div>
                <div className='modal-ok-btn'>
                  <button type='button' onClick={() => {
                    setShowModal(prev => !prev)
                    history.push("/tanampohon")
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