import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API } from "../config/api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Users
  const [users, setUsers] = useState([]);
  const [topFive, setTopFive] = useState([]);
  const [topTen, setTopTen] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const [userLogin, setUserLogin] = useState([]);
  const [rewards, setRewards] = useState([]);

  // Tanam Pohon
  const [dataTP, setDataTP] = useState([]);
  const [tanamPohon, setTanamPohon] = useState([]);
  const [dataDoc, setDataDoc] = useState([]);
  const [documentation, setDocumentation] = useState([]);

  // Forum
  const [forums, setForums] = useState([]);
  const [forum, setForum] = useState([]);
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState([]);
  const [favIssues, setFavIssues] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    getUserLogin();
    getUsers();
    getTopThree();
    getTopFive();
    getTopTen();
    getRewards();
  }, []);

  const getUserLogin = async () => {
    const { data } = await API().get("/profile");
    setUserLogin(data?.dataUser);
  };
  const getUsers = async () => {
    const { data: dataUser } = await API().get("/users");
    setUsers(dataUser?.users);
  };

  const getTopThree = async () => {
    const { data: dataTopThree } = await API().get("/users/topThree");
    setTopThree(dataTopThree?.users);
  };
  const getTopFive = async () => {
    const { data: dataTopFive } = await API().get("/users/topFive");
    setTopFive(dataTopFive?.users);
  };
  const getTopTen = async () => {
    const { data: dataTopTen } = await API().get("/users/topTen");
    setTopTen(dataTopTen?.users);
  };
  const getRewards = async () => {
    const { data: dataRewards } = await API().get("/claim_rewards");
    setRewards(dataRewards?.Rewards);
  };

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);

    await getTanamPohon();
    await getDocumentations();
    await getTanamPohonById(newId);
    await getDocumentationsById(newId);
    await getForums();
    await getIssues();
    await getFavIssues();
    await getForumById(newId);
    await getIssueById(newId);
  }, []);

  useEffect(async () => {
    const arrPath = pathname?.split("/");
    const newId = Number(arrPath[arrPath.length - 1]);

    await getTanamPohonById(newId);
    await getDocumentationsById(newId);
    await getForumById(newId);
    await getIssueById(newId);
  }, [pathname]);

  const getTanamPohon = async () => {
    const { data: dataTanamPohon } = await API().get("/tanampohons");
    setDataTP(dataTanamPohon.TanamPohon);
  };

  const getTanamPohonById = async (id) => {
    if (id) {
      const { data: dataTanamPohonId } = await API().get(`/tanampohons/${id}`);
      setTanamPohon(dataTanamPohonId.TanamPohon);
    }
  };

  const getDocumentations = async () => {
    const { data: dataDocumentations } = await API().get("/documentations");
    setDataDoc(dataDocumentations.data);
  };

  const getDocumentationsById = async (id) => {
    if (id) {
      const { data: dataDocumentationId } = await API().get(
        `/documentations/tanam_pohon/${id}`
      );
      setDocumentation(dataDocumentationId.data);
    }
  };

  // Get All Data Favorite Issue
  const getFavIssues = async () => {
    const { data: dataFavIssues } = await API().get("/favoriteissues");
    setFavIssues(dataFavIssues);
  };

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
      <DataContext.Provider
        value={{
          userLogin,
          users,
          topThree,
          topFive,
          topTen,
          rewards,
          forums,
          forum,
          issues,
          issue,
          favIssues,
          dataTP,
          tanamPohon,
          dataDoc,
          documentation,
        }}
      >
        {children}
      </DataContext.Provider>
    </>
  );
};

export { DataProvider, DataContext };
