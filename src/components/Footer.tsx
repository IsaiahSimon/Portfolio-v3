import React from "react";

const Footer = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center  ">
      <p className="text-sm text-slateDark">
        © {new Date().getFullYear()} Built with care by Isaiah Simon
      </p>
    </footer>
  );
};

export default Footer;
