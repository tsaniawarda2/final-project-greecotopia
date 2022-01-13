import React, {  useEffect, useState } from "react";
import PictureModal from "../../components/modal/PictureModal";
import { API } from "../../config/api";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Documentation() {
  const params = useParams();

  const [ documentation, setDocumentation ] = useState({});

  useEffect(async () => {
    console.log("masuk");
    await getDocumentationById();
  }, []);
  
  const getDocumentationById = async () => {
    const id = params.id
    console.log(id, "id get");
    const { data } = await API().get(`/documentations/tanam_pohon/${id}`);
    console.log(data?.data, "docs");
    setDocumentation(data?.data);
  } 

  const getDate = (dateStr = '') => {
    if (!dateStr) return ''
    const date = new Date(new Date(dateStr).getTime() - new Date(dateStr).getTimezoneOffset() * 60000)
    return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`
  }

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
    <Navbar/>
    <div className="container-modal">
      <PictureModal showModal={showModal} setShowModal={setShowModal} />  
      <div className="container-doc">
      <h1 className="mt-4">{documentation.title}</h1>
        <div className="all-doc">
          { documentation?.Documentations?.map((data) => (
            <div className="doc" type="button" onClick={openModal} docId={data?.documentation_id}>
              <div className="doc-img">
                <img src={data.image_url} alt="" />
              </div>
              <p>{getDate(data?.createdAt)} oleh {data.Participant.name}</p>
              <h3>{data?.caption}</h3>
            </div>
            ))
          }
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}
