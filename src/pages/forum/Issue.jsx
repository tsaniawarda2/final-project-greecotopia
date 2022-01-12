// Import Module React
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Avatar from "react-avatar";

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

// Import Module Local
import { API } from "../../config/api";
import { DataContext } from "../../context/DataContext";

import { getDate } from "../../utils/date";
import calculateDuration from "../../utils/duration";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../assets/styles/issue.css";
import checkLogin from "../../utils/checkLogin";
import { toast, ToastContainer } from "react-toastify";

export default function Issue() {
  const { userLogin } = useContext(DataContext);

  // --- Data Comment ---
  const [dataComments, setDataComments] = useState([]);
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
  const [issueID, setIssueID] = useState(0);

  const { pathname } = useLocation();

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);

    await getCommentsByIssueId(newId);
    setIssueID(newId);
  }, []);

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);

    await getCommentsByIssueId(newId);
    setIssueID(newId);
  }, [pathname]);

  const getCommentsByIssueId = async (id) => {
    if (id) {
      const { data: dataCommentId } = await API().get(`/comments/issue/${id}`);
      setDataComments(dataCommentId.Issues);
    }
  };

  // Data Comment
  const Comments = dataComments.Comments;
  // Data Forum
  const Forum = dataComments.Forum;

  // --- Check Like ----
  const checkLike = (arrLike = []) => {
    if (arrLike?.find((data) => data?.user_id === userLogin?.user_id)) {
      return true;
    }
    return false;
  };

  const handleLike = async (comment, repComment) => {
    const payload = {
      rep_comments_uuid: "",
      likes: false,
    };
    if (repComment) {
      payload.rep_comments_uuid = repComment?.uuid;
      payload.likes = !checkLike(repComment?.likes);
    } else {
      payload.likes = !checkLike(comment?.likes);
    }
    const commentID = comment?.comment_id;
    try {
      await API().patch(`/comments/${commentID}`);
      await getCommentsByIssueId(issueID);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (comment) => {
    const userLoginID = userLogin?.user_id;
    const commentUserID = comment?.user_id;
    const commentID = comment?.comment_id;

    if (userLoginID !== commentUserID) {
      toast.error("Kamu tidak bisa menghapus komentar milik orang lain", {
        theme: "colored",
      });
    } else {
      try {
        await API().delete(`/comments/${commentID}`);
        await getCommentsByIssueId(issueID);
      } catch (error) {
        console.log(error);
      }
    }

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

  const handleComment = async () => {
    if (formComment) {
      if (localStorage.getItem("token")) {
        if (positionComment?.commentID) {
          const payload = {
            context: formComment,
            depends_on: {
              uuid: positionComment?.repCommentUUID,
              author: "",
            },
          };
          const commentID = positionComment?.commentID;
          await API().post(`comments/${commentID}`, payload);
          await getCommentsByIssueId(issueID);
          setFormComment("");
        } else {
          const payload = {
            context: formComment,
            user_id: userLogin?.user_id,
            issue_id: dataComments?.issue_id,
          };

          await API().post(`comments/issue/${issueID}`, payload);
          await getCommentsByIssueId(issueID);
          setFormComment("");
        }
      } else {
        toast.warning("Kamu harus login terlebih dahulu", {
          theme: "colored",
        });
        console.log("Belum LOgin");
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
  const CommentSection = () => {
    return (
      <>
        <div className="formCom" id="formCom1">
          {/* Avatar */}
          {checkLogin() ? (
            <>
              <div id="avaCom">
                {userLogin?.image_url ? (
                  <Avatar src={userLogin?.image_url} id="avaCom" />
                ) : (
                  <Avatar name={userLogin?.username} id="avaCom" />
                )}
              </div>
            </>
          ) : (
            <>
              <div id="avaCom">
                <Avatar
                  src="https://res.cloudinary.com/dxykuppjd/image/upload/v1641983525/Forums/avatar_n2tynt.png"
                  id="avaCom"
                />
              </div>
            </>
          )}

          {/* Form */}
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
      <Navbar />
      <div className="container mb-5">
        <div id="issue">
          {/* Content Issue*/}
          <div className="content-issue">
            <div className="row" id="contentIssue">
              <div className="col-md-4 " id="picsIssue">
                <img src={dataComments?.image_url} alt="issueImg" id="imgCI" />
              </div>
              <div className="col-md-8" id="descIssue">
                <p className="catCI">{Forum?.title}</p>
                <p className="titleCI">{dataComments?.title}</p>
                <p className="infoCI">
                  {dataComments?.author_name} -{" "}
                  {getDate(dataComments?.updatedAt, true)}
                </p>
                <div
                  className="decsCI"
                  dangerouslySetInnerHTML={{
                    __html: `${dataComments?.description}`,
                  }}
                ></div>
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
              <p className="secondCom">{Comments?.length} Comments</p>

              {/* Form Comment */}
              {!positionComment.commentID && !positionComment.repCommentUUID
                ? CommentSection()
                : null}

              {/* Comment Filled */}
              {Comments?.map((comment) => {
                return (
                  <div key={comment?.comment_id}>
                    <div className="formCom" id="commentFilled">
                      {/* Avatar */}
                      <div id="avaCom">
                        {comment?.User?.image_url ? (
                          <Avatar src={comment?.User?.image_url} id="avaCom" />
                        ) : (
                          <Avatar name={comment?.User?.username} id="avaCom" />
                        )}
                      </div>

                      {/* Main Comment */}
                      <div className="main-comment">
                        <div id="inputCFilled">
                          <div className="infoCom">
                            <div className="upperCom">
                              <span className="nameCom">
                                {comment?.User?.username}
                              </span>
                              <span className="timeCom">
                                {calculateDuration(comment?.createdAt)}
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
                                  <div
                                    className="dropdown-item"
                                    id="dropItem"
                                    onClick={() => handleDelete(comment)}
                                  >
                                    Hapus
                                  </div>
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
                            <span
                              className="fillUp"
                              onClick={() => {
                                handleLike(comment);
                              }}
                            >
                              {checkLike(comment.likes) ? (
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
                                  <div id="avaCom">
                                    {repComment?.author?.image_url ? (
                                      <Avatar
                                        src={repComment?.author?.image_url}
                                        id="avaCom"
                                      />
                                    ) : (
                                      <Avatar
                                        name={repComment?.author?.username}
                                        id="avaCom"
                                      />
                                    )}
                                  </div>
                                  {/* Form */}
                                  <div id="repCFilled">
                                    <div className="infoCom">
                                      <div className="upperCom">
                                        <span className="nameCom">
                                          {repComment?.author?.username}
                                        </span>
                                        <span className="timeCom">
                                          {calculateDuration(
                                            repComment?.createdAt
                                          )}{" "}
                                        </span>
                                      </div>
                                    </div>

                                    {/* Context Comment */}
                                    <p className="contextCom">
                                      {repComment?.context}
                                    </p>
                                    <div className="cli">
                                      <span
                                        className="fillUp"
                                        onClick={() =>
                                          handleLike(comment, repComment)
                                        }
                                      >
                                        {checkLike(repComment?.likes) ? (
                                          <Like />
                                        ) : (
                                          <Dislike />
                                        )}

                                        <span className="countCom">
                                          {repComment?.likes?.length !==
                                          undefined
                                            ? repComment?.likes?.length
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
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}
