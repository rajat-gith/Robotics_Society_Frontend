import axios from "axios";
import {
  PROJECTS_LIST_FAIL,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
} from "../constants/ProjectConstants";

export const listProjects = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECTS_LIST_REQUEST });
    const { data } = await axios.get(
      `https://devroboticssociety.pythonanywhere.com/api/projects`
    );

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    dispatch({
      type: PROJECTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECTS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
