import React from 'react'
import VextGamesLogo from "../images/VextGameLogo.png";

const navigation = [
  { name: "Vext Games", href: "/" },
  { name: "Vextorial", href: "vextorial" },
  // { name: "Boxy", href: "boxy" },
];

const NavigationBar = () => {
  return (
    <nav
          className="flex items-center justify-between p-6 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Vext Games</span>
              <img className="h-20 w-auto" src={VextGamesLogo} alt="" />
            </a>
          </div>
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-semibold leading-6 text-white text-outline neon-text"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
  )
}

export default NavigationBar