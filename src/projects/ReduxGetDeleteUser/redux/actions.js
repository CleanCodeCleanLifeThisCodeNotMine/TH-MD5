// Action Types
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

// Action Creators
export const getUsers = () => ({
  type: GET_USERS
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

export const getUsersFailed = (error) => ({
  type: GET_USERS_FAILED,
  payload: error
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id
});

export const deleteUserSuccess = (id) => ({
  type: DELETE_USER_SUCCESS,
  payload: id
});

export const deleteUserFailed = (error) => ({
  type: DELETE_USER_FAILED,
  payload: error
}); 