import React from 'react'
import { useAddUserMutation, useGetUsersQuery, useUpdateUserMutation, useDeleteUserMutation, } from '../redux/userApi'
import { useState } from 'react'
import './Users.css'

const Users = () => {

    const { data: users, isLoading, isError, isSuccess, error, refetch } = useGetUsersQuery();
    const [user, setUser] = useState({})
    const [updateUser] = useUpdateUserMutation();
    const [deleteUser] = useDeleteUserMutation();
    const [editId, setEditId] = useState(null); // to track edit mode

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const [addUser] = useAddUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editId) {
            await updateUser({ id: editId, ...user });
            setEditId(null);
        } else {
            await addUser(user);
        }
        setUser({});
    };

    const handleEdit = (user) => {
        setUser({ name: user.name, email: user.email });
        setEditId(user.id);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
    };


    return (
        <div className="users-container">
            <h2 className="users-title">User Management</h2>

            {/* Form Section */}
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input-field"
                        value={user.name || ""}
                        onChange={handleChange} />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input-field"
                        value={user.email || ""}
                        onChange={handleChange} />
                    <button className="add-button"> {editId ? 'Update' : 'Add'} </button>

                </div>
            </form>

            {/* Loading / Error Messages */}
            {isLoading && <h3 className="loading-text">Loading...</h3>}
            {isError && <h3 className="error-text">Something went wrong</h3>}

            {/* Table Section */}
            {isSuccess && (
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Users
