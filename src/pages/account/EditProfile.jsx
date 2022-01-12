import React, { useContext, useState, useEffect } from "react";
import "../../assets/styles/account.css"
import { AiFillCamera } from "react-icons/ai"
import { DataLogin } from "../../context/dataLogin";
import { Cloudinary } from "../../config/thirdParty";
import { API } from "../../config/api";
import { ToastContainer, toast } from "react-toastify";

const { REACT_APP_CLOUD_NAME_CLOUDINARY, REACT_APP_UPLOAD_PRESET_CLOUDINARY } = process.env;

export default function EditProfile() {
  const { userLogin } = useContext(DataLogin);

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

  // console.log(newProfile, "state");

  const onChangeFileImage = (e) => {
    console.log(e.target)
    const files = e?.target?.files;
    console.log(files)
    setFileImage(files[0])
  }

  const onChangeFileBg = (e) => {
    console.log(e.target)
    const files = e?.target?.files;
    console.log(files)
    setFileBg(files[0])
  }

  const onHandleSave = async () => {
    try {
      if(fileImage){
        // console.log(fileImage, 'fileimage');
        const payloadImg = new FormData()
        payloadImg.append("file", fileImage)
        payloadImg.append("upload_preset", REACT_APP_UPLOAD_PRESET_CLOUDINARY)
        payloadImg.append("cloud_name", REACT_APP_CLOUD_NAME_CLOUDINARY)
        // console.log(payloadImg, "payload img");
        const { data : dataPict} = await Cloudinary().post("/", payloadImg)
        setImageUrl(dataPict)
        console.log(dataPict.url, "pict");

        const payloadProfile = {
          fullname: newProfile.fullname? newProfile.fullname : userLogin.fullname,
          username: newProfile.username? newProfile.username : userLogin.username,
          email: newProfile.email? newProfile.email : userLogin.email,
          image_url: dataPict.url,
          background_url: userLogin.background_url
        }

        console.log(payloadProfile, "payload image");
        const { data } = await API().put("/profile", payloadProfile)
        console.log(data, "success");
        setNewProfile(payloadProfile)  
      } else
      if(fileBg){
        const payloadBg = new FormData()
          payloadBg.append("file", fileBg)
          payloadBg.append("upload_preset", REACT_APP_UPLOAD_PRESET_CLOUDINARY)
          payloadBg.append("cloud_name", REACT_APP_CLOUD_NAME_CLOUDINARY)

          // console.log("masuk bg");
          const { data : dataBg} = await Cloudinary().post("/", payloadBg)
          setBgUrl(dataBg)
          // console.log(dataBg.url, "pict");

          const payloadProfile = {
            fullname: newProfile.fullname? newProfile.fullname : userLogin.fullname,
            username: newProfile.username? newProfile.username : userLogin.username,
            email: newProfile.email? newProfile.email : userLogin.email,
            image_url: userLogin.background_url,
            background_url: dataBg.url
          }

          console.log(payloadProfile, "payload image");
          const { data } = await API().put("/profile", payloadProfile)
          setNewProfile(payloadProfile)
          // setNewProfile({background_url: dataBg.url})
          console.log(data, "success");
      }
      else {
        console.log("masuk");
        console.log(imageUrl, "image url");
        console.log(bgUrl, "bg Url");
        const payloadProfile = {
          fullname: newProfile.fullname? newProfile.fullname : userLogin.fullname,
          username: newProfile.username? newProfile.username : userLogin.username,
          email: newProfile.email? newProfile.email : userLogin.email,
          image_url: userLogin.image_url,
          background_url: userLogin.background_url
          // background_url: newProfile.background_url? newProfile.background_url : userLogin.background_url
        }

        console.log(payloadProfile, "payload profile");
        setNewProfile(payloadProfile)
        const { data } = await API().put("/profile", payloadProfile)
        console.log(data, "success");
      }
    } catch (error) {
      // console.log(error);
      toast(error?.response?.data?.error?.message || error?.response?.message || "Internal Server Error", { type: "error"} )
    }
  }

  return (
    <>
      <div className="container-account container-fluid">
        <div className="row account">
          {/* <div className="col-lg-4 profile-side-left">
            <div className="user-profile row">
              <div className="image-profile col-4">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
              </div>
              <div className="name-poin col-lg-8">
                <h1>Johnathan Doe</h1>
                <p>1000 poin</p>
              </div>
            </div>
            <div className="sidenav-profile">
              <div className="profile-side">
                <p>Profile</p>
              </div>
              <div className="fav-issues-side">
                <p>Favorite Issues</p>
              </div>
              <div className="contact-us-side">
               <p>Contact Us</p>
              </div>
              <div className="logout-side">
                <p>Logout</p>
              </div>
            </div>
          </div> */}
          
          <div className="col-lg-8 profile-right">
            <div className="profile-container">
            <div className="header-profile">
              <div className="camera-header">
                <input type="file" className="custom-file-input" id="inputGroupFile04" onChange={e => onChangeFileBg(e)}/>
                <AiFillCamera className="icons-camera-header"/>
              </div>
              <img src={userLogin.background_url} alt="" />
            </div>
            <div className="row id-profile">
              <div className="profile-picture">
                <div className="camera-profile">
                  <input type="file" className="custom-file-input" id="inputGroupFile04" onChange={e => onChangeFileImage(e)}/>
                  <AiFillCamera className="icons-camera-profile"/>
                </div>
                <img src={userLogin.image_url} alt="" />
              </div>
              <div className="form-edit-profile">
                <form id="form">
                  <div className="form-group">
                    <label for="formGroupExampleInput">Full Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={userLogin.fullname} onChange={e => setNewProfile({ ...newProfile, fullname: e.target?.value })}/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Username</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={userLogin.username} onChange={e => setNewProfile({ ...newProfile, username: e.target?.value })}/>
                  </div>
                  <div className="form-group">
                    <label for="formGroupExampleInput">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder={userLogin.email} onChange={e => setNewProfile({ ...newProfile, email: e.target?.value })}/>
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
