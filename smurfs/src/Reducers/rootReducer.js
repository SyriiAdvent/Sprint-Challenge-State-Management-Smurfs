import {
  FETCH_DATA,
  POST_DATA,
  DELETE_POST,
  UPDATE_POST
} from "../Actions/rootActions";

const initialState = {
  getComplete: false,
  postComplete: false,
  updateComplete: false,
  deleteComplete: false,
  smurfs: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        smurfs: [payload],
        getComplete: true
      };
    case POST_DATA:
      return {
        ...state,
        smurfs: [payload],
        postComplete: true
      };
    case DELETE_POST:
      return {
        ...state,
        smurfs: [payload],
        deleteComplete: true
      };
    case UPDATE_POST:
      return {
        ...state,
        smurfs: [payload],
        updateComplete: true
      };

    default:
      return state;
  }
};

export default rootReducer;
