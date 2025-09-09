import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api"}),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books"
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`
        })
    })
})

export const { useGetBooksQuery, useGetSingleBookQuery} = baseApi