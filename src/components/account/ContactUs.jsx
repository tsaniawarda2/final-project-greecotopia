import React, { useContext, useState } from "react";
import "../../assets/styles/account.css"
import { DataLogin } from "../../context/dataLogin";
import { API } from "../../config/api";

export default function ContactUs() {
  const { userLogin } = useContext(DataLogin);
  const [ message, setMessage] = useState({
    context:"",
  })

  const onHandleSubmit = async () => {
    try {
      if (!message) {
        // toast("Masukkan pesan terlebih dahulu ya!", {
        //   type: "error"
        // })
        console.log("pesan kosong");
      } else {
        const payload = {
          ...message,
          user_id: userLogin.user_id
        }

        const {data: dataMessage} = await API().post("/messages", payload);
        setMessage(dataMessage)
        // toast("Pesanmu berhasil terkirim, terimakasih!", {
        //   type: "success"
        // })
        console.log("success", dataMessage);
      }
    } catch (error) {
      console.log(error);
      // toast(error?.response?.data?.error?.message || error?.response?.message || "Internal Server Error", { type: "error"} )
    }
  }

  return (
    <>
      <div className="contact-container">
        <h1>Sampaikan Pesanmu Di sini!</h1>
        <div className="form-group contact-us" id="form">
          <textarea className="form-control textarea-contact" id="exampleFormControlTextarea1" rows="10" placeholder="Tuliskan pesanmu disini..." 
          value={message.context} onChange={e => setMessage({ ...message, context: e.target?.value })}
          ></textarea>
        </div>
        <button className="btn-contact" type="button" onClick={() => {onHandleSubmit()}}>Submit</button>
      </div>
    </>
  );
}
