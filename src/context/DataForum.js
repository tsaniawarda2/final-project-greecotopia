import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { API } from "../config/api";
import { forumReducer } from "./ReducerForum";

const ForumContext = createContext();

const DataForum = ({ children }) => {
  const [forum, setForum] = useState([]);

  const getForums = async () => {
    const response = await API().get("/forums");
    setForum(response.data.forums);
  };
  useEffect(() => {
    getForums();
  }, []);

  const [state, dispatch] = useReducer(forumReducer, {
    forums: forum,
  });
  return (
    <>
      <ForumContext.Provider value={{ forum, state, dispatch }}>
        {children}
      </ForumContext.Provider>
    </>
  );
};
// export default DataForum;

// export const ForumState = () => {
//   return useContext(ForumContext);
// };

export { DataForum, ForumContext };
