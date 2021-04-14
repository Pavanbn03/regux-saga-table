import { TABLE_ERROR, TABLE_LOADING, TABLE_SUCCESS } from "../Actions/table";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

export default function reduxSagaReducer(state = initialState, action) {
  switch (action.type) {
    case TABLE_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case TABLE_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case TABLE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
