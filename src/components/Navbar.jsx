import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F4DEFC] py-4 px-6 flex items-center justify-between shadow-md">
      {/* IntegraYouth Logo and Name */}
      <div className="flex items-center">
        <img
          src="/integraYouth-logo.png" // Replace with actual logo file path
          alt="IntegraYouth Logo"
          className="h-8 mr-2"
        />
        <Link to="/" className="text-lg font-semibold">
          IntegraYouth
        </Link>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-12">
        <Link to="/team" className="text-lg font-medium hover:text-purple-700">
          Our Team
        </Link>

        {/* Apply Dropdown */}
        <div className="relative inline-block">
          <button className="text-lg font-medium hover:text-purple-700">
            Apply
          </button>
          <div className="absolute hidden bg-white rounded-md shadow-md mt-2 py-2 w-40">
            <Link
              to="/program-application"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Program Application
            </Link>
            <Link
              to="/volunteer-application"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Volunteer Application
            </Link>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="relative inline-block">
          <button className="text-lg font-medium hover:text-purple-700">
            Resources
          </button>
          <div className="absolute hidden bg-white rounded-md shadow-md mt-2 py-2 w-40">
            <Link
              to="/code-of-conduct"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Code of Conduct
            </Link>
          </div>
        </div>

        <Link to="/faq" className="text-lg font-medium hover:text-purple-700">
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
