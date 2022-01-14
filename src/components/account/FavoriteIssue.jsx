import React, { useContext, useState, useEffect } from "react";
import "../../assets/styles/account.css"
import { DataContext } from "../../context/DataContext";
import { API } from "../../config/api";
import NotFound from "../../assets/image/not-found.png"
import { NavLink } from "react-router-dom";
import CardIssue from "../card/CardIssue";

export default function FavoriteIssue() {
  const { userLogin } = useContext(DataContext);
  const [ favIssue, setFavIssue ] = useState();
  
  useEffect(() => {
    getFavIssues();
  }, []);
  
  const getFavIssues = async () => {
    const id = userLogin.user_id;
    console.log(id, "id");
    const { data } = await API().get(`/favoriteissues/user/${id}`);
    setFavIssue(data.favoriteIssues);
    console.log(data.favoriteIssues, "issue dalam get");
  } 

  // const getIssue = async() => {
  //   const { data: dataIssue } = await API().get(`/favoriteissues/user/${id}`);
  //   setFavIssue(data.favoriteIssues); 
  // }

  return (
    <>
      <div className="fav-issues-container">
        <div className="fav-issue-header">
          <div className="fav-header">
            Favorite Issue
          </div>
        </div>
        <div className="card-fav-issue">
          {
            favIssue? 
            // <p>card</p>
            favIssue.map((issue) => {
              <CardIssue item={issue}/>
            })
            :
            <div className="empty-fav">
              <img className="logo-nav" src={NotFound} alt="brand"/>
              <h4>Favorite Issue milikmu masih kosong nih</h4>
              <p>Yuk tambahkan issue yang menjadi favoritemu!</p>
              <NavLink to="/forum">
                <p id="link-fav-issue">Lihat Issues</p>
              </NavLink>
            </div>
          }
          {/* card */}
        </div>
      </div>
    </>
  );
}
