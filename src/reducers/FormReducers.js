import {
  FORM_POST_FAIL,
  FORM_POST_REQUEST,
  FORM_POST_SUCCESS,
} from "../constants/FormConstants";

export const formUploadReducers = (state = { eventUsers: [] }, action) => {
  switch (action.type) {
    case FORM_POST_REQUEST:
      return { loading: true, eventUsers: [] };

    case FORM_POST_SUCCESS:
      return { loading: false, eventUsers: action.payload };

    case FORM_POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
