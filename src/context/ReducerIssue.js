import { API } from "../config/api";

export const issueReducer = async (state, actions) => {
  switch (actions.type) {
    case "GET_ISSUES":
      return { ...state };
    default:
      return state;
  }
};
