import React from "react";
import VextGamesLogo from "../images/VextGameLogo.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Vext Games", href: "/" },
  { name: "Vextorial", href: "/vextorial" },
  // { name: "Boxy", href: "boxy" },
];

const NavigationBar = () => {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-12"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Vext Games</span>
          <img className="h-20 w-auto" src={VextGamesLogo} alt="" />
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
    </nav>
  );
};

export default NavigationBar;
