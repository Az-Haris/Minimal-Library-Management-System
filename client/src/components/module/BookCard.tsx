import { useAppSelector } from "@/redux/hooks";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { selectBooks } from "@/redux/features/books/bookSlice";
import { Link } from "react-router";

const BookCard = () => {
  const books = useAppSelector(selectBooks);
  return (
    <div className="w-full container mx-auto px-3 my-28">
      <h3 className="text-center font-bold text-3xl mb-10">Featured Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>
                  {book.title} ({book.genre})
                </CardTitle>
                <CardDescription>{book.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Author: </strong> {book.author}
                </p>
                <p>
                  <strong>ISBN: </strong> {book.isbn}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Link to={`/books/${book.id}`} className="w-full">
                  <Button type="submit" className="w-full">
                    View Details
                  </Button>
                </Link>
                <Link to={"/borrow"} className="w-full">
                  <Button type="submit" className="w-full" variant={"outline"}>
                    Borrow This Book
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
