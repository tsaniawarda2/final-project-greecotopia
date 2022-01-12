import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { MdClose } from 'react-icons/md';

export default function SyaratKetentuanModal ({ showModal, setShowModal }) {
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
            <div className='modal-wrapper' showModal={showModal}>
              <div className='col-4 modal-img-container'>
                <img className="modal-img" src={require('../../assets/image/rules.png')} alt='camera' />
              </div>
              <div className='modal-content'>
                <h1>Syarat & Ketentuan Tanam Pohon</h1>
                <ol>
                  <li>Kamu harus mendaftarkan diri di formulir yang sudah disediakan. </li>
                  <li>Kamu harus datang ke lokasi dan pada tanggal dan jam yang sudah ditentukan.</li>
                  <li>Kamu harus mendokumentasikan kegiatan berupa foto sebagai bukti bahwa kamu telah berpartisipasi dalam kegiatan tanam pohon tertentu, dan poin akan diupgrade saat kamu sudah menggungah dokumentasi.</li>
                  <li>Dokumentasi harus diunggah dalam periode waktu yang ditentukan, saat kegiatan belum dimulai atau periode sudah terlewat maka tombol submit di formulir dokumentasi tidak berfungsi.</li>
                  <li>Jika tidak mengunggah dokumentasi, maka kamu tidak akan mendapatkan poin.</li>
                  <li>Poin yang didapatkan merupakan hasil perkalian dari jumlah poin yang ditentukan dengan jumlah pohon yang kamu tanam.</li>
                </ol>
              </div>
              <MdClose 
                className='modal-close-btn'
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};