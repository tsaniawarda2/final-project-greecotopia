import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataTanamPohon";
import PictureModal from "../../components/modal/PictureModal";

export default function Documentation() {
  const { documentation } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <div className="container-modal">
      <PictureModal showModal={showModal} setShowModal={setShowModal}/>  
      <div className="container-doc" type="button" onClick={openModal}>
      <h1 className="mt-4">{documentation.title}</h1>
        <div className="all-doc">
          { documentation.Documentations.map((data) => (
            <div className="doc">
              <div className="doc-img">
                <img src={data.image_url} alt="" />
              </div>
              <p>{data?.createdAt} oleh {data?.Participant?.name}</p>
              <h3>{data?.caption}</h3>
            </div>
            ))
          }
        </div>
      </div>
      </div>
    </>
  );
}
