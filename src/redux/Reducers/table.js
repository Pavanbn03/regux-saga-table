import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "../Actions/table";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

export default function reduxSagaReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
      };
    }
    case DATA_SUCCESS: {
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    }
    case DATA_ERROR: {
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
