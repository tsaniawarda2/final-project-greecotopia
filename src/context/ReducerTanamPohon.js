import { API } from "../config/api";

export const tanamPohonReducer = async (state, action) => {
  switch(action.type) {
    case "GET_TANAM_POHON":
      const { data } = await API().get("/tanampohons");
      return data;
    case "POST_DOCUMENTATION":
      const { data: newDoc } = await API().post("/documentations", state.documentation);
      return newDoc;
    default:
      return state;
  }
}