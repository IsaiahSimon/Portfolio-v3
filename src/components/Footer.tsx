import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center">
      <div className="w-1/3"></div>
      <span className="w-1/3 text-center text-sm text-slateDark">
        © {new Date().getFullYear()} Built with care by{" "}
        <Link href="/about" className="cursor-pointer hover:text-accent ">
          Isaiah Simon
        </Link>
      </span>
      <span className="w-1/3 text-center text-sm text-slateDark hover:text-accent">
        <Link href="/credits ">Credits.</Link>
      </span>
    </footer>
  );
};

export default Footer;
