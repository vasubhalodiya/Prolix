import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userApi = createApi({ 
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://68199e621ac115563505672e.mockapi.io' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
        }),
    })
})

export const { useGetUsersQuery } = userApi;