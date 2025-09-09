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
import { useGetBooksQuery } from "@/api/baseApi";
import Loading from "@/utils/Loading";

const BookCard = () => {
  const books = useAppSelector(selectBooks);
  const {data, isLoading, isError} = useGetBooksQuery(undefined)

  if(isLoading) return <Loading/>
  return (
    <div className="w-full container mx-auto px-3 my-28">
      <h3 className="text-center font-bold text-3xl mb-10">Featured Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data.map((book) => (
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
                <Link to={`/books/${book._id}`} className="w-full">
                  <Button type="submit" className="w-full">
                    View Details
                  </Button>
                </Link>
                <Link to={`/borrow/${book._id}`} className="w-full">
                  <Button type="submit" className="w-full" variant={"outline"}>
                    Borrow This Book
                  </Button>
                </Link>
              </CardFooter>
            </Card>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
