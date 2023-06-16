import React from "react";

import logo from "public/logo.png";
import Image from "next/image";

const IconLogo = () => {
  return (
    // <svg
    //   id="logo"
    //   viewBox="5.524 9.958 418.504 482.889"
    //   className="h-12 w-12  text-accent"
    // >
    //   <title>Logo</title>
    //   <g transform="matrix(5.365434, 0, 0, 5.365434, -53.495533, -16.869593)">
    //     <g transform="translate(11.000000, 5.000000)">
    //       <polygon
    //         id="Shape"
    //         stroke="currentColor"
    //         strokeWidth="5"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         points="39 0 0 22 0 67 39 90 78 68 78 23"
    //       ></polygon>
    //       <text
    //         style={{
    //           whiteSpace: "pre",
    //         }}
    //         transform="matrix(6.967023, 0, 0, 7.768759, -672.503906, -317.026459)"
    //         x="98.359"
    //         y="49.543"
    //         className=" fill-slateLight text-[8.2px]"
    //       >
    //         IS
    //       </text>
    //     </g>
    //   </g>
    // </svg>
    <Image src={logo} alt="Logo" className="h-12 w-12" />
  );
};

export default IconLogo;
