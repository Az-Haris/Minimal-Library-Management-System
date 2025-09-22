import BookList from "@/components/module/BookList";
import ScrollToTop from "@/utils/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
// import BookList from "../features/books/BookList";

export default function BooksPage() {
  return (
    <main className="flex-1 p-6 container mx-auto px-3">
      <ScrollToTop/>
      <div className="flex justify-between mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">📚 All Books</h2>
        <Link to={"/create-book"}><Button className="bg-blue-500 hover:bg-blue-700">Add Book</Button></Link>
      </div>
        <BookList />
    </main>
  );
}


