export interface IBorrow {
  _id: string;
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}
