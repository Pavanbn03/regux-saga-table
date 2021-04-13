import { put, takeLatest, delay } from "redux-saga/effects";
import {
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from "../Actions/actions";

import data from "../../db";

function* fetchAsync() {
  yield delay(2000);
  return data;
}

function* fetchUser() {
  try {
    const users = yield fetchAsync();

    yield put({ type: LOAD_USERS_SUCCESS, data: users });
  } catch (e) {
    yield put({ type: LOAD_USERS_ERROR, error: e.message });
  }
}

export function* rootSaga() {
  // Allows concurrent fetches of users
  // yield takeEvery(LOAD_USERS_LOADING, fetchUser);

  // Does not allow concurrent fetches of users
  yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}

export default rootSaga;
