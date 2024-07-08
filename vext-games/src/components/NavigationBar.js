import React, { useState } from "react";
import VextGamesLogo from "../images/VextGameLogo.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Vext Games", href: "/" },
  { name: "Vextorial", href: "/vextorial" },
  // { name: "Boxy", href: "boxy" },
];

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 lg:px-12" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Vext Games</span>
          <img className="h-20 w-auto" src={VextGamesLogo} alt="Vext Games Logo" />
        </Link>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-2xl font-semibold leading-6 text-white text-outline neon-text"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      <div className="lg:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 p-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-lg font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
