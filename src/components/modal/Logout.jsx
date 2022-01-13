import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useHistory } from 'react-router-dom';

export default function Logout({ showModal, setShowModal }) {
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
      history.push("/home")
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
                  
                </div>
                <div className='modal-ok-btn'>
                  <button type='button' onClick={() => {
                    setShowModal(prev => !prev)
                    history.push("/home")
                  }}>
                    Logout
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