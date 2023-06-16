import React, { useState } from "react";
import Link from "next/link";
import IconLogo from "./IconLogo";

interface NavbarProps {
  toggleBlur: () => void;
}

const Navbar = ({ toggleBlur }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    toggleBlur();
  };

  return (
    <nav className="flex flex-wrap items-center justify-between  p-6">
      <div className="mr-6 flex flex-shrink-0 items-center  text-white">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          <IconLogo />
        </Link>
      </div>

      {/* Mobile menu  icon*/}
      <div className="block lg:hidden">
        <button
          className="flex items-center rounded  px-3 py-2 text-accent hover:border-white hover:text-white"
          onClick={handleClick}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>Menu</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                className="fill-accent"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <div
        className={` block w-full flex-grow  pr-16 lg:flex lg:w-auto lg:items-center ${
          open ? "" : "hidden"
        } lg:block`}
      >
        <div className="   text-sm lg:flex lg:flex-grow lg:justify-end">
          <Link
            href="/about"
            className="mr-4 mt-10 block  text-end text-6xl text-slateLight hover:text-accent sm:text-3xl lg:mt-0 lg:inline-block"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="mr-4 mt-10 block text-end text-6xl text-slateLight hover:text-accent sm:text-3xl lg:mt-0 lg:inline-block"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="mr-4 mt-10 block text-end text-6xl text-slateLight hover:text-accent sm:text-3xl lg:mt-0 lg:inline-block"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mt-10 block text-end text-6xl text-slateLight hover:text-accent sm:text-3xl lg:mt-0 lg:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
