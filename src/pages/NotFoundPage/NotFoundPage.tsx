import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 drop-shadow-lg">
          404
        </h1>

        {/* Divider line */}
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-teal-300 mx-auto my-6 rounded"></div>

        {/* Subtitle */}
        <p className="text-xl font-light text-gray-300 mb-8">
          Oops! The page you are looking for doesn’t exist.
        </p>

        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FaHome />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
