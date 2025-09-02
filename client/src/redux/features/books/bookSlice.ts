import type { RootState } from "@/redux/store";
import type { IBook } from "@/types/book";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    books: IBook[];
}

const initialState: InitialState = {
  books: [
    {
      id: "asdgvdwgasdasdgasdfasdf",
      title: "Book Title",
      author: "Author",
      genre: "SiFi",
      isbn: "2556334",
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: true,
    },
    {
      id: "asdgvdwgasdasdgasdfasdf",
      title: "Book Title",
      author: "Author",
      genre: "SiFi",
      isbn: "2556334",
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: false,
    },
    {
      id: "asdgvdwgasdasdgasdfasdf",
      title: "Book Title",
      author: "Author",
      genre: "SiFi",
      isbn: "2556334",
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: true,
    },
    {
      id: "asdgvdwgasdasdgasdfasdf",
      title: "Book Title",
      author: "Author",
      genre: "SiFi",
      isbn: "2556334",
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: true,
    },
    {
      id: "asdgvdwgasdasdgasdfasdf",
      title: "Book Title",
      author: "Author",
      genre: "SiFi",
      isbn: "2556334",
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: true,
    },
    {
      id: "asdgvdwgasdasdgasdfasdf",
      title: "Book Title",
      author: "Author",
      genre: "SiFi",
      isbn: "2556334",
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: true,
    },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const selectBooks = (state: RootState) => {
  return state.book.books
}

export default bookSlice.reducer;
