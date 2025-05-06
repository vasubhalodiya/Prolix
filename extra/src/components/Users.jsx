import React, { useState } from 'react';
import {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} from '../redux/userApi';

const Users = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [name, setName] = useState('');

  const handleAddUser = () => {
    if (name.trim() !== '') {
      addUser({ name });
      setName('');
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddUser}>Add</button>

      <h2>User List</h2>
      {users.map((u) => (
        <div key={u.id}>
          <p>{u.name}</p>
          <button onClick={() => updateUser({ id: u.id, name: "Updated Name" })}>
            Update
          </button>
          <button onClick={() => deleteUser(u.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Users;
