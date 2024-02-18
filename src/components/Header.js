// import components
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import logo2 from "../img/header/logo2.png";
import { Link } from "react-router-dom";

// Navigation items
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[130px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to="/" className="max-w-[200px]">
          <img src={logo2} alt="logo" />
        </Link>
        {/* Navigation - initially hidden - show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-[#696c6d] hover:text-primary transition"
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
