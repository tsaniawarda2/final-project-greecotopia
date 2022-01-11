import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

import calculateDuration from "../../utils/duration";
import "../../assets/styles/issue.css";
import { API } from "../../config/api";
import { useLocation } from "react-router-dom";

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

  // console.log(arrDate, "------------WAKTU");
  // const date = new Date(
  //   new Date(dateStr).getTime() - new Date(dateStr).getTimezoneOffset() * 60000
  // );
  const date = new Date(dateStr);
  return `${date.getUTCDate()}/${
    date.getUTCMonth() + 1
  }/${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
};

export default function Issue() {
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
  const [likeComment, setlikeComment] = useState(false);
  const [positionLikeID, setPositionLikeID] = useState({
    likeID: "",
    repLikeUUID: "",
    depends_on: {
      user_id: "",
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
    if (arrLike?.find((data) => data?.user_id === dataLogin?.user_id)) {
      return true;
    }
    return false;
  };

  const handleLike = () => {
    setlikeComment(!likeComment);

    if (positionLikeID?.likeID) {
      const payload = {
        rep_comments_uuid: "",
        likes: likeComment,
        user_id: dataLogin?.user_id,
      };
      const commentID = positionLikeID?.likeID;
      console.log(payload, "====like comment");
      console.log(commentID, "------ id like comment");
    }
  };

  const handleComment = async () => {
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
        // await API().post(`comments/${commentID}`, payload);
        // await getCommentsByIssueId(issueID);
        console.log(commentID, "----id Comment");
        console.log(payload, "------COMMENT");
      } else {
        const payload = {
          context: formComment,
          user_id: dataLogin?.user_id,
          issue_id: dataComments?.issue_id,
        };
        console.log(payload, "------COOMMENT");

        // await API().post(`comments/issue/${issueID}`, payload);
        // await getCommentsByIssueId(issueID);
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

          <div id="avaCom">
            {dataLogin?.image_url ? (
              <Avatar src={dataLogin?.image_url} id="avaCom" />
            ) : (
              <Avatar name={dataLogin?.fullname} id="avaCom" />
            )}
          </div>

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
                <p className="authorCI">{dataComments?.author_name}</p>
                <p className="dateCI">{getDate(dataComments?.createdAt)}</p>
                <div className="decsCI">{dataComments?.description}</div>
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
                          <Avatar name={comment?.User?.fullname} id="avaCom" />
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
                            <span
                              className="fillUp"
                              onClick={() => {
                                setPositionLikeID({
                                  likeID: comment?.comment_id,
                                  repLikeUUID: "",
                                  depends_on: {
                                    user_id: comment?.User?.user_id,
                                  },
                                });

                                handleLike();
                              }}
                            >
                              {likeComment === true ? <Like /> : <Dislike />}

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
                                        name={repComment?.author?.fullname}
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
                                        {/* {checkLike(repComment?.likes) ? (
                                          <Like
                                            value={likeComment}
                                            onClick={(e) =>
                                              setlikeComment(e?.target?.value)
                                            }
                                          />
                                        ) : (
                                          <Dislike />
                                        )} */}

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
        </div>
      </div>
    </>
  );
}
