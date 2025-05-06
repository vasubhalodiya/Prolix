import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://68199e621ac115563505672e.mockapi.io' }),
  endpoints: (builder) => ({
    getUsers: builder.query({ query: () => 'users' }),
    getUser: builder.query({ query: (id) => `users/${id}` }),
    addUser: builder.mutation({ query: (newUser) => ({
      url: 'users', method: 'POST', body: newUser
    })}),
    updateUser: builder.mutation({ query: ({ id, ...data }) => ({
      url: `users/${id}`, method: 'PUT', body: data
    })}),
    deleteUser: builder.mutation({ query: (id) => ({
      url: `users/${id}`, method: 'DELETE'
    })}),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = userApi;
