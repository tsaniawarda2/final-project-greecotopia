import React, { useEffect, useState } from "react";
import PictureModal from "../../components/modal/PictureModal";
import { API } from "../../config/api";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getDate } from "../../utils/date";

export default function Documentation() {
  const params = useParams();
  const [documentation, setDocumentation] = useState({});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await getDocumentationById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDocumentationById = async () => {
    const id = params.id;
    const { data } = await API().get(`/documentations/tanam_pohon/${id}`);
    setDocumentation(data?.data);
  };

  const [showModal, setShowModal] = useState(false);
  const [dataId, setDataId] = useState(0);

  const openModal = (dataId) => {
    setDataId(dataId);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="container-modal">
        <PictureModal
          dataId={dataId}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className="container-doc">
          <h1 className="mt-4">{documentation.title}</h1>
          <div className="all-doc">
            {documentation?.Documentations?.map((data) => (
              <div
                className="doc"
                type="button"
                onClick={() => openModal(data)}
                docId={data?.documentation_id}
              >
                <div className="doc-img">
                  <img src={data.image_url} alt="" />
                </div>
                <p>
                  {getDate(data?.createdAt)} oleh {data.Participant.name}
                </p>
                <h3>{data?.caption}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
