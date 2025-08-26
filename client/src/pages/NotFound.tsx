import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Page not found.</p>
      <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded">
        Go Home
      </Link>
    </div>
  );
}
