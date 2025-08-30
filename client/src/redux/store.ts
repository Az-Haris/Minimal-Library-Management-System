import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./features/books/bookSlice";

const store = configureStore({
    reducer: {
        book: bookSlice.reducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch