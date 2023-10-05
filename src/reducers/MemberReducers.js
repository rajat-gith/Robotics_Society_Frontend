import {
  MEMBERS_LIST_FAIL,
  MEMBERS_LIST_REQUEST,
  MEMBERS_LIST_SUCCESS,
} from "../constants/MemberConstants";

export const memeberListReducers = (state = { members: [] }, action) => {
  switch (action.type) {
    case MEMBERS_LIST_REQUEST:
      return { loading: true, members: [] };

    case MEMBERS_LIST_SUCCESS:
      return { loading: false, members: action.payload };

    case MEMBERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
