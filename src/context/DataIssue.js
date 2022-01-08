import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../config/api";
import { issueReducer } from "./ReducerIssue";

const IssueContext = createContext();

const DataIssue = ({ children }) => {
  const [issue, setIssue] = useState([]);

  const getIssues = async () => {
    const response = await API().get("/issues");
    setIssue(response.data.issues);
  };
  useEffect(() => {
    getIssues();
  }, []);

  const [state, dispatch] = useReducer(issueReducer, {
    issues: issue,
  });

  return (
    <>
      <IssueContext.Provider value={{ issue, state, dispatch }}>
        {children}
      </IssueContext.Provider>
    </>
  );
};

export { DataIssue, IssueContext };
