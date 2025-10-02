import React from 'react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white h-16 flex items-center px-6 shadow-md">
            <div className="text-2xl font-bold">FastTruck Admin</div>
            <div className="ml-auto flex items-center gap-4">
                {/* Profile Link */}
                <Link
                    to="/profile"
                    className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                >
                    Profile
                </Link>
                <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-500">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
