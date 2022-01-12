import React, { useContext, useState } from "react";
import "../../assets/styles/account.css"
import { AiFillCamera } from "react-icons/ai"
import { DataContext } from "../../context/DataContext";
import { Cloudinary } from "../../config/thirdParty";
import { API } from "../../config/api";
import { ToastContainer, toast } from "react-toastify";

const { REACT_APP_CLOUD_NAME_CLOUDINARY, REACT_APP_UPLOAD_PRESET_CLOUDINARY } = process.env;

export default function EditProfile() {
  const { userLogin } = useContext(DataContext);

  const [ fileImage, setFileImage ] = useState(null);
  const [ fileBg, setFileBg ] = useState(null);
  const [ imageUrl, setImageUrl ] = useState(null);
  const [ bgUrl, setBgUrl ] = useState(null);

  const [ newProfile, setNewProfile ] = useState({
    fullname: "",
    username: "",
    email: "",
    image_url: "",
    background_url: ""
  })

  const onChangeFileImage = (e) => {
    // console.log(e.target)
    const files = e?.target?.files;
    setFileImage(files[0])
  }

  const onChangeFileBg = (e) => {
    const files = e?.target?.files;
    // console.log(files)
    setFileBg(files[0])
  }

  const onHandleSave = async () => {
    try {
      const payloadProfile = {
        fullname: newProfile?.fullname ? newProfile?.fullname : userLogin?.fullname,
        username: newProfile?.username ? newProfile?.username : userLogin?.username,
        email: newProfile?.email ? newProfile?.email : userLogin?.email,
        image_url: userLogin?.image_url,
        background_url: userLogin?.background_url
      }
      
      if(fileImage){
        const payloadImg = new FormData()
        payloadImg.append("file", fileImage)
        payloadImg.append("upload_preset", REACT_APP_UPLOAD_PRESET_CLOUDINARY)
        payloadImg.append("cloud_name", REACT_APP_CLOUD_NAME_CLOUDINARY)
        const { data : dataPict} = await Cloudinary().post("/", payloadImg)
        setImageUrl(dataPict)
        console.log(dataPict?.url, "pict");

        payloadProfile.image_url = dataPict?.url;
      } 
      if(fileBg){
        const payloadBg = new FormData()
          payloadBg.append("file", fileBg)
          payloadBg.append("upload_preset", REACT_APP_UPLOAD_PRESET_CLOUDINARY)
          payloadBg.append("cloud_name", REACT_APP_CLOUD_NAME_CLOUDINARY)

          const { data : dataBg} = await Cloudinary().post("/", payloadBg)
          setBgUrl(dataBg)

          payloadProfile.background_url = dataBg.url;      
      }
        const { data } = await API().put("/profile", payloadProfile)
        setNewProfile(payloadProfile)
        console.log(data, "success");

    } catch (error) {
      toast(error?.response?.data?.error?.message || error?.response?.message || "Internal Server Error", { type: "error"} )
    }
  }

  return (
    <>
      <div className="container-account container-fluid">
        <div className="row account">
          <div className="col-lg-8 profile-right">
            <div className="profile-container">
            <div className="header-profile header-edit-profile">
                <AiFillCamera className="icons-camera-header" onClick={_ => document.getElementById('input-background').click()}/>
                <input type="file" className="custom-file-input icons-camera-header" id="input-background" onChange={e => onChangeFileBg(e)} style={{ opacity: 0 }}/>
              <img src={userLogin?.background_url} alt="" />
            </div>
            <div className="row id-profile">
              <div className="profile-picture edit-profile-pict">
                <div className="camera-profile">
                  <AiFillCamera className="icons-camera-profile" onClick={_ => document.getElementById('input-image').click()}/>
                  <input type="file" className="custom-file-input" id="input-image" onChange={e => onChangeFileImage(e)} style={{ opacity: 0 }}/>
                </div>
                <img src={userLogin?.image_url} alt="" />
              </div>
              <div className="form-edit-profile">
                <form id="form">
                  <div className="form-group">
                    <label for="formGroupExampleInput">Full Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={userLogin?.fullname} onChange={e => setNewProfile({ ...newProfile, fullname: e.target?.value })}/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Username</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={userLogin?.username} onChange={e => setNewProfile({ ...newProfile, username: e.target?.value })} readOnly/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={userLogin?.email} onChange={e => setNewProfile({ ...newProfile, email: e.target?.value })}/>
                  </div>
                  <div className="btn-save-profile">
                    <button type="button"  onClick={() => onHandleSave()}>Simpan</button>
                  </div>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}
