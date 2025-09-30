import React from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const NotFound: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <Helmet>
                <title>404 - Page Not Found | FastTruck Admin</title>
                <meta
                    name="description"
                    content="The page you are looking for does not exist on FastTruck Admin Panel."
                />
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <h1 className="text-9xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-6">Oops! Page not found.</p>
            <Link
                to="/admin/dashboard"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;
