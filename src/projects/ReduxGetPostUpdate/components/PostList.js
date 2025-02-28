import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../redux/actions';

const PostList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>Posts</h2>
      <button 
        className="btn btn-primary mb-3"
        onClick={() => navigate('./add')}
      >
        Add new Post
      </button>
      <div className="row">
        {posts.map(post => (
          <div key={post.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button 
                  className="btn btn-info"
                  onClick={() => navigate(`./edit/${post.id}`)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList; 