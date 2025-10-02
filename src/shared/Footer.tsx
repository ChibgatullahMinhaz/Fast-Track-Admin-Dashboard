import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Dynamic Year
    return (
        <footer className="bg-gray-800 text-white h-12 flex items-center justify-center shadow-inner mt-auto">
            <p className="text-sm">© {currentYear} FastTruck Admin. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
