import { Link } from "react-router";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center h-[calc(100vh-70px)] p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          📚 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">Welcome to Minimal Library System</span>
        </h1>


        <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed">
          Manage your library with ease — add, edit, borrow, and track books
          with a clean and minimal interface.
        </p>
        <Link
          to="/books"
        >
          <Button className="bg-blue-500 hover:bg-blue-800" size={"lg"}>View All Books</Button>
        </Link>
      </div>

      {/* Optional animated arrow */}
      <div className="absolute bottom-6 animate-bounce text-gray-500">↓</div>
    </div>
  );
};

export default Header;
