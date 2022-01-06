import { API } from "../config/api";

export const forumReducer = async (state, actions) => {
  switch (actions.type) {
    case "GET_FORUMS":
      return { ...state };
    default:
      return state;
  }
};
