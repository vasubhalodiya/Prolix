// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const AxiosPrep = () => {

//     const [data, setData] = useState([])

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((response)=>{
//             console.log(response)
//             setData(response.data)
//         })
//     }, [])


//   return (
//     <>
//         {data.map((data) => {
//             return (
//                 <div>{data.email}</div>
//             )
//         })}
//     </>
//   )
// }

// export default AxiosPrep


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', body: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${page}`)
            .then((res) => setData(res.data));
    }, [page]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            const updatedData = data.map(post =>
                post.id === editId ? { ...post, title: newPost.title, body: newPost.body } : post
            );
            setData(updatedData);
            setIsEditing(false);
            setEditId(null);
            setNewPost({ title: '', body: '' });
        } else {
            const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
            const customPost = { ...newPost, id: newId };

            axios.post('https://jsonplaceholder.typicode.com/posts', customPost)
                .then(() => {
                    setData([...data, customPost]);
                    setNewPost({ title: '', body: '' });
                });
        }
    };

    const handleEdit = (id) => {
        const selectedPost = data.find((post) => post.id === id);
        setNewPost({ title: selectedPost.title, body: selectedPost.body });
        setIsEditing(true);
        setEditId(id);
    };
    

    const handleDelete = (id) => {
        const filtered = data.filter((post) => post.id !== id);
        setData(filtered);
    };

    return (
        <div style={{ margin: '20px' }}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
                />
                <br />
                <input
                    type="text"
                    placeholder="Body"
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                    style={{ marginBottom: '10px', padding: '8px', width: '200px' }}
                />
                <br />
                <button type="submit" style={{ width: '220px', padding: '8px 12px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px' }}>{isEditing ? 'Update Post' : 'Add Post'}</button>
            </form>

            <h2 style={{ marginTop: '20px' }}>All Posts:</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }} border={1}>
                <thead>
                    <tr>
                        <th style={{ padding: '5px' }}>ID</th>
                        <th style={{ padding: '5px' }}>Title</th>
                        <th style={{ padding: '5px' }}>Body</th>
                        <th style={{ padding: '5px' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td style={{ padding: '5px' }}>{item.id}</td>
                            <td style={{ padding: '5px' }}>{item.title}</td>
                            <td style={{ padding: '5px' }}>{item.body}</td>
                            <td style={{ padding: '5px' }}>
                                <button onClick={() => handleEdit(item.id)}
                                    style={{ padding: '5px 10px', backgroundColor: '#FF9800', color: '#fff', border: 'none', marginRight: '10px', borderRadius: '4px' }}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}
                                    style={{ padding: '5px 10px', backgroundColor: '#F44336', color: '#fff', border: 'none', borderRadius: '4px' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1} style={{ padding: '8px 12px' }}>
                    Prev
                </button>
                <span style={{ margin: '0 10px' }}>Page: {page}</span>
                <button onClick={() => setPage((prev) => prev + 1)} style={{ padding: '8px 12px' }}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
