import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_USERS,
  DELETE_USER,
  getUsersSuccess,
  getUsersFailed,
  deleteUserSuccess,
  deleteUserFailed
} from '../redux/actions';

// Worker Sagas
function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailed(error.message));
  }
}

function* deleteUser(action) {
  try {
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/users/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
    alert('User deleted successfully!');
  } catch (error) {
    yield put(deleteUserFailed(error.message));
    alert('Failed to delete user!');
  }
}

// Watcher Saga
function* userSaga() {
  yield takeLatest(GET_USERS, fetchUsers);
  yield takeLatest(DELETE_USER, deleteUser);
}

export default userSaga; 