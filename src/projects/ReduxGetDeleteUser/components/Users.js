import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../redux/actions';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const loading = useSelector(state => state.loading);

  const handleGetUsers = () => {
    dispatch(getUsers());
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div>
      <button 
        className="btn btn-primary mb-3"
        onClick={handleGetUsers}
      >
        Get Users
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users; 