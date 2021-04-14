import { put, takeLatest } from "redux-saga/effects";
import { DATA_ERROR, DATA_LOADING, DATA_SUCCESS } from "../Actions/table";
import axios from "axios";

function* fetchAsync() {
  try {
    const users = yield axios
      .get("http://607668380baf7c0017fa7f26.mockapi.io/data")
      .then(({ data }) => {
        return data;
      });
    yield put({ type: DATA_SUCCESS, data: users });
  } catch (e) {
    yield put({ type: DATA_ERROR, error: e.message });
  }
}

export function* rootSaga() {
  // Allows concurrent fetches of users
  // yield takeEvery(DATA_LOADING, fetchUser);

  // Does not allow concurrent fetches of users
  yield takeLatest(DATA_LOADING, fetchAsync);
}

export default rootSaga;
