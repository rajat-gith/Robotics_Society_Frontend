import axios from "axios";
import {
  FORM_POST_FAIL,
  FORM_POST_REQUEST,
  FORM_POST_SUCCESS,
} from "../constants/FormConstants";

export const addEventUsers = (formData) => async (dispatch) => {
  try {
    dispatch({ type: FORM_POST_REQUEST });
    const { data } = await axios.post(
      "https://robotics-form-backend.onrender.com/api/users",
      formData
    );
    dispatch({
      type: FORM_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FORM_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
