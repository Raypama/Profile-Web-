// import { useState } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuNavbar = [
  {
    menu: "Home",
    link: "/",
  },
  {
    menu: "About",
    link: "/about",
  },
  {
    menu: "Skills",
    link: "/skills",
  },
  {
    menu: "Portofolio",
    link: "/portofolio",
  },
  {
    menu: "Contact",
    link: "/contact",
  },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);
      return (
    <div className="flex w-full fixed justify-between bg-blue-900 z-50 items-center px-6 sm:px-9 max-w-screen">
      {/* Logo */}
      <div className="font-semibold text-white drop-shadow-md text-lg sm:text-xl flex items-center">
        <img src="/src/assets/logo-R.png" className="h-16 sm:h-20 md:h-24 w-auto" />
        <p className="text-base sm:text-lg md:text-xl">&lt;ray / restu&gt;</p>
      </div>

      {/* Menu Navbar */}
      <div className="hidden sm:flex gap-6 sm:gap-10">
        {menuNavbar.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            className={({ isActive }) =>
              `text-base sm:text-lg font-semibold text-white hover:text-blue-500 ${isActive ? "opacity-60" : ""}`
            }
          >
            {item.menu}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-900 text-white flex flex-col items-center py-4 sm:hidden">
          {menuNavbar.map((item, i) => (
            <NavLink
              key={i}
              to={item.link}
              className={({ isActive }) =>
                `py-2 text-lg font-semibold hover:text-blue-500 ${isActive ? "opacity-60" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.menu}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
  
}

export default Header;
