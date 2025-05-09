import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const isActive = (path) => {
    return currentPath === path;
  };

  const getNavLinkClass = (path) => {
    const baseClasses =
      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-amber-500 hover:text-white focus:bg-amber-600 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-amber-700 dark:hover:text-white dark:focus:bg-amber-700 dark:focus:text-white";

    return isActive(path)
      ? `${baseClasses} bg-amber-600 text-white dark:bg-amber-700 dark:text-white`
      : `${baseClasses} bg-amber-100 text-amber-900 dark:bg-amber-900 dark:text-amber-100`;
  };

  const getMobileLinkClass = (path) => {
    const baseClasses = "flex w-full items-center py-2 text-lg font-semibold";

    return isActive(path)
      ? `${baseClasses} text-amber-600 dark:text-amber-400`
      : baseClasses;
  };

  return (
    <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 justify-between bg-amber-100 text-amber-800 shadow-lg">
      {/* Website Logo and Name on the left */}
      <div className="flex items-center">
        <Link to="/" prefetch="false" className="flex items-center">
          {/* <TempleIcon className="h-6 w-6 mr-2 text-amber-300" /> */}
          <img
            src="./logo.png"
            className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
            alt="Temple Logo"
          />
          <span className="font-bold text-lg text-amber-800 ml-2">
            परब्रम्हस्वरूपिणी
          </span>
        </Link>
      </div>

      {/* Desktop Navigation - Center */}
      <NavigationMenu className="hidden lg:flex mx-auto">
        <NavigationMenuList className="gap-1">
          <NavigationMenuLink asChild>
            <Link to="/" className={getNavLinkClass("/")} prefetch="false">
              Home
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/booking"
              className={getNavLinkClass("/booking")}
              prefetch="false"
            >
              Book Puja
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu - Right Side */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden border-amber-300 text-amber-300 hover:bg-amber-800 hover:text-amber-100"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="p-5 bg-gradient-to-b from-red-900 to-amber-900 text-amber-100 border-l border-amber-700"
        >
          <div className="flex items-center mb-6">
            <TempleIcon className="h-6 w-6 mr-2 text-amber-300" />
            <span className="font-bold text-lg text-amber-100">
              Temple Name
            </span>
          </div>
          <div className="grid gap-4 py-6">
            <Link to="/" className={getMobileLinkClass("/")} prefetch="false">
              Home
            </Link>
            <Link
              to="/booking"
              className={getMobileLinkClass("/booking")}
              prefetch="false"
            >
              Book Puja
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function TempleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
      <path d="M6 12v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M12 3v10" />
      <path d="m8 7 4-4 4 4" />
      <path d="M2 21h20" />
    </svg>
  );
}
