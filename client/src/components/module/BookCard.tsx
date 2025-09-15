import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link } from "react-router";
import { useGetBooksQuery } from "@/api/baseApi";
import Loading from "@/utils/Loading";
import type { IBook } from "@/types/book";

const BookCard = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books = data?.data;

  if (isLoading) return <Loading />;
  return (
    <div className="w-full container mx-auto px-3 my-28">
      <h3 className="text-center font-bold text-3xl mb-10">Featured Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books?.map((book: IBook) => (
          <Card key={book._id} className="w-full">
            <CardHeader>
              <Link to={`/books/${book._id}`}>
                <CardTitle>
                  {book.title} ({book.genre})
                </CardTitle>
              </Link>
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
              <Button type="submit">
                <Link to={`/books/${book._id}`} className="w-full">
                  View Details
                </Link>
              </Button>
              <Button
                type="submit"
                variant={"outline"}
                disabled={!book.available}
              >
                <Link to={`/borrow/${book._id}`} className="w-full">
                  {book.available ? "Borrow This Book" : "Not Available"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
