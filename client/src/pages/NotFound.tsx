import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center px-6">
      <h1 className="text-8xl font-extrabold text-blue-600 drop-shadow-lg mb-4 animate-bounce">
        404
      </h1>
      <p className="text-gray-700 text-lg md:text-xl mb-6">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-2xl shadow-lg"
      >
        Go Back Home
      </Link>

      {/* Decorative element */}
      <div className="mt-12 text-6xl opacity-20 select-none">📚</div>
    </div>
  );
}
