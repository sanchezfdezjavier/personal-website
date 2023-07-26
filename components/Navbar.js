import { useWindowScroll } from "react-use";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const { _, y } = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className="hidden lg:block">
      <div
        className={`${
          isScrolled ? "shadow-sm" : ""
        } fixed left-0 top-0 z-50 h-12 w-full bg-white bg-opacity-90 backdrop-blur-sm transition-shadow`}
      />
      <nav className="fixed left-0 top-0 z-[1001] grid h-12 w-full grid-cols-3 items-center justify-center">
        <div className="flex items-center justify-center"></div>
        <NavLinks />
      </nav>
    </div>
  );
}
