import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import BookList from "../features/books/BookList";

export default function BooksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">📚 All Books</h2>
        {/* <BookList /> */}

        list of books
      </main>
      <Footer />
    </div>
  );
}
