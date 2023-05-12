import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between  p-6">
      <div className="mr-6 flex flex-shrink-0 items-center  text-white">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          iSimonDev
        </Link>
      </div>
      <div className="block  lg:hidden">
        <button
          className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={` block w-full flex-grow  lg:flex lg:w-auto lg:items-center ${
          open ? "" : "hidden"
        } lg:block`}
      >
        <div className="text-sm lg:flex lg:flex-grow lg:justify-end">
          <Link
            href="/about"
            className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
