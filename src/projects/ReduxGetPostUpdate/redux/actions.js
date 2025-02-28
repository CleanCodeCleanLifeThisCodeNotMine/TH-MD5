import axios from 'axios';

export const SET_POSTS = 'SET_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(API_URL);
      dispatch({ type: SET_POSTS, payload: response.data });
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
};

export const fetchPost = (id) => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      dispatch({ type: SET_CURRENT_POST, payload: response.data });
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };
};

export const addPost = (postData) => {
  return async dispatch => {
    try {
      await axios.post(API_URL, postData);
      return dispatch(fetchPosts());
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
};

export const updatePost = (id, postData) => {
  return async dispatch => {
    try {
      await axios.put(`${API_URL}/${id}`, postData);
      return dispatch(fetchPosts());
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
}; 