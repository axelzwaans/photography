import { useContext, useState, useEffect } from "react";

import Socials from "./Socials";
import MobileNav from "./MobileNav";
import logo2 from "../img/header/logo2.png";
import { Link } from "react-router-dom";

import { CursorContext } from "../context/CursorContext";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamic class for header style
  const headerClass = scrolled && "bg-[#f0f9ff]";
  const headerStyle = {
    transition: "background-color 0.8s ease,",
  };

  return (
    <header
      className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center ${headerClass}`}
      style={headerStyle}
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[200px]"
        >
          <img src={logo2} alt="logo" />
        </Link>
        {/* Navigation */}
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden lg:flex gap-x-12 font-semibold"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {/* Socials */}
      <Socials />
      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
