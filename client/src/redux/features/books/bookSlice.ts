import type { RootState } from "@/redux/store";
import type { IBook } from "@/types/book";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    books: IBook[];
}

const initialState: InitialState = {
  books: [
    {
      _id: "asdgvdwgasasdf",
      title: "Theory of Computation",
      author: "Az Haris",
      genre: "SiFi",
      isbn: 2556334,
      description: "book description here. about 10-15 words. This should be a single paragraph.",
      copies: 1,
      available: true,
    },
  ],
};

type DraftBook = Pick<IBook, "title" | "author" | "available" | "copies" | "description" | "genre" | "isbn">

const createDraftBook = (bookData: DraftBook): IBook => {
  return { _id: nanoid(), ...bookData}
}

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    createBook : (state, action: PayloadAction<DraftBook>) => {
      const bookData = createDraftBook(action.payload)
      state.books.push(bookData)
    }, 
    deleteBook: (state, action: PayloadAction<string>)=>{
      state.books = state.books.filter((book)=> book._id !== action.payload)
    },
    editBook: (state, action: PayloadAction<IBook>) =>{
      const index = state.books.findIndex((book) => book._id === action.payload._id);
      if(index !== -1){
        state.books[index] = action.payload;
      }
    }
  },
});

export const selectBooks = (state: RootState) => {
  return state.book.books
}

export const getSingleBook = (state: RootState, id: string) => {
  return state.book.books.find((book)=> book._id === id)
}


export const {createBook, deleteBook} = bookSlice.actions;
export default bookSlice.reducer;
