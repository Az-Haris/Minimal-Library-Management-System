import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteBook, selectBooks } from "@/redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Link } from "react-router";

const BookList = () => {
  const books = useAppSelector(selectBooks);
  const dispatch = useAppDispatch()

  const handleDelete = (id: string) =>{
    dispatch(deleteBook(id))
  }
  return (
    <>
      <Table>
        <TableCaption>A list of all the books.</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-50">
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
              <TableCell>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell>
                <span
                  className={`${
                    book.available ? "bg-green-500" : "bg-red-500"
                  } px-3 py-1 rounded-full text-white`}
                >
                  {book.available ? "Available" : "Not Available"}
                </span>
              </TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link to={`/borrow/${book.id}`}>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="hover:bg-primary hover:text-white"
                  >
                    Borrow
                  </Button>
                </Link>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={`/edit-book/id`}>
                      <Button
                        size={"sm"}
                        variant={"outline"}
                        className="hover:bg-primary hover:text-white"
                      >
                        <SquarePen />
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit Book</p>
                  </TooltipContent>
                </Tooltip>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      size={"sm"}
                      variant={"outline"}
                      className="text-red-500 hover:bg-red-500 hover:text-white"
                    >
                      <Trash2 />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure want to delete?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete this book and remove it from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={()=>handleDelete(book.id)} className="bg-red-500">
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BookList;
