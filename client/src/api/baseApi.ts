import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api"}),
    tagTypes: ["book"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => "/books",
            providesTags: ["book"]
        }),
        getSingleBook: builder.query({
            query: (id) => `/books/${id}`,
            providesTags: ["book"]
        }),
        createBook: builder.mutation({
            query: (bookData) =>({
                url: "/books",
                method: "POST",
                body: bookData
            }),
            invalidatesTags: ["book"]
        }),
        deleteBook: builder.mutation({
            query: (id: string) =>({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["book"]
        }),
        borrowBook: builder.mutation({
            query: (borrowData) =>({
                url: `/borrow`,
                method: "POST",
                body: borrowData
            }),
            invalidatesTags: ["book"]
        }),
        getBorrowSummary: builder.query({
            query: () => '/borrow',
            providesTags: ["book"]
        })
    })
})

export const { useGetBooksQuery, useGetSingleBookQuery, useCreateBookMutation, useDeleteBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery} = baseApi