import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../config/api";

const ForumContext = createContext();

const DataForum = ({ children }) => {
  const [forums, setForums] = useState([]);
  const [forum, setForum] = useState([]);
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState([]);
  const { pathname } = useLocation();

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);

    await getForums();
    await getIssues();
    await getForumById(newId);
    await getIssueById(newId);
  }, []);

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);
    console.log(pathname, "-----------history berubah");
    console.log(newId, "-----NEWID-");

    await getForumById(newId);
    await getIssueById(newId);
  }, [pathname]);

  // Get All Data Forum
  const getForums = async () => {
    const { data: dataForums } = await API().get("/forums");
    setForums(dataForums.Forums);
  };

  // Get Data Forum by Id
  const getForumById = async (id) => {
    if (id) {
      const { data: dataForumId } = await API().get(`/forums/${id}`);
      setForum(dataForumId.Forums);
      // console.log(dataForumId.Forums, "---------FROUM DATA---");
    }
  };

  // Get All Data Issue
  const getIssues = async () => {
    const { data: dataIssues } = await API().get("/issues");
    setIssues(dataIssues.Issues);
  };

  // Get Data Issue by Id
  const getIssueById = async (id) => {
    if (id) {
      const { data: dataIssueId } = await API().get(`/issues/${id}`);
      setIssue(dataIssueId.DataIssue);
    }
  };
  return (
    <>
      <ForumContext.Provider value={{ forums, forum, issues, issue }}>
        {children}
      </ForumContext.Provider>
    </>
  );
};

export { DataForum, ForumContext };