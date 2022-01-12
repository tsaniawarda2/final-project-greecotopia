import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataTanamPohon";
import PictureModal from "../../components/modal/PictureModal";
import { useLocation } from "react-router-dom";
import { API } from "../../config/api";
import { useParams } from "react-router-dom";

export default function Documentation() {
  const params = useParams();
  // console.log(params);
  
  // const { documentation } = useContext(DataContext);
  // console.log(documentation, "doc");
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

  // getDocumentationById();

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
    <div className="container-modal">
      <PictureModal showModal={showModal} setShowModal={setShowModal}/>  
      <div className="container-doc" type="button" onClick={openModal}>
      {/* <h1 className="mt-4">{documentation.title}</h1> */}
        <div className="all-doc">
          {/* {
            JSON.stringify(documentation)
          } */}
          { documentation?.Documentations?.map((data) => (
            // console.log(data, "data")
            <div className="doc">
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
    </>
  );
}
