import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';
import "../../assets/styles/documentations.css"

export default function PictureModal ({ showModal, setShowModal }) {
  const modalRef = useRef();

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
            <div className='modal-wrapper-pict' showModal={showModal}>
              <div className='header-modal-pict'>
                <div className='close-model-pict'>
                  <MdClose 
                    className='modal-close-btn'
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                  />
                </div>
              </div>
              <div className='modal-content'>
                <div className='modal-profile'>
                  <img className='modal-profile-pict' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1985&q=80" alt="" />
                  <div className='profile-text'>
                    <h1>Devi Ayu </h1>
                    <p>@username</p>
                  </div>
                </div>
                <div className='pict-modal'>
                  <img src="https://images.unsplash.com/photo-1558022103-603c34ab10ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
                </div>
                <div className='modal-text-bottom'>
                  <h1>Title</h1>
                  <p>Message</p>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};