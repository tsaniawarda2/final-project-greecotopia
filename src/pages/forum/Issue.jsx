import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { ForumContext } from "../../context/DataForum";
import dataCom from "../../config/comment.json";
import calculateDuration from "../../utils/duration";
// Icon
import { IoMdSend } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import {
  FaComment as CommentFilled,
  FaRegComment as CommentOutLine,
} from "react-icons/fa";
import {
  AiTwotoneLike as Like,
  AiOutlineLike as Dislike,
} from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";

import "../../assets/styles/issue.css";
import Avatar from "react-avatar";
// import Avatar from "../../assets/image/avatar.png";
import Person from "../../assets/image/person.png";

const dummyComment = dataCom[0].comments;

const dataLogin = {
  user_id: 1,
  fullname: "Ananda Raisa",
  email: "anarai@gmail.com",
  username: "anarai123",
  image_url:
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  background_url:
    "https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  points: null,
  role_id: 1,
};

const getDate = (dateStr = "") => {
  if (!dateStr) return "";
  const arrDate = dateStr.split("T");
  console.log(arrDate, "------------WAKTU");
  const date = new Date(
    new Date(dateStr).getTime() - new Date(dateStr).getTimezoneOffset() * 60000
  );
  return `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
};

export default function Issue() {
  // --- Data Issue ---
  const { issue } = useContext(ForumContext);
  console.log(issue.Issues[0], "------");
  const dataIssue = issue.Issues[0];
  // --- Data Comment ---
  const [dataComments, setDataComments] = useState([...dummyComment]);
  const [formComment, setFormComment] = useState([]);
  const [positionComment, setPositionComment] = useState({
    commentID: "",
    repCommentUUID: "",
    depends_on: {
      user_id: "",
      username: "",
      context: "",
    },
  });

  const checkLike = (arrLike = []) => {
    if (arrLike?.find((data) => data?.user_id === dataLogin?.user_id)) {
      return true;
    }
    return false;
  };

  const handleComment = () => {
    console.log(formComment, "-----COMMENT");
    if (formComment) {
      if (positionComment?.commentID) {
        const payload = {
          context: formComment,
          depends_on: {
            uuid: positionComment?.repCommentUUID,
            author: "",
          },
        };
        const commentID = positionComment?.commentID;
        console.log(payload, "-----NEW REPLY COMMENT ID", commentID);
      } else {
        const payload = {
          context: formComment,
        };
        console.log(payload, "------- COMMENT BARU");
      }
    }
  };

  const handleCancelComment = () => {
    setFormComment("");
    setPositionComment({
      commentID: "",
      repCommentUUID: "",
      depends_on: {
        user_id: "",
        username: "",
        context: "",
      },
    });
  };
  console.log(dataComments.length, "----PANJANG DATA");
  const CommentSection = () => {
    return (
      <>
        <div className="formCom" id="formCom1">
          {/* Avatar */}
          <img src={Avatar} alt="HAPUSSSSSSS" id="avaCom" />
          {/* <div id="avaCom">
            {dataLogin?.image_url ? (
              <Avatar src={dataLogin?.image_url} id="avaCom" />
            ) : (
              <Avatar name={dataLogin?.fullname} id="avaCom" />
            )}
          </div> */}

          {/* Form */}
          {/* {positionComment?.depends_on?.username &&
          positionComment?.depends_on?.context ? (
            <input
              className="form-control"
              type="text"
              placeholder="Tambahkan komentar disini"
              aria-label="input comment"
              id="inputCom"
            />
          ) : null} */}
          <div className="formIC">
            {positionComment?.depends_on?.username &&
            positionComment?.depends_on?.context ? (
              <input
                type="text"
                className="form-control"
                id="replyCom"
                value={`Replying to ${positionComment?.depends_on.username}`}
                disabled
              />
            ) : null}
            <input
              className="form-control mainInput"
              placeholder="Tambahkan komentar disini"
              value={formComment}
              id="inputCom"
              onChange={(e) => setFormComment(e?.target?.value)}
            />
          </div>

          {/* Button */}

          <div className="btnCC" onClick={() => handleCancelComment()}>
            <RiCloseFill id="btnCancel" />
          </div>
          <div className="btnSC" onClick={() => handleComment()}>
            <IoMdSend id="btnComment" />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container mb-5">
        <div id="issue">
          {/* Content Issue*/}
          <div className="content-issue">
            <div className="row" id="contentIssue">
              <div className="col-md-4 " id="picsIssue">
                <img
                  src="https://images.unsplash.com/photo-1619369029907-b8d8d5eac859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9yYW5ndXRhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="issueImg"
                  id="imgCI"
                />
              </div>
              <div className="col-md-8" id="descIssue">
                <p className="catCI">a</p>
                <p className="titleCI">a</p>
                <p className="authorCI">a</p>
                <p className="dateCI">a</p>
                <div className="decsCI">a</div>
              </div>
            </div>
            <div id="buttonIssue">
              <div id="btn-fav" className="btn btn-warning">
                Tambahkan ke Favorit
              </div>
            </div>
            <div id="comment">
              <p className="firstCom text-uppercase">
                Yuk Sampaikan Pendapatmu disini
              </p>
              <p className="secondCom">{dataComments.length} Comments</p>

              {/* Form Comment */}
              {!positionComment.commentID && !positionComment.repCommentUUID
                ? CommentSection()
                : null}
              {/* {CommentSection()} */}
              {/* Comment Filled */}
              {dataComments?.map((comment) => {
                return (
                  <div key={comment?.comment_id}>
                    <div className="formCom" id="commentFilled">
                      {/* Avatar */}
                      <img src={Avatar} alt="HAPUSSSSSSS" id="avaCom" />
                      {/* <div id="avaCom">
                        {comment?.User?.image_url ? (
                          <Avatar src={comment?.User?.image_url} id="avaCom" />
                        ) : (
                          <Avatar name={comment?.User?.fullname} id="avaCom" />
                        )}
                      </div> */}

                      {/* Main Comment */}
                      <div className="main-comment">
                        <div id="inputCFilled">
                          <div className="infoCom">
                            <div className="upperCom">
                              <span className="nameCom">
                                {comment?.User?.username}
                              </span>
                              <span className="timeCom">
                                {getDate(comment?.createdAt)}
                              </span>
                            </div>

                            {/* Menu */}
                            <div className="menuCom">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  id="dropdownCom"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <HiDotsVertical id="iMenu" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownCom"
                                  id="dropMenu"
                                >
                                  <NavLink
                                    className="dropdown-item"
                                    id="dropItem"
                                    to="#"
                                  >
                                    Edit
                                  </NavLink>
                                  <div className="dropdown-divider"></div>
                                  <NavLink
                                    className="dropdown-item"
                                    id="dropItem"
                                    to="#"
                                  >
                                    Hapus
                                  </NavLink>
                                </div>
                              </div>
                            </div>
                          </div>

                          <p className="contextCom">{comment?.context}</p>
                          <div className="cli">
                            <div
                              className="fillC"
                              onClick={() =>
                                setPositionComment({
                                  commentID: comment?.comment_id,
                                  repCommentUUID: "",
                                  depends_on: {
                                    user_id: comment?.User?.user_id,
                                    username: comment?.User?.username,
                                    context: comment?.context,
                                  },
                                })
                              }
                            >
                              {comment?.rep_comments?.length !== undefined ? (
                                <CommentFilled className="iconCom" />
                              ) : (
                                <CommentOutLine className="iconCom" />
                              )}
                              <span className="countCom">
                                {comment?.rep_comments?.length !== undefined
                                  ? comment?.rep_comments?.length
                                  : "0"}
                              </span>
                            </div>
                            <span className="fillUp">
                              {checkLike(comment?.likes) ? (
                                <Like />
                              ) : (
                                <Dislike />
                              )}

                              <span className="countCom">
                                {comment?.likes?.length !== undefined
                                  ? comment?.likes?.length
                                  : "0"}
                              </span>
                            </span>
                          </div>
                        </div>

                        {comment?.rep_comments?.map((repComment) => {
                          return (
                            <>
                              <div
                                className="repCom d-flex"
                                key={repComment?.uuid}
                              >
                                {/* Reply Comment */}
                                <div className="formCom" id="formCom3">
                                  {/* Avatar */}
                                  <img
                                    src={Avatar}
                                    alt="HAPUSSSSSSS"
                                    id="avaCom"
                                  />
                                  {/* <div id="avaCom">
                                    {repComment?.author?.image_url ? (
                                      <Avatar
                                        src={repComment?.author?.image_url}
                                        id="avaCom"
                                      />
                                    ) : (
                                      <Avatar
                                        name={repComment?.author?.fullname}
                                        id="avaCom"
                                      />
                                    )}
                                  </div> */}
                                  {/* Form */}
                                  <div id="repCFilled">
                                    <div className="infoCom">
                                      <div className="upperCom">
                                        <span className="nameCom">
                                          {repComment?.author?.username}
                                        </span>
                                        <span className="timeCom">
                                          {getDate(repComment?.createdAt)}{" "}
                                        </span>
                                      </div>

                                      {/* Menu */}
                                      <div className="menuCom">
                                        <div className="dropdown">
                                          <button
                                            type="button"
                                            id="dropdownCom"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                          >
                                            <HiDotsVertical id="iMenu" />
                                          </button>
                                          <div
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownCom"
                                            id="dropMenu"
                                          >
                                            <NavLink
                                              className="dropdown-item"
                                              id="dropItem"
                                              to="#"
                                            >
                                              Edit
                                            </NavLink>
                                            <div className="dropdown-divider"></div>
                                            <NavLink
                                              className="dropdown-item"
                                              id="dropItem"
                                              to="#"
                                            >
                                              Hapus
                                            </NavLink>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Context Comment */}
                                    <p className="contextCom">
                                      {repComment?.context}
                                    </p>
                                    <div className="cli">
                                      <div
                                        className="fillC"
                                        onClick={() =>
                                          setPositionComment({
                                            commentID: comment?.comment_id,
                                            repCommentUUID: "",
                                            depends_on: {
                                              user_id:
                                                repComment?.author?.user_id,
                                              username:
                                                repComment?.author?.username,
                                              context: repComment?.context,
                                            },
                                          })
                                        }
                                      >
                                        {comment?.rep_comments?.length !==
                                        undefined ? (
                                          <CommentFilled className="iconCom" />
                                        ) : (
                                          <CommentOutLine className="iconCom" />
                                        )}
                                        <span className="countCom">
                                          {comment?.rep_comments?.length !==
                                          undefined
                                            ? comment?.rep_comments?.length
                                            : "0"}
                                        </span>
                                      </div>
                                      <span className="fillUp">
                                        {checkLike(repComment?.likes) ? (
                                          <Like />
                                        ) : (
                                          <Dislike />
                                        )}

                                        <span className="countCom">
                                          {comment?.likes?.length !== undefined
                                            ? comment?.likes?.length
                                            : "0"}
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                {positionComment.commentID ===
                                  comment?.comment_id &&
                                positionComment.repCommentUUID ===
                                  repComment?.uuid
                                  ? CommentSection()
                                  : null}
                              </div>
                            </>
                          );
                        })}
                        {positionComment.commentID === comment?.comment_id &&
                        !positionComment.repCommentUUID
                          ? CommentSection()
                          : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card*/}
          {/* <div className="row" id="cardIssues">
            {issue.map((data, idx) => (
              <div className="col-md-3">
                <CardIssue item={data} key={idx} />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
