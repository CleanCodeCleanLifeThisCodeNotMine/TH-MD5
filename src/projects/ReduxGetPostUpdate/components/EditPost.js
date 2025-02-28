import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost, updatePost } from '../redux/actions';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useSelector(state => state.currentPost);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.body);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(id, { title, body: content }))
      .then(() => {
        alert('Post updated successfully!');
        navigate('..');
      });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Content:</label>
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EditPost; 