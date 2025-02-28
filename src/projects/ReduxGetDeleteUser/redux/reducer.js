import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED
} from './actions';

const initialState = {
  users: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_USER:
      return {
        ...state,
        loading: true
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user.id !== action.payload)
      };
    case DELETE_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer; 