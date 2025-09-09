import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/books/bookSlice";
import { baseApi } from "@/api/baseApi";

const store = configureStore({
    reducer: {
        book: bookSlice.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch