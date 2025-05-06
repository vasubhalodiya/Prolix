import React from 'react'
import { useGetUsersQuery } from '../redux/userApi'

const Users = () => {

    const { data, isLoading, isError, isSuccess, error } = useGetUsersQuery()

  return (
    <>
        {isLoading && <h3>Loading...</h3>}
        {isError && <h3>Somthing went wrong</h3>}
        {isSuccess && (
            Users.map((user) => (
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <h4>{user.email}</h4>
                </div>
            ))
        )}
    </>
  ) 
}

export default Users