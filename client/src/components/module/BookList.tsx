import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { selectBooks } from "@/redux/features/books/bookSlice";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
import { SquarePen, Trash2 } from "lucide-react";

const BookList = () => {
  const books = useAppSelector(selectBooks);
  console.log(books);
  return (
    <Table>
      <TableCaption>A list of all the books.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Genre</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>ISBN</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Copies</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell className="font-medium">{book.genre}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.copies}</TableCell>
            <TableCell>
              <span
                className={`${book.available ? "bg-green-500" : "bg-red-500"} px-3 py-1 rounded-full text-white`}
              >
                {book.available ? "Available" : "Not Available"}
              </span>
            </TableCell>
            <TableCell className="flex justify-end gap-2">
              <Button
                size={"sm"}
                variant={"outline"}
                className="hover:bg-primary hover:text-white"
              >
                Borrow
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className="hover:bg-primary hover:text-white"
              >
                <SquarePen />
              </Button>
              <Button
                size={"sm"}
                variant={"outline"}
                className="text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Trash2 />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BookList;
