import { Link } from "react-router";

const Home = () => {
  return (
    <main className="flex-1 flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        📚 Welcome to Minimal Library System
      </h1>
      <p className="text-gray-600 mb-6">
        Manage your library with ease — add, edit, borrow, and track books.
      </p>
      <Link to="/books" className="bg-blue-600 text-white px-6 py-3 rounded">
        View All Books
      </Link>
    </main>
  );
};

export default Home;
