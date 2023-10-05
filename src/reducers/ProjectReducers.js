import {
  PROJECTS_LIST_FAIL,
  PROJECTS_LIST_REQUEST,
  PROJECTS_LIST_SUCCESS,
} from "../constants/ProjectConstants";

export const projectListReducers = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECTS_LIST_REQUEST:
      return { loading: true, projects: [] };

    case PROJECTS_LIST_SUCCESS:
      return { loading: false, projects: action.payload };

    case PROJECTS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
