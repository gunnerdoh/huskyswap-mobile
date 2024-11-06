import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-600 shadow-lg">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            HuskySwap
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-200">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;