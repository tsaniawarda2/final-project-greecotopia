import React, { useContext } from "react";
import { DataContext } from "../../context/DataTanamPohon";

export default function Documentation() {
  const { documentation } = useContext(DataContext);
  console.log(documentation);

  return (
    <>
      <div className="container-doc">
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
    </>
  );
}
