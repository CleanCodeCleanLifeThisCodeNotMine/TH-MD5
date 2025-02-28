import { SET_POSTS, SET_CURRENT_POST } from './actions';

const initialState = {
  posts: [],
  currentPost: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload
      };
    default:
      return state;
  }
};

export default reducer; 