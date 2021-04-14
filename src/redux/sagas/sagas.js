import { put, takeLatest } from "redux-saga/effects";
import { TABLE_ERROR, TABLE_LOADING, TABLE_SUCCESS } from "../Actions/table";
import axios from "axios";

function* fetchAsync() {
  try {
    const users = yield axios
      .get("http://607668380baf7c0017fa7f26.mockapi.io/data")
      .then(({ data }) => {
        return data;
      });
    yield put({ type: TABLE_SUCCESS, data: users });
  } catch (e) {
    yield put({ type: TABLE_ERROR, error: e.message });
  }
}

export function* rootSaga() {
  // Allows concurrent fetches of users
  // yield takeEvery(TABLE_LOADING, fetchUser);

  // Does not allow concurrent fetches of users
  yield takeLatest(TABLE_LOADING, fetchAsync);
}

export default rootSaga;
