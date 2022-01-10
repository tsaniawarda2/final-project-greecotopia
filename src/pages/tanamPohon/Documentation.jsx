import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataTanamPohon";
import PictureModal from "../../components/modal/PictureModal";
import { useLocation } from "react-router-dom";
import { API } from "../../config/api";

export default function Documentation() {
  // const { documentation } = useContext(DataContext);
  // console.log(documentation, "doc");
  const [ documentation, setDocumentation ] = useState([]);
  
  const location = useLocation();
  const arrPath = location?.pathname?.split("/")
  const id = Number(arrPath[arrPath.length-1])

  const getDocById = async(id) => {
    const { data : dataDocumentationId } = await API().get(`/documentations/tanam_pohon/${id}`);
    console.log(dataDocumentationId, "api");
    setDocumentation(dataDocumentationId.data);
  } 

  // useEffect(() => {
    getDocById(id);
  // }, []);

  // console.log(dataDoc, "this");

  console.log(documentation, "doc state");

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
    {console.log(documentation, "return")}
    <div className="container-modal">
      <PictureModal showModal={showModal} setShowModal={setShowModal}/>  
      <div className="container-doc" type="button" onClick={openModal}>
      <h1 className="mt-4">{documentation.title}</h1>
        <div className="all-doc">
          { documentation.Documentations.map((data) => (
            console.log(data, "data")
            // <div className="doc">
            //   <div className="doc-img">
            //     <img src={data.image_url} alt="" />
            //   </div>
            //   <p>{getDate(data?.createdAt)} oleh {data.Participant.name}</p>
            //   <h3>{data?.caption}</h3>
            // </div>
            ))
          }
        </div>
      </div>
      </div>
    </>
  );
}
