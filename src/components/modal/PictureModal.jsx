import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import "../../assets/styles/documentations.css";

export default function PictureModal({ dataId, showModal, setShowModal }) {
  const modalRef = useRef();

  console.log(dataId, "dataId");

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
    }
  };

  return (
    <>
      {showModal ? (
        <div className="background-modal" onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <div className="modal-wrapper-pict" showModal={showModal}>
              <div className="header-modal-pict">
                <div className="close-model-pict">
                  <MdClose
                    className="modal-close-btn"
                    aria-label="Close modal"
                    onClick={() => setShowModal((prev) => !prev)}
                  />
                </div>
              </div>
              <div className="modal-content">
                <div className="modal-profile">
                  <img
                    className="modal-profile-pict"
                    src={dataId?.Participant?.User?.image_url}
                    alt=""
                  />
                  <div className="profile-text">
                    <h1>{dataId?.Participant?.name} </h1>
                    <p>@{dataId?.Participant?.User?.username}</p>
                  </div>
                </div>
                <div className="pict-modal">
                  <img
                    src={dataId?.image_url}
                    alt="documentation"
                  />
                </div>
                <div className="modal-text-bottom">
                  <h1>{dataId?.caption}</h1>
                  <p>{dataId?.messages}</p>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
}
