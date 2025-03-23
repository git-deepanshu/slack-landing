import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex-shrink-0">
              <img
                src=".\src\assets\slack-logo-cropped.png"
                alt="Slack"
                className="h-8 w-auto"
              />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-1 hover:text-[#611E67]"
                >
                  <span>Products</span>
                  <ChevronDown size={16} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2">
                    <a
                      href="#features"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Features
                    </a>
                    <a
                      href="#solutions"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Solutions
                    </a>
                    <a
                      href="#integrations"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Integrations
                    </a>
                  </div>
                )}
              </div>
              <a href="#enterprise" className="hover:text-[#611E67]">
                Enterprise
              </a>
              <a href="#resources" className="hover:text-[#611E67]">
                Resources
              </a>
              <a href="#pricing" className="hover:text-[#611E67]">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search size={20} />
            </button>
            <a
              href="/signin"
              className="hidden md:inline-block hover:text-[#611E67]"
            >
              Sign In
            </a>
            <a
              href="/sales"
              className="hidden md:inline-block px-4 py-2 border border-[#611E67] text-[#611E67] rounded-md hover:bg-[#611E67] hover:text-white transition-colors"
            >
              Talk to Sales
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-[#611E67] text-white rounded-md hover:bg-[#4A1751] transition-colors"
            >
              Try for Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
